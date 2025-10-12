import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { BlockHeaderClasses } from '../../shared/classes/BlockHeaderClasses.js';
import { BlockHeaderColors } from '../../shared/colors/BlockHeaderColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
  useThemeSpecificProps,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-block-header',
  
  imports: [CommonModule],
  template: `
    <div class="{{ classes() }}">
      <ng-content />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBlockHeaderComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly inset = input<boolean | undefined>(undefined);
  readonly insetIos = input<boolean | undefined>(undefined);
  readonly insetMaterial = input<boolean | undefined>(undefined);

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
    BlockHeaderColors(this.colors() ?? {}, this.dark)
  );

  private readonly resolvedProps = useThemeSpecificProps(
    this.theme,
    () => ({
      inset: this.inset(),
    }),
    () => ({
      insetIos: this.insetIos(),
      insetMaterial: this.insetMaterial(),
    })
  );

  readonly classes: Signal<string> = computed(() => {
    const resolved = this.resolvedProps();
    const c = this.themeClasses(
      BlockHeaderClasses(
        {
          inset: resolved.inset,
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
    return c['base'] as string;
  });
}
