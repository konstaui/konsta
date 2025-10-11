import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { BlockFooterClasses } from '../../shared/classes/BlockFooterClasses.js';
import { BlockFooterColors } from '../../shared/colors/BlockFooterColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-block-footer',
  
  imports: [CommonModule],
  template: `
    <div class="{{ classes() }}">
      <ng-content />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBlockFooterComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly inset = input<boolean>(false);

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    BlockFooterColors(this.colors() ?? {}, this.dark)
  );

  readonly classes: Signal<string> = computed(() => {
    const c = this.themeClasses(
      BlockFooterClasses(
        {
          inset: this.inset(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
    return c['base'] as string;
  });
}
