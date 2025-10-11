import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  input,
  viewChild,
} from '@angular/core';
import { BlockTitleClasses } from '../../shared/classes/BlockTitleClasses.js';
import { BlockTitleColors } from '../../shared/colors/BlockTitleColors.js';
import { useDarkClasses, useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-block-title',
  
  imports: [CommonModule],
  template: `
    <div #root class="{{ classes() }}">
      <ng-content />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBlockTitleComponent {
  private readonly host = viewChild<ElementRef<HTMLElement>>('root');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly medium = input<boolean | undefined>(undefined);
  readonly large = input<boolean | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    BlockTitleColors(this.colors() ?? {}, this.dark)
  );

  readonly classes: Signal<string> = computed(() => {
    const classes = this.themeClasses(
      BlockTitleClasses(
        {
          medium: this.medium(),
          large: this.large(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
    return classes['base'] as string;
  });

  constructor() {
    effect(() => {
      const el = this.host()?.nativeElement;
      if (!el) return;
      el.setAttribute('class', this.classes());
    });
  }
}
