import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { NavbarBackLinkClasses } from '../../shared/classes/NavbarBackLinkClasses.js';
import { useThemeSignal, useThemeClasses } from '../shared/theme-helpers.js';
import { KLinkComponent } from './link.component.js';

@Component({
  selector: 'k-navbar-back-link',
  standalone: true,
  imports: [CommonModule, KLinkComponent],
  template: `
    <k-link
      [component]="component()"
      [navbar]="true"
      [class]="baseClass()"
      (clicked)="handleClick($event)"
    >
      <span class="{{ iconClass() }}" aria-hidden="true">
        <svg
          *ngIf="theme() === 'ios'; else materialIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="currentColor"
        >
          <path
            d="M10.6738 1.29289C11.0343 1.65335 11.062 2.22055 10.757 2.61282L10.6737 2.70706 3.76757 9.61235C3.594 9.78591 3.57469 10.0553 3.70967 10.2502L3.76753 10.3195 10.6738 17.2262C11.0643 17.6168 11.0643 18.2499 10.6738 18.6405 10.2833 19.031 9.6501 19.031 9.25958 18.6405L1.29289 10.6738C0.902369 10.2833 0.902369 9.6501 1.29289 9.25958L9.25958 1.29289C9.62006 0.932409 10.1873 0.90468 10.5796 1.2097L10.6738 1.29289Z"
          />
        </svg>
        <ng-template #materialIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <polygon points="16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9" />
          </svg>
        </ng-template>
      </span>
      <span *ngIf="showText()">{{ text() }}</span>
      <ng-content />
    </k-link>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KNavbarBackLinkComponent {
  readonly component = input<'a' | 'button'>('a');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly text = input('Back');
  readonly showText = input(true);

  readonly clicked = output<Event>();

  private readonly themeClasses = useThemeClasses();
  readonly theme = useThemeSignal();

  private readonly classes = computed(
    () =>
      this.themeClasses(NavbarBackLinkClasses(), this.className()) as Record<
        string,
        any
      >
  );

  readonly baseClass: Signal<string> = computed(() => this.classes()['base']);
  readonly iconClass: Signal<string> = computed(() => this.classes()['icon']);

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
