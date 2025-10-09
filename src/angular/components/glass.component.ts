import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  input,
  viewChild,
} from '@angular/core';
import { GlassClasses } from '../../shared/classes/GlassClasses.js';
import { useDarkClasses, useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-glass',
  standalone: true,
  imports: [CommonModule],
  template: `
    <{{ component() }}
      #el
      class="{{ classes() }}"
    >
      <ng-content />
    </{{ component() }}>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KGlassComponent {
  private readonly el = viewChild<ElementRef<HTMLElement>>('el');

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
