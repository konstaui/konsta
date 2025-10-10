import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { BreadcrumbsSeparatorClasses } from '../../shared/classes/BreadcrumbsSeparatorClasses.js';
import { useThemeClasses } from '../shared/theme-helpers.js';
import { KChevronIconComponent } from './icons/chevron-icon.component.js';

@Component({
  selector: 'k-breadcrumbs-separator',
  standalone: true,
  imports: [CommonModule, KChevronIconComponent],
  template: `
    @switch (tag()) {
      @case ('span') {
        <span class="{{ classes() }}">
          <k-chevron-icon class="{{ iconClasses() }}" />
          <ng-content />
        </span>
      }
      @case ('li') {
        <li class="{{ classes() }}">
          <k-chevron-icon class="{{ iconClasses() }}" />
          <ng-content />
        </li>
      }
      @default {
        <div class="{{ classes() }}">
          <k-chevron-icon class="{{ iconClasses() }}" />
          <ng-content />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBreadcrumbsSeparatorComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private static readonly SUPPORTED_TAGS = new Set(['div', 'span', 'li']);
  readonly tag: Signal<'div' | 'span' | 'li'> = computed(() => {
    const raw = (this.component() ?? 'div').toLowerCase();
    return (KBreadcrumbsSeparatorComponent.SUPPORTED_TAGS.has(raw)
      ? raw
      : 'div') as 'div' | 'span' | 'li';
  });

  private readonly classesObj = computed(
    () =>
      this.themeClasses(
        BreadcrumbsSeparatorClasses({}),
        this.className()
      ) as Record<string, any>
  );

  readonly classes: Signal<string> = computed(
    () => this.classesObj()['base'] as string
  );
  readonly iconClasses: Signal<string> = computed(
    () => this.classesObj()['icon'] as string
  );
}
