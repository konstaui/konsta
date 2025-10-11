import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  input,
  output,
  viewChild,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { StepperClasses } from '../../shared/classes/StepperClasses.js';
import { StepperColors } from '../../shared/colors/StepperColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { getThemeSpecificProps } from '../shared/get-theme-specific-props.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

type StepperTag = 'div' | 'span';
type StepperSize = 'small' | 'medium' | 'large';
type StepperStyle = 'fill' | 'outline' | 'clear';
type StepperShape = 'rounded' | 'square';

@Component({
  selector: 'k-stepper',
  
  imports: [CommonModule],
  template: `
    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClass() }}">
          <span
            #minusButton
            class="{{ buttonLeftClass() }}"
            role="button"
            tabindex="0"
            (click)="handleMinus($event)"
          >
            <span class="{{ hBarClass() }}"></span>
          </span>
          @if (showInput()) {
            <input
              class="{{ valueClass() }}"
              [attr.type]="inputType()"
              [attr.placeholder]="inputPlaceholder() ?? null"
              [value]="value() ?? defaultValue() ?? 0"
              [disabled]="inputDisabled()"
              [readOnly]="inputReadOnly()"
              (input)="inputEvent.emit($event)"
              (change)="changeEvent.emit($event)"
              (focus)="focusEvent.emit($event)"
              (blur)="blurEvent.emit($event)"
            />
          } @else if (!buttonsOnly()) {
            <span class="{{ valueClass() }}">
              {{ value() ?? defaultValue() ?? 0 }}
            </span>
          }
          <span
            #plusButton
            class="{{ buttonRightClass() }}"
            role="button"
            tabindex="0"
            (click)="handlePlus($event)"
          >
            <span class="{{ hBarClass() }}"></span>
            <span class="{{ vBarClass() }}"></span>
          </span>
        </span>
      }
      @default {
        <div class="{{ baseClass() }}">
          <span
            #minusButton
            class="{{ buttonLeftClass() }}"
            role="button"
            tabindex="0"
            (click)="handleMinus($event)"
          >
            <span class="{{ hBarClass() }}"></span>
          </span>
          @if (showInput()) {
            <input
              class="{{ valueClass() }}"
              [attr.type]="inputType()"
              [attr.placeholder]="inputPlaceholder() ?? null"
              [value]="value() ?? defaultValue() ?? 0"
              [disabled]="inputDisabled()"
              [readOnly]="inputReadOnly()"
              (input)="inputEvent.emit($event)"
              (change)="changeEvent.emit($event)"
              (focus)="focusEvent.emit($event)"
              (blur)="blurEvent.emit($event)"
            />
          } @else if (!buttonsOnly()) {
            <span class="{{ valueClass() }}">
              {{ value() ?? defaultValue() ?? 0 }}
            </span>
          }
          <span
            #plusButton
            class="{{ buttonRightClass() }}"
            role="button"
            tabindex="0"
            (click)="handlePlus($event)"
          >
            <span class="{{ hBarClass() }}"></span>
            <span class="{{ vBarClass() }}"></span>
          </span>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KStepperComponent {
  readonly component = input<StepperTag>('span');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly value = input<number | undefined>(undefined);
  readonly defaultValue = input<number | undefined>(0);
  readonly input = input<boolean>(false);
  readonly inputType = input<string>('text');
  readonly inputPlaceholder = input<string | undefined>(undefined);
  readonly inputDisabled = input<boolean>(false);
  readonly inputReadOnly = input<boolean>(false);
  readonly buttonsOnly = input<boolean>(false);

  readonly rounded = input<boolean | undefined>(undefined);
  readonly roundedIos = input<boolean | undefined>(undefined);
  readonly roundedMaterial = input<boolean | undefined>(undefined);
  readonly small = input<boolean | undefined>(undefined);
  readonly smallIos = input<boolean | undefined>(undefined);
  readonly smallMaterial = input<boolean | undefined>(undefined);
  readonly large = input<boolean | undefined>(undefined);
  readonly largeIos = input<boolean | undefined>(undefined);
  readonly largeMaterial = input<boolean | undefined>(undefined);
  readonly raised = input<boolean | undefined>(undefined);
  readonly raisedIos = input<boolean | undefined>(undefined);
  readonly raisedMaterial = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);

  readonly minus = output<Event>({ alias: 'minus' });
  readonly plus = output<Event>({ alias: 'plus' });
  readonly changeEvent = output<Event>({ alias: 'change' });
  readonly focusEvent = output<Event>({ alias: 'focus' });
  readonly blurEvent = output<Event>({ alias: 'blur' });
  readonly inputEvent = output<Event>({ alias: 'input' });

  private readonly plusButtonRef =
    viewChild<ElementRef<HTMLSpanElement>>('plusButton');
  private readonly minusButtonRef =
    viewChild<ElementRef<HTMLSpanElement>>('minusButton');

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly themeProps = computed(() =>
    getThemeSpecificProps(
      this.theme(),
      {
        rounded: this.rounded(),
        small: this.small(),
        large: this.large(),
        raised: this.raised(),
        outline: this.outline(),
      },
      {
        roundedIos: this.roundedIos(),
        roundedMaterial: this.roundedMaterial(),
        smallIos: this.smallIos(),
        smallMaterial: this.smallMaterial(),
        largeIos: this.largeIos(),
        largeMaterial: this.largeMaterial(),
        raisedIos: this.raisedIos(),
        raisedMaterial: this.raisedMaterial(),
        outlineIos: this.outlineIos(),
        outlineMaterial: this.outlineMaterial(),
      }
    )
  );

  private readonly size = computed<StepperSize>(() => {
    if (this.themeProps().large) return 'large';
    if (this.themeProps().small) return 'small';
    return 'medium';
  });

  private readonly style = computed<StepperStyle>(() => {
    const props = this.themeProps();
    if (props.outline && props.raised) return 'clear';
    if (props.outline) return 'outline';
    return 'fill';
  });

  private readonly shape = computed<StepperShape>(() =>
    this.themeProps().rounded ? 'rounded' : 'square'
  );

  private readonly palette = computed(() =>
    StepperColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(() =>
    this.themeClasses(
      StepperClasses(
        {
          buttonsOnly: this.buttonsOnly(),
          size: this.size(),
          small: this.themeProps().small,
          large: this.themeProps().large,
          rounded: this.themeProps().rounded,
          raised: this.themeProps().raised,
          outline: this.themeProps().outline,
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(() => {
    const classes = this.classes() as Record<string, any>;
    const themeSpecific = this.themeProps();
    return cls(
      classes['base'] as string,
      themeSpecific.raised ? (classes['raised'] as string) : '',
      (classes['size'] as Record<StepperSize, string>)[this.size()] ?? '',
      (classes['shape'] as Record<StepperShape, string>)[this.shape()] ?? ''
    );
  });

  readonly buttonLeftClass: Signal<string> = computed(() => {
    const classes = this.classes() as Record<string, any>;
    return cls(
      classes['button'] as string,
      (classes['buttonStyle'] as Record<StepperStyle, string>)[this.style()] ??
        '',
      (classes['buttonLeftShape'] as Record<StepperShape, string>)[
        this.shape()
      ] ?? ''
    );
  });

  readonly buttonRightClass: Signal<string> = computed(() => {
    const classes = this.classes() as Record<string, any>;
    return cls(
      classes['button'] as string,
      (classes['buttonStyle'] as Record<StepperStyle, string>)[this.style()] ??
        '',
      (classes['buttonRightShape'] as Record<StepperShape, string>)[
        this.shape()
      ] ?? ''
    );
  });

  readonly valueClass: Signal<string> = computed(() => {
    const classes = this.classes() as Record<string, any>;
    const valueClasses = classes['value'] as Record<string, string>;
    const styleClass =
      valueClasses[this.style()] ?? valueClasses['default'] ?? '';
    const inputClass = this.input() ? (classes['input'] as string) : '';
    return cls(inputClass, styleClass);
  });

  readonly hBarClass: Signal<string> = computed(
    () => this.classes()['hBar'] as string
  );
  readonly vBarClass: Signal<string> = computed(
    () => this.classes()['vBar'] as string
  );

  readonly componentTag: Signal<StepperTag> = computed(() => {
    const value = (this.component() || 'span').toLowerCase();
    return value === 'div' ? 'div' : 'span';
  });

  readonly showInput = computed(
    () => this.input() && !this.buttonsOnly()
  );

  constructor() {
    useTouchRipple({
      element: () => this.minusButtonRef()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });
    useTouchRipple({
      element: () => this.plusButtonRef()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });
  }

  handleMinus(event: Event) {
    this.minus.emit(event);
  }

  handlePlus(event: Event) {
    this.plus.emit(event);
  }
}
