import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';
import { RadioClasses } from '../../shared/classes/RadioClasses.js';
import { RadioColors } from '../../shared/colors/RadioColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

@Component({
  selector: 'k-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label #root class="{{ baseClasses() }}">
      <input
        #input
        type="radio"
        class="{{ inputClasses() }}"
        [attr.name]="name() ?? null"
        [attr.value]="value() ?? null"
        [disabled]="disabled()"
        [readOnly]="readOnly()"
        [checked]="checked() ?? null"
        [attr.defaultChecked]="checked() == null && defaultChecked() ? '' : null"
        (change)="handleChange($event)"
      />
      <i class="{{ iconWrapClasses()[state()] }}">
        <ng-container *ngIf="theme() === 'ios'; else materialIcon">
          <svg
            class="{{ iconClasses()[state()] }}"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.333 6.25 9.04 12.542 6.167 9.667"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ng-container>
        <ng-template #materialIcon>
          <span class="{{ iconClasses()[state()] }}"></span>
        </ng-template>
      </i>
      <ng-content />
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KRadioComponent {
  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('input');

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
    RadioColors(this.colors() ?? {}, this.dark)
  );

  readonly classes = computed(() =>
    this.themeClasses(
      RadioClasses({}, this.palette(), this.dark, this.className()),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.classes()['base']
  );
  readonly inputClasses: Signal<string> = computed(
    () => this.classes()['input']
  );
  readonly iconWrapClasses = computed(
    () => this.classes()['iconWrap'] as Record<string, string>
  );
  readonly iconClasses = computed(
    () => this.classes()['icon'] as Record<string, string>
  );

  readonly state: Signal<'checked' | 'notChecked'> = computed(() => {
    if (this.checked() !== undefined && this.checked() !== null) {
      return this.checked() ? 'checked' : 'notChecked';
    }
    return this.defaultChecked() ? 'checked' : 'notChecked';
  });

  constructor() {
    useTouchRipple({
      element: () => this.root()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });
  }

  handleChange(event: Event) {
    this.changed.emit(event);
  }
}
