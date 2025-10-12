import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
import { BadgeColors } from '../../shared/colors/BadgeColors.js';
import { useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-badge',

  imports: [CommonModule],
  template: `
    @switch (component()) {
      @case ('span') {
        <span [class]="classes()">
          <ng-content />
        </span>
      }
      @case ('div') {
        <div [class]="classes()">
          <ng-content />
        </div>
      }
      @case ('a') {
        <a [class]="classes()">
          <ng-content />
        </a>
      }
      @case ('button') {
        <button [class]="classes()">
          <ng-content />
        </button>
      }
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBadgeComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly small = input<boolean | undefined>(undefined);
  readonly component = input<'span' | 'div' | 'a' | 'button'>('span');

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
    const isSmall = this.small();
    return cls(base[isSmall ? 'sm' : 'md'], this.className());
  });
}
