import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { GlassClasses } from '../../shared/classes/GlassClasses.js';
import { useDarkClasses, useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-glass',
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (component()) {
      @case ('span') {
        <span class="{{ classes() }}">
          <ng-content />
        </span>
      }
      @case ('section') {
        <section class="{{ classes() }}">
          <ng-content />
        </section>
      }
      @default {
        <div class="{{ classes() }}">
          <ng-content />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KGlassComponent {
  readonly component = input<'div' | 'span' | 'section'>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  readonly classes = computed(() =>
    this.themeClasses(
      GlassClasses({}, this.dark),
      this.className()
    )['base'] as string
  );
}
