import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { PopupClasses } from '../../shared/classes/PopupClasses.js';
import { PopupColors } from '../../shared/colors/PopupColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

type PopupTag = 'div' | 'span';
type PopupState = 'opened' | 'closed';

@Component({
  selector: 'k-popup',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (backdrop()) {
      <div
        class="{{ backdropClasses()[state()] }}"
        (click)="onBackdropClick()"
      ></div>
    }
    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClasses()[state()] }}">
          <ng-content />
        </span>
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
export class KPopupComponent {
  readonly component = input<PopupTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly opened = input<boolean>(false);
  readonly backdrop = input<boolean>(true);

  readonly backdropClick = output<Event>();

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    PopupColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        PopupClasses(
          {
            opened: this.opened(),
          },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClasses: Signal<Record<PopupState, string>> = computed(
    () => this.classes()['base'] as Record<PopupState, string>
  );
  readonly backdropClasses: Signal<Record<PopupState, string>> = computed(
    () => this.classes()['backdrop'] as Record<PopupState, string>
  );

  readonly state: Signal<PopupState> = computed(() =>
    this.opened() ? 'opened' : 'closed'
  );

  readonly componentTag: Signal<PopupTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    if (value === 'span') return 'span';
    return 'div';
  });

  onBackdropClick() {
    this.backdropClick.emit(new Event('backdropClick'));
  }
}
