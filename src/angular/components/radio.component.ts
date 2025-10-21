import { CommonModule, NgTemplateOutlet } from '@angular/common';
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
import { RadioClasses } from '../../shared/classes/RadioClasses.js';
import { RadioColors } from '../../shared/colors/RadioColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

type RadioTag = 'label' | 'div' | 'span' | 'li';

@Component({
  selector: 'k-radio',
  
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    <ng-template #radioContent>
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
        @if (theme() === 'ios') {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentcolor"
            class="{{ iconClasses()[state()] }}"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10.6461792,0.119820016 C11.0022676,0.346673312 11.1070333,0.819240884 10.88018,1.17532923 L5.59004012,9.47918548 C5.44456028,9.70754308 5.19802823,9.83254199 4.94596825,9.83309245 C4.59813173,9.83364386 4.39457446,9.67360825 4.28105047,9.53831563 L1.17887189,5.84128316 C0.907480501,5.5178515 0.949667479,5.03565214 1.27309914,4.76426075 C1.59653081,4.49286936 2.07873017,4.53505633 2.35012156,4.858488 L4.8346263,7.81909046 L9.59067001,0.353820775 C9.81752331,-0.00226757161 10.2900909,-0.10703328 10.6461792,0.119820016 Z"
              transform="translate(4 5.483)"
            />
          </svg>
        } @else {
          <span class="{{ iconClasses()[state()] }}"></span>
        }
      </i>
      <ng-content />
    </ng-template>

    @switch (componentTag()) {
      @case ('div') {
        <div #root class="{{ baseClasses() }}">
          <ng-container *ngTemplateOutlet="radioContent"></ng-container>
        </div>
      }
      @case ('span') {
        <span #root class="{{ baseClasses() }}">
          <ng-container *ngTemplateOutlet="radioContent"></ng-container>
        </span>
      }
      @case ('li') {
        <li #root class="{{ baseClasses() }}">
          <ng-container *ngTemplateOutlet="radioContent"></ng-container>
        </li>
      }
      @default {
        <label #root class="{{ baseClasses() }}">
          <ng-container *ngTemplateOutlet="radioContent"></ng-container>
        </label>
      }
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KRadioComponent {
  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('input');

  readonly component = input<RadioTag>('label');
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

  private static readonly SUPPORTED_TAGS = new Set<RadioTag>([
    'label',
    'div',
    'span',
    'li',
  ]);

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

  readonly componentTag: Signal<RadioTag> = computed(() => {
    const raw = (this.component() ?? 'label').toLowerCase();
    if (KRadioComponent.SUPPORTED_TAGS.has(raw as RadioTag)) {
      return raw as RadioTag;
    }
    return 'label';
  });

  handleChange(event: Event) {
    this.changed.emit(event);
  }
}
