import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { SearchbarClasses } from '../../shared/classes/SearchbarClasses.js';
import { SearchbarColors } from '../../shared/colors/SearchbarColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KGlassComponent } from './glass.component.js';
import { KDeleteIconComponent } from './icons/delete-icon.component.js';
import { KSearchDisableIconComponent } from './icons/search-disable-icon.component.js';
import { KSearchIconComponent } from './icons/search-icon.component.js';

type SearchbarTag = 'div' | 'span';

@Component({
  selector: 'k-searchbar',
  host: {
    '[style.display]': '"contents"',
  },
  imports: [
    CommonModule,
    KGlassComponent,
    KDeleteIconComponent,
    KSearchDisableIconComponent,
    KSearchIconComponent,
  ],
  template: `
    @switch (componentTag()) {
      @case ('span') {
        <span
          class="{{ baseClass() }}"
          (focusin)="handleFocusIn()"
          (focusout)="handleFocusOut()"
        >
          <ng-container *ngTemplateOutlet="searchbar"></ng-container>
        </span>
      }
      @default {
        <div
          class="{{ baseClass() }}"
          (focusin)="handleFocusIn()"
          (focusout)="handleFocusOut()"
        >
          <ng-container *ngTemplateOutlet="searchbar"></ng-container>
        </div>
      }
    }

    <ng-template #searchbar>
      <k-glass class="{{ innerClass() }}">
        <span class="{{ searchIconWrapClass() }}">
          <k-search-icon
            [class]="searchIconClass()"
            [ios]="ios()"
            [material]="material()"
          />
        </span>
        <input
          #inputEl
          class="{{ inputClass() }}"
          type="text"
          [attr.id]="inputId() ?? null"
          [attr.name]="name()"
          [attr.placeholder]="placeholder()"
          [attr.inputmode]="inputMode() ?? null"
          [attr.size]="size() ?? null"
          [attr.autocomplete]="autoComplete() ?? null"
          [attr.autocapitalize]="autoCapitalize() ?? null"
          [attr.autocorrect]="autoCorrect() ?? null"
          [attr.spellcheck]="spellCheck()"
          [attr.autofocus]="autoFocus() ? '' : null"
          [disabled]="disabled()"
          [style]="inputStyle() ?? null"
          [value]="stringValue()"
          (input)="handleInput($event)"
          (change)="handleChange($event)"
          (focus)="handleFocus($event)"
          (blur)="handleBlur($event)"
        />

        @if (showClearButton()) {
          <button
          type="button"
          class="{{ clearButtonClass() }}"
          (click)="handleClear($event)"
        >
          <k-delete-icon
            [class]="deleteIconClass()"
            [ios]="ios()"
            [material]="material()"
          />
        </button>
        }
      </k-glass>

      @if (disableButton()) {
        @if (isIos()) {
          <k-glass
          component="button"
          buttonType="button"
          [class]="cancelButtonClass()"
          [attr.aria-label]="disableButtonText()"
          [ios]="ios()"
          [material]="material()"
          [style]="cancelButtonStyle()"
          (click)="handleDisable()"
          (pointerdown)="preventPointerDown($event)"
        >
          <k-search-disable-icon class="w-4 h-4" />
        </k-glass>
        } @else {
          <button
            type="button"
            class="{{ cancelButtonClass() }}"
            aria-label="{{ disableButtonText() }}"
            [style]="cancelButtonStyle()"
            (click)="handleDisable()"
            (pointerdown)="preventPointerDown($event)"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
            >
              <path
                d="M15.5 5 14 3.5 6.5 11 14 18.5 15.5 17l-6-6 6-6Z"
              />
            </svg>
          </button>
        }
      }
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KSearchbarComponent {
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>(
    'inputEl'
  );

  readonly component = input<SearchbarTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly placeholder = input<string>('Search');
  readonly value = input<string | null | undefined>(undefined);
  readonly inputId = input<string | undefined>(undefined);
  readonly inputStyle = input<Record<string, any> | null | undefined>(
    undefined
  );
  readonly name = input<string>('search');
  readonly inputMode = input<string | undefined>(undefined);
  readonly size = input<number | string | undefined>(undefined);
  readonly autoComplete = input<string | undefined>(undefined);
  readonly autoCapitalize = input<string | undefined>(undefined);
  readonly autoCorrect = input<string | undefined>(undefined);
  readonly spellCheck = input<boolean | 'true' | 'false' | undefined>(
    undefined
  );
  readonly autoFocus = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  readonly disableButton = input<boolean>(false);
  readonly clearButton = input<boolean>(true);
  readonly disableButtonText = input<string>('Cancel');

  readonly input = output<Event>();
  readonly change = output<Event>();
  readonly focus = output<Event>();
  readonly blur = output<Event>();
  readonly clear = output<Event>();
  readonly disable = output<void>();
  readonly valueChange = output<string | null>();

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
    SearchbarColors(this.colors() ?? {}, this.dark)
  );

  private readonly internalValue = signal<string | null | undefined>(undefined);
  private readonly enabled = signal(false);
  private readonly focused = signal(false);

  private readonly classes = computed(
    () =>
      this.themeClasses(
        SearchbarClasses(
          {
            disableButton: this.disableButton(),
            clearButton: this.clearButton(),
          },
          this.palette(),
          {
            isEnabled: this.enabled(),
            darkClasses: this.dark,
          }
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly innerClass: Signal<string> = computed(
    () => this.classes()['inner'] as string
  );
  readonly searchIconWrapClass: Signal<string> = computed(
    () => this.classes()['searchIconWrap'] as string
  );
  readonly searchIconClass: Signal<string> = computed(
    () => this.classes()['searchIcon'] as string
  );
  readonly inputClass: Signal<string> = computed(
    () => this.classes()['input'] as string
  );
  readonly clearButtonClass: Signal<string> = computed(
    () => this.classes()['clearButton'] as string
  );
  readonly deleteIconClass: Signal<string> = computed(
    () => this.classes()['deleteIcon'] as string
  );
  readonly cancelButtonClass: Signal<string> = computed(
    () => this.classes()['cancelButton'] as string
  );

  readonly cancelButtonStyle = computed(() => {
    if (!this.disableButton()) return null;
    if (this.isIos()) {
      const offset = 48 + 16;
      return {
        marginRight: this.enabled() ? '0px' : `-${offset}px`,
        marginLeft: this.enabled() ? '16px' : '0px',
      };
    }
    return null;
  });

  readonly showClearButton = computed(
    () => this.clearButton() && !!this.stringValue()
  );

  readonly stringValue = computed(() => {
    const value =
      this.value() !== undefined ? this.value() : this.internalValue();
    return value ?? '';
  });

  readonly isIos = computed(() => this.theme() === 'ios');
  readonly isMaterial = computed(() => this.theme() === 'material');

  constructor() {
    effect(() => {
      const external = this.value();
      if (external !== undefined) {
        this.internalValue.set(external);
        this.enabled.set(!!external && external.length > 0);
        return;
      }
      const current = this.internalValue();
      if (current === undefined) {
        this.internalValue.set('');
      }
    });
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.internalValue.set(target.value ?? '');
    this.enabled.set(true);
    this.input.emit(event);
    this.valueChange.emit(target.value ?? '');
  }

  handleChange(event: Event) {
    this.change.emit(event);
  }

  handleFocus(event: Event) {
    this.enabled.set(true);
    this.focused.set(true);
    this.focus.emit(event);
  }

  handleBlur(event: Event) {
    this.focused.set(false);
    if (!this.stringValue()) {
      this.enabled.set(false);
    }
    this.blur.emit(event);
  }

  handleClear(event: Event) {
    event.preventDefault();
    const el = this.inputEl()?.nativeElement;
    if (el) {
      el.value = '';
      el.focus();
    }
    this.internalValue.set('');
    this.enabled.set(true);
    this.clear.emit(event);
    this.valueChange.emit('');
  }

  handleDisable() {
    const el = this.inputEl()?.nativeElement;
    this.internalValue.set('');
    if (el) {
      el.value = '';
      el.blur();
    }
    this.enabled.set(false);
    this.clear.emit(new Event('clear'));
    this.valueChange.emit('');
    this.disable.emit();
  }

  handleFocusIn() {
    this.enabled.set(true);
  }

  handleFocusOut() {
    if (!this.focused() && !this.stringValue()) {
      this.enabled.set(false);
    }
  }

  preventPointerDown(event: Event) {
    event.preventDefault();
  }

  readonly componentTag: Signal<SearchbarTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'span' ? 'span' : 'div';
  });
}
