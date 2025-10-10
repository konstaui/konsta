import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  input,
  output,
  viewChild,
} from '@angular/core';
import { ToggleClasses } from '../../shared/classes/ToggleClasses.js';
import { ToggleColors } from '../../shared/colors/ToggleColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

type ToggleTag = 'label' | 'div' | 'span' | 'li';

@Component({
  selector: 'k-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template #toggleContent>
      <input
        #input
        type="checkbox"
        class="{{ inputClasses() }}"
        [attr.name]="name() ?? null"
        [attr.value]="value() ?? null"
        [disabled]="disabled()"
        [readOnly]="readOnly()"
        [checked]="checked() ?? null"
        [attr.defaultChecked]="checked() == null && defaultChecked() ? '' : null"
        (change)="handleChange($event)"
      />
      <ng-container *ngIf="theme() === 'ios'; else material">
        <span class="{{ thumbSideClasses()[state()] }}"></span>
        <span class="{{ thumbBgClasses()[state()] }}"></span>
        <span class="{{ thumbShadowClasses()[state()] }}"></span>
        <span #thumb class="{{ thumbWrapClasses()[state()] }}">
          <span class="{{ thumbClasses()[state()] }}"></span>
        </span>
      </ng-container>
      <ng-template #material>
        <span #thumb class="{{ thumbWrapClasses()[state()] }}">
          <span class="{{ thumbClasses()[state()] }}"></span>
        </span>
      </ng-template>
      <ng-content />
    </ng-template>

    @switch (componentTag()) {
      @case ('div') {
        <div
          #root
          class="{{ baseClasses()[state()] }}"
          role="switch"
          [attr.aria-checked]="state() === 'checked'"
        >
          <ng-container *ngTemplateOutlet="toggleContent"></ng-container>
        </div>
      }
      @case ('span') {
        <span
          #root
          class="{{ baseClasses()[state()] }}"
          role="switch"
          [attr.aria-checked]="state() === 'checked'"
        >
          <ng-container *ngTemplateOutlet="toggleContent"></ng-container>
        </span>
      }
      @case ('li') {
        <li
          #root
          class="{{ baseClasses()[state()] }}"
          role="switch"
          [attr.aria-checked]="state() === 'checked'"
        >
          <ng-container *ngTemplateOutlet="toggleContent"></ng-container>
        </li>
      }
      @default {
        <label #root class="{{ baseClasses()[state()] }}">
          <ng-container *ngTemplateOutlet="toggleContent"></ng-container>
        </label>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KToggleComponent {
  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly thumb = viewChild<ElementRef<HTMLElement>>('thumb');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly checked = input<boolean | undefined>(undefined);
  readonly defaultChecked = input<boolean>(false);
  readonly name = input<string | undefined>(undefined);
  readonly value = input<string | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly component = input<ToggleTag>('label');

  readonly changed = output<Event>();

  readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    ToggleColors(this.colors() ?? {}, this.dark)
  );

  readonly classes = computed(() =>
    this.themeClasses(
      ToggleClasses({}, this.palette(), this.dark, this.className()),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses = computed(() => this.classes()['base'] as Record<string, string>);
  readonly thumbSideClasses = computed(
    () => this.classes()['thumbSide'] as Record<string, string>
  );
  readonly thumbBgClasses = computed(
    () => this.classes()['thumbBg'] as Record<string, string>
  );
  readonly thumbShadowClasses = computed(
    () => this.classes()['thumbShadow'] as Record<string, string>
  );
  readonly thumbWrapClasses = computed(
    () => this.classes()['thumbWrap'] as Record<string, string>
  );
  readonly thumbClasses = computed(
    () => this.classes()['thumb'] as Record<string, string>
  );
  readonly inputClasses: Signal<string> = computed(
    () => this.classes()['input']
  );

  readonly state: Signal<'checked' | 'notChecked'> = computed(() => {
    if (this.checked() !== undefined && this.checked() !== null) {
      return this.checked() ? 'checked' : 'notChecked';
    }
    return this.defaultChecked() ? 'checked' : 'notChecked';
  });
  readonly componentTag: Signal<ToggleTag> = computed(() => {
    const raw = (this.component() || 'label').toLowerCase();
    if (raw === 'div' || raw === 'span' || raw === 'li' || raw === 'label') {
      return raw as ToggleTag;
    }
    return 'label';
  });

  constructor() {
    useTouchRipple({
      element: () => this.root()?.nativeElement ?? null,
      eventsElement: () => this.thumb()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });
  }

  handleChange(event: Event) {
    this.changed.emit(event);
  }
}
