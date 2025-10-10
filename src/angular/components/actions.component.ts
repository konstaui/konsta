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
    @switch (tag()) {
      @case ('section') {
        <section class="{{ baseClasses()[state()] }}">
          <ng-content />
        </section>
      }
      @case ('nav') {
        <nav class="{{ baseClasses()[state()] }}">
          <ng-content />
        </nav>
      }
      @case ('aside') {
        <aside class="{{ baseClasses()[state()] }}">
          <ng-content />
        </aside>
      }
      @default {
        <div class="{{ baseClasses()[state()] }}">
          <ng-content />
        </div>
      }
    }
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
  private static readonly SUPPORTED_TAGS = new Set(['div', 'section', 'nav', 'aside']);
  readonly tag: Signal<'div' | 'section' | 'nav' | 'aside'> = computed(() => {
    const raw = (this.component() ?? 'div').toLowerCase();
    return (KActionsComponent.SUPPORTED_TAGS.has(raw)
      ? raw
      : 'div') as 'div' | 'section' | 'nav' | 'aside';
  });

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
