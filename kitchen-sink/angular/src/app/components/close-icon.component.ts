import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-close-icon',
  template: `
    @if (isIos()) {
      <i class="f7-icons" style="font-size: 20px;">xmark</i>
    } @else {
      <i class="material-icons" style="font-size: 24px;">close</i>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseIconComponent {
  private readonly themeService = inject(ThemeService);

  readonly isIos = computed(() => this.themeService.theme() === 'ios');
}
