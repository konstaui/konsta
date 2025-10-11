import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  forwardRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CheckboxClasses } from '../../shared/classes/CheckboxClasses.js';
import { CheckboxColors } from '../../shared/colors/CheckboxColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';
import { KCheckboxIconComponent } from './icons/checkbox-icon.component.js';

type CheckboxState = 'checked' | 'notChecked';

@Component({
  selector: 'k-checkbox',
  standalone: true,
  imports: [CommonModule, KCheckboxIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KCheckboxComponent),
      multi: true,
    },
  ],
  template: `
    <ng-template #checkboxContent>
      <input
        #inputEl
        type="checkbox"
        [class]="inputClasses()"
        [attr.name]="name() ?? null"
        [attr.value]="value() ?? null"
        [disabled]="isDisabled()"
        [readOnly]="readOnly()"
        [checked]="currentChecked()"
        (change)="handleChange($event)"
        (blur)="handleBlur()"
      />
      <i [class]="iconWrapClasses()[state()]">
        @if (indeterminate()) {
          <span [class]="indeterminateClasses()"></span>
        } @else {
          <k-checkbox-icon
            [class]="iconClasses()[state()]"
            [ios]="ios()"
            [material]="material()"
          />
        }
      </i>
      <ng-content />
    </ng-template>

    @switch (tag()) {
      @case ('div') {
        <div
          #root
          [class]="baseClasses()"
          [attr.role]="accessibilityRole()"
          [attr.aria-checked]="ariaChecked()"
          [attr.aria-disabled]="ariaDisabled()"
          [attr.tabindex]="tabIndex()"
          (click)="handleHostInteraction($event)"
          (keydown)="handleHostKeydown($event)"
        >
          <ng-container *ngTemplateOutlet="checkboxContent"></ng-container>
        </div>
      }
      @case ('span') {
        <span
          #root
          [class]="baseClasses()"
          [attr.role]="accessibilityRole()"
          [attr.aria-checked]="ariaChecked()"
          [attr.aria-disabled]="ariaDisabled()"
          [attr.tabindex]="tabIndex()"
          (click)="handleHostInteraction($event)"
          (keydown)="handleHostKeydown($event)"
        >
          <ng-container *ngTemplateOutlet="checkboxContent"></ng-container>
        </span>
      }
      @case ('li') {
        <li
          #root
          [class]="baseClasses()"
          [attr.role]="accessibilityRole()"
          [attr.aria-checked]="ariaChecked()"
          [attr.aria-disabled]="ariaDisabled()"
          [attr.tabindex]="tabIndex()"
          (click)="handleHostInteraction($event)"
          (keydown)="handleHostKeydown($event)"
        >
          <ng-container *ngTemplateOutlet="checkboxContent"></ng-container>
        </li>
      }
      @default {
        <label #root [class]="baseClasses()">
          <ng-container *ngTemplateOutlet="checkboxContent"></ng-container>
        </label>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KCheckboxComponent implements ControlValueAccessor {
  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>(
    'inputEl'
  );

  readonly component = input<string>('label');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly defaultChecked = input<boolean>(false);
  readonly checked = input<boolean | undefined>(undefined);
  readonly indeterminate = input<boolean>(false);
  readonly name = input<string | undefined>(undefined);
  readonly value = input<string | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly readOnly = input<boolean>(false);

  readonly changed = output<Event>();
  readonly checkedChange = output<boolean>();

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private static readonly SUPPORTED_TAGS = new Set(['label', 'div', 'span', 'li']);
  readonly tag: Signal<'label' | 'div' | 'span' | 'li'> = computed(() => {
    const raw = (this.component() ?? 'label').toLowerCase();
    return (KCheckboxComponent.SUPPORTED_TAGS.has(raw)
      ? raw
      : 'label') as 'label' | 'div' | 'span' | 'li';
  });

  private readonly palette = computed(() =>
    CheckboxColors(this.colors() ?? {}, this.dark)
  );

  private readonly disabledFromCva = signal(false);
  readonly isDisabled = computed(() => this.disabled() || this.disabledFromCva());

  private readonly classes = computed(() =>
    this.themeClasses(
      CheckboxClasses(
        {
          indeterminate: this.indeterminate(),
          disabled: this.isDisabled(),
          readOnly: this.readOnly(),
          component: this.component(),
        },
        this.palette(),
        this.dark
      ),
      this.className()
    ) as Record<string, any>
  );

  private readonly controlledChecked = computed<boolean | null>(() => {
    const value = this.checked();
    if (value === undefined || value === null) return null;
    return value;
  });

  private readonly uncontrolledChecked = signal<boolean>(
    this.defaultChecked()
  );
  private readonly userInteracted = signal(false);

  readonly currentChecked = computed<boolean>(() => {
    const controlled = this.controlledChecked();
    if (controlled !== null) return controlled;
    return this.uncontrolledChecked();
  });

  readonly accessibilityRole = computed(() =>
    this.tag() === 'label' ? null : 'checkbox'
  );
  readonly ariaChecked = computed(() =>
    this.indeterminate() ? 'mixed' : `${this.currentChecked()}`
  );
  readonly ariaDisabled = computed(() =>
    this.isDisabled() ? 'true' : null
  );
  readonly tabIndex = computed(() => {
    if (this.tag() === 'label') return null;
    return this.isInteractive() ? '0' : '-1';
  });

  private readonly isInteractive = computed(
    () => !this.isDisabled() && !this.readOnly()
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly iconWrapClasses: Signal<Record<CheckboxState, string>> = computed(
    () => this.classes()['iconWrap'] as Record<CheckboxState, string>
  );
  readonly iconClasses: Signal<Record<CheckboxState, string>> = computed(
    () => this.classes()['icon'] as Record<CheckboxState, string>
  );
  readonly indeterminateClasses: Signal<string> = computed(
    () => this.classes()['indeterminateIcon'] as string
  );
  readonly inputClasses: Signal<string> = computed(
    () => this.classes()['input'] as string
  );

  readonly state: Signal<CheckboxState> = computed(() =>
    this.indeterminate() || this.currentChecked() ? 'checked' : 'notChecked'
  );

  private onChangeFn: (value: boolean) => void = () => {};
  private onTouchedFn: () => void = () => {};

  constructor() {
    useTouchRipple({
      element: () => this.root()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material' && this.isInteractive(),
    });

    effect(() => {
      const controlled = this.controlledChecked();
      if (controlled !== null) {
        this.uncontrolledChecked.set(controlled);
      }
    });

    effect(() => {
      const input = this.inputRef()?.nativeElement;
      if (!input) return;
      const indeterminate = this.indeterminate();
      input.indeterminate = indeterminate;
    });

    effect(() => {
      if (this.controlledChecked() !== null) return;
      if (this.userInteracted()) return;
      const next = this.defaultChecked();
      if (this.uncontrolledChecked() !== next) {
        this.uncontrolledChecked.set(next);
      }
    });
  }

  handleChange(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    const nextChecked = inputEl.checked;
    if (this.readOnly()) {
      inputEl.checked = this.currentChecked();
      return;
    }
    this.onTouchedFn();
    if (this.controlledChecked() === null) {
      this.userInteracted.set(true);
      this.uncontrolledChecked.set(nextChecked);
    }
    this.checkedChange.emit(nextChecked);
    this.changed.emit(event);
    this.onChangeFn(nextChecked);
  }

  handleBlur() {
    this.onTouchedFn();
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    if (this.controlledChecked() !== null) return;
    this.uncontrolledChecked.set(!!value);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledFromCva.set(isDisabled);
  }

  handleHostInteraction(event: Event) {
    const target = event.target as HTMLElement | null;
    if (target && target.tagName.toLowerCase() === 'input') {
      return;
    }
    event.preventDefault();
    this.toggleViaHost();
  }

  handleHostKeydown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggleViaHost();
    }
  }

  private toggleViaHost() {
    if (!this.isInteractive()) return;
    const input = this.inputRef()?.nativeElement;
    if (!input) return;
    input.focus();
    input.click();
  }
}
