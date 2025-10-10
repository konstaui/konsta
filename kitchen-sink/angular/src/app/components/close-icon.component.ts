import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-close-icon',
  template: `
    @if (isIos()) {
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M6 18L18 6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    } @else {
      <svg
        viewBox="0 0 24 24"
        class="w-6 h-6"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseIconComponent {
  private readonly themeService = inject(ThemeService);

  readonly isIos = computed(() => this.themeService.theme() === 'ios');
}
