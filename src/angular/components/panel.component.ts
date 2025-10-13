import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { PanelClasses } from '../../shared/classes/PanelClasses.js';
import { PanelColors } from '../../shared/colors/PanelColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KGlassComponent } from './glass.component.js';

type PanelTag = 'div' | 'span' | 'section';
type PanelSide = 'left' | 'right';
type PanelState = 'opened' | 'closed';

@Component({
  selector: 'k-panel',

  imports: [CommonModule, NgTemplateOutlet, KGlassComponent],
  template: `
    <ng-template #panelContent>
      <ng-content />
    </ng-template>

    @if (backdrop()) {
      <div
        class="{{ backdropClasses()[state()] }}"
        (click)="onBackdropClick()"
      ></div>
    }

    @if (useGlass()) {
      <k-glass
        [class]="panelClass()"
        [component]="componentTag()"
        [ios]="ios()"
        [material]="material()"
        [highlight]="false"
      >
        <ng-container *ngTemplateOutlet="panelContent" />
      </k-glass>
    } @else {
      @switch (componentTag()) {
        @case ('span') {
          <span class="{{ panelClass() }}">
            <ng-container *ngTemplateOutlet="panelContent" />
          </span>
        }
        @case ('section') {
          <section class="{{ panelClass() }}">
            <ng-container *ngTemplateOutlet="panelContent" />
          </section>
        }
        @default {
          <div class="{{ panelClass() }}">
            <ng-container *ngTemplateOutlet="panelContent" />
          </div>
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KPanelComponent {
  readonly component = input<PanelTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly side = input<PanelSide>('left');
  readonly opened = input<boolean>(false);
  readonly backdrop = input<boolean>(true);
  readonly floating = input<boolean>(false);

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
    PanelColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        PanelClasses(
          {
            side: this.side(),
            opened: this.opened(),
            floating: this.floating(),
          },
          this.palette()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );

  private readonly sideClasses = computed(() => {
    const side = this.side() === 'right' ? 'right' : 'left';
    return this.classes()[side] as Record<string, string>;
  });

  readonly sideStateClass: Signal<string> = computed(() => {
    const state = this.state();
    const side = this.sideClasses();
    const base = side['default'] ?? '';
    const stateClass = side[state] ?? '';
    return cls(base, stateClass);
  });

  readonly panelClass: Signal<string> = computed(() =>
    cls(this.baseClass(), this.sideStateClass())
  );

  readonly backdropClasses: Signal<Record<PanelState, string>> = computed(
    () => this.classes()['backdrop'] as Record<PanelState, string>
  );

  readonly state: Signal<PanelState> = computed(() =>
    this.opened() ? 'opened' : 'closed'
  );

  readonly componentTag: Signal<PanelTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    if (value === 'span') return 'span';
    if (value === 'section') return 'section';
    return 'div';
  });

  readonly useGlass = computed(
    () => this.theme() === 'ios' && this.floating()
  );

  onBackdropClick() {
    this.backdropClick.emit(new Event('backdropClick'));
  }
}
