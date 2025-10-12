import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';
import { BreadcrumbsItemColors } from '../../shared/colors/BreadcrumbsItemColors.js';
import {
  useDarkClasses,
  useThemeClasses,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-breadcrumbs-item',
  
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    <ng-template #itemContent>
      <ng-content />
    </ng-template>

    @switch (tag()) {
      @case ('a') {
        <a
          class="{{ classes() }}"
          role="menuitem"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <ng-container *ngTemplateOutlet="itemContent"></ng-container>
        </a>
      }
      @case ('button') {
        <button
          class="{{ classes() }}"
          role="menuitem"
          tabindex="0"
          type="button"
          (click)="handleClick($event)"
        >
          <ng-container *ngTemplateOutlet="itemContent"></ng-container>
        </button>
      }
      @case ('span') {
        <span
          class="{{ classes() }}"
          role="menuitem"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <ng-container *ngTemplateOutlet="itemContent"></ng-container>
        </span>
      }
      @case ('li') {
        <li
          class="{{ classes() }}"
          role="menuitem"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <ng-container *ngTemplateOutlet="itemContent"></ng-container>
        </li>
      }
      @default {
        <div
          class="{{ classes() }}"
          role="menuitem"
          tabindex="0"
          (click)="handleClick($event)"
        >
          <ng-container *ngTemplateOutlet="itemContent"></ng-container>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBreadcrumbsItemComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly active = input<boolean>(false);

  readonly clicked = output<Event>();

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private static readonly SUPPORTED_TAGS = new Set(['div', 'span', 'a', 'button', 'li']);
  readonly tag: Signal<'div' | 'span' | 'a' | 'button' | 'li'> = computed(() => {
    const raw = (this.component() ?? 'div').toLowerCase();
    return (KBreadcrumbsItemComponent.SUPPORTED_TAGS.has(raw)
      ? raw
      : 'div') as 'div' | 'span' | 'a' | 'button' | 'li';
  });

  private readonly palette = computed(() =>
    BreadcrumbsItemColors(this.colors() ?? {}, this.dark)
  );

  readonly classes: Signal<string> = computed(() => {
    const c = this.themeClasses(
      BreadcrumbsItemClasses(
        {
          active: this.active(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
    return c['base'] as string;
  });

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
