import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { BreadcrumbsCollapsedClasses } from '../../shared/classes/BreadcrumbsCollapsedClasses.js';
import { BreadcrumbsCollapsedColors } from '../../shared/colors/BreadcrumbsCollapsedColors.js';
import {
  useDarkClasses,
  useThemeClasses,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-breadcrumbs-collapsed',
  
  imports: [CommonModule],
  template: `
    @switch (tag()) {
      @case ('button') {
        <button
          class="{{ baseClasses() }}"
          type="button"
          role="button"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <ng-content />
        </button>
      }
      @case ('a') {
        <a
          class="{{ baseClasses() }}"
          role="button"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <ng-content />
        </a>
      }
      @case ('span') {
        <span
          class="{{ baseClasses() }}"
          role="button"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <ng-content />
        </span>
      }
      @case ('li') {
        <li
          class="{{ baseClasses() }}"
          role="button"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <ng-content />
        </li>
      }
      @default {
        <div
          class="{{ baseClasses() }}"
          role="button"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <span class="{{ dotClasses() }}"></span>
          <ng-content />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBreadcrumbsCollapsedComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly clicked = output<Event>();

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private static readonly SUPPORTED_TAGS = new Set(['div', 'span', 'button', 'a', 'li']);
  readonly tag: Signal<'div' | 'span' | 'button' | 'a' | 'li'> = computed(() => {
    const raw = (this.component() ?? 'div').toLowerCase();
    return (KBreadcrumbsCollapsedComponent.SUPPORTED_TAGS.has(raw)
      ? raw
      : 'div') as 'div' | 'span' | 'button' | 'a' | 'li';
  });

  private readonly palette = computed(() =>
    BreadcrumbsCollapsedColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(() =>
    this.themeClasses(
      BreadcrumbsCollapsedClasses({}, this.palette()),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly dotClasses: Signal<string> = computed(
    () => this.classes()['dot'] as string
  );

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
