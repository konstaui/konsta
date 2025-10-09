import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { ActionsClasses } from '../../shared/classes/ActionsClasses.js';
import { useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (backdrop()) {
      <div
        class="{{ backdropClasses()[state()] }}"
        (click)="handleBackdropClick($event)"
      ></div>
    }
    <{{ component() }} class="{{ baseClasses()[state()] }}">
      <ng-content />
    </{{ component() }}>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KActionsComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly opened = input<boolean>(false);
  readonly backdrop = input<boolean>(true);

  readonly backdropClick = output<Event>();

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly classes = computed(
    () =>
      this.themeClasses(ActionsClasses(), this.className()) as Record<
        string,
        any
      >
  );

  readonly baseClasses: Signal<Record<string, string>> = computed(
    () => this.classes()['base'] as Record<string, string>
  );

  readonly backdropClasses: Signal<Record<string, string>> = computed(
    () => this.classes()['backdrop'] as Record<string, string>
  );

  readonly state: Signal<'opened' | 'closed'> = computed(() =>
    this.opened() ? 'opened' : 'closed'
  );

  handleBackdropClick(event: Event) {
    this.backdropClick.emit(event);
  }
}
