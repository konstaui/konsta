import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { SheetClasses } from '../../shared/classes/SheetClasses.js';
import { SheetColors } from '../../shared/colors/SheetColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

type SheetTag = 'div' | 'span';
type SheetState = 'opened' | 'closed';

@Component({
  selector: 'k-sheet',
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    @if (backdrop()) {
      <div
        class="{{ backdropClasses()[state()] }}"
        (click)="handleBackdropClick($event)"
      ></div>
    }

    <ng-template #content>
      <ng-content />
    </ng-template>

    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClasses()[state()] }}">
          <ng-container *ngTemplateOutlet="content" />
        </span>
      }
      @default {
        <div class="{{ baseClasses()[state()] }}">
          <ng-container *ngTemplateOutlet="content" />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KSheetComponent {
  readonly component = input<SheetTag>('div');
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
    SheetColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        SheetClasses(
          {
            opened: this.opened(),
          },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClasses: Signal<Record<SheetState, string>> = computed(
    () => this.classes()['base'] as Record<SheetState, string>
  );
  readonly backdropClasses: Signal<Record<SheetState, string>> = computed(
    () => this.classes()['backdrop'] as Record<SheetState, string>
  );

  readonly state: Signal<SheetState> = computed(() =>
    this.opened() ? 'opened' : 'closed'
  );

  readonly componentTag: Signal<SheetTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    if (value === 'span') return 'span';
    return 'div';
  });

  handleBackdropClick(event: Event) {
    this.backdropClick.emit(event);
  }
}
