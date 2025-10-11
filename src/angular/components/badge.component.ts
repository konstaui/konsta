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
import { cls } from '../../shared/cls.js';
import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
import { BadgeColors } from '../../shared/colors/BadgeColors.js';
import { useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-badge',
  
  imports: [CommonModule],
  template: `
    <span #root class="{{ classes() }}">
      <ng-content />
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBadgeComponent {
  private readonly host = viewChild<ElementRef<HTMLElement>>('root');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly small = input<boolean>(false);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly palette = computed(() =>
    BadgeColors(this.colors() ?? {})
  );

  readonly classes: Signal<string> = computed(() => {
    const themed = this.themeClasses(
      BadgeClasses(
        {
          small: this.small(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;

    const base = themed['base'] as Record<string, string>;
    return cls(base[this.small() ? 'sm' : 'md'], this.className());
  });

  constructor() {
    effect(() => {
      const el = this.host()?.nativeElement;
      if (!el) return;
      el.setAttribute('class', this.classes());
    });
  }
}
