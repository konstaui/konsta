import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  TemplateRef,
  computed,
  effect,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { ListInputClasses } from '../../shared/classes/ListInputClasses.js';
import { ListInputColors } from '../../shared/colors/ListInputColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KListItemComponent } from './list-item.component.js';
import { KDeleteIconComponent } from './icons/delete-icon.component.js';

type ListInputElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

@Component({
  selector: 'k-list-input',
  
  imports: [CommonModule, KListItemComponent, KDeleteIconComponent],
  template: `
    <k-list-item
      [class]="baseClass()"
      [contentClassName]="itemContentClass()"
      [dividers]="dividers()"
      [component]="component()"
      [media]="media() ?? mediaTemplate()"
      [inner]="input() ?? innerTemplate()"
      [content]="contentTemplate()"
    >
      <ng-template #innerTemplateRef>
        <div class="{{ innerClass() }}">
        @if (label(); as labelText) {
          <div class="{{ labelClass() }}">
            <div class="{{ labelTextClass() }}">{{ labelText }}</div>
          </div>
        }

        <div class="{{ inputWrapClass() }}">
          @switch (inputElementTag()) {
            @case ('select') {
              <select
              #inputEl
              class="{{ inputClass() }}"
              [style]="inputStyle() ?? null"
              [attr.id]="inputId() ?? null"
              [attr.name]="name() ?? null"
              [attr.size]="size() ?? null"
              [attr.accept]="accept() ?? null"
              [attr.autocomplete]="autoComplete() ?? null"
              [attr.autocorrect]="autoCorrect() ?? null"
              [attr.autocapitalize]="autoCapitalize() ?? null"
              [attr.spellcheck]="spellCheck()"
              [attr.autofocus]="autoFocus() ? '' : null"
              [attr.autosave]="autoSave() ?? null"
              [disabled]="disabled()"
              [attr.max]="max() ?? null"
              [attr.maxlength]="maxLength() ?? null"
              [attr.min]="min() ?? null"
              [attr.minlength]="minLength() ?? null"
              [attr.multiple]="multiple() ? '' : null"
              [attr.pattern]="pattern() ?? null"
              [attr.readonly]="readOnly() ? '' : null"
              [attr.required]="required() ? '' : null"
              [attr.step]="step() ?? null"
              [attr.inputmode]="inputMode() ?? null"
              [attr.tabindex]="tabIndex() ?? null"
              [value]="stringValue()"
              (input)="handleInput($event)"
              (change)="handleChange($event)"
              (focus)="handleFocus($event)"
              (blur)="handleBlur($event)"
            >
              <ng-content select="option"></ng-content>
            </select>
            }
            @case ('textarea') {
              <textarea
              #inputEl
              class="{{ inputClass() }}"
              [style]="inputStyle() ?? null"
              [attr.id]="inputId() ?? null"
              [attr.name]="name() ?? null"
              [attr.placeholder]="placeholder() ?? null"
              [attr.inputmode]="inputMode() ?? null"
              [attr.rows]="rows() ?? null"
              [attr.cols]="cols() ?? null"
              [attr.autocomplete]="autoComplete() ?? null"
              [attr.autocorrect]="autoCorrect() ?? null"
              [attr.autocapitalize]="autoCapitalize() ?? null"
              [attr.spellcheck]="spellCheck()"
              [attr.autofocus]="autoFocus() ? '' : null"
              [attr.autosave]="autoSave() ?? null"
              [disabled]="disabled()"
              [attr.maxlength]="maxLength() ?? null"
              [attr.minlength]="minLength() ?? null"
              [attr.readonly]="readOnly() ? '' : null"
              [attr.required]="required() ? '' : null"
              [attr.tabindex]="tabIndex() ?? null"
              [value]="stringValue()"
              (input)="handleInput($event)"
              (change)="handleChange($event)"
              (focus)="handleFocus($event)"
              (blur)="handleBlur($event)"
            ></textarea>
            }
            @default {
              <input
              #inputEl
              class="{{ inputClass() }}"
              [style]="inputStyle() ?? null"
              [attr.id]="inputId() ?? null"
              [attr.type]="inputTypeAttr()"
              [attr.name]="name() ?? null"
              [attr.placeholder]="placeholder() ?? null"
              [attr.inputmode]="inputMode() ?? null"
              [attr.size]="size() ?? null"
              [attr.accept]="accept() ?? null"
              [attr.autocomplete]="autoComplete() ?? null"
              [attr.autocorrect]="autoCorrect() ?? null"
              [attr.autocapitalize]="autoCapitalize() ?? null"
              [attr.spellcheck]="spellCheck()"
              [attr.autofocus]="autoFocus() ? '' : null"
              [attr.autosave]="autoSave() ?? null"
              [disabled]="disabled()"
              [attr.max]="max() ?? null"
              [attr.maxlength]="maxLength() ?? null"
              [attr.min]="min() ?? null"
              [attr.minlength]="minLength() ?? null"
              [attr.step]="step() ?? null"
              [attr.multiple]="multiple() ? '' : null"
              [attr.readonly]="readOnly() ? '' : null"
              [attr.required]="required() ? '' : null"
              [attr.pattern]="pattern() ?? null"
              [attr.tabindex]="tabIndex() ?? null"
              [value]="stringValue()"
              (input)="handleInput($event)"
              (change)="handleChange($event)"
              (focus)="handleFocus($event)"
              (blur)="handleBlur($event)"
            />
            }
          }

          @if (showClearButton()) {
            <k-delete-icon
              [class]="clearButtonClass()"
              [ios]="ios()"
              [material]="material()"
              (click)="handleClear($event)"
            />
          }

          @if (dropdown()) {
            <span class="{{ dropdownClass() }}">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          }
        </div>

        @if (showError()) {
          <div class="{{ errorInfoClass() }} {{ errorTextClass() }}">
            {{ error() }}
          </div>
        }
        @if (showInfo()) {
          <div class="{{ errorInfoClass() }} {{ infoTextClass() }}">
            {{ info() }}
          </div>
        }
        </div>
      </ng-template>

      @if (type() !== 'select') {
        <ng-content></ng-content>
      }

      <ng-template #contentTemplateRef>
        @if (showBorder()) {
          <span class="{{ borderClass() }}"></span>
        }
      </ng-template>
    </k-list-item>

    <ng-template #mediaTemplateRef>
      <ng-content select="[media]"></ng-content>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KListInputComponent {
  private readonly inputEl =
    viewChild<ElementRef<ListInputElement>>('inputEl');

  private readonly mediaTemplate = viewChild<TemplateRef<any>>('mediaTemplateRef');
  private readonly innerTemplate = viewChild<TemplateRef<any>>('innerTemplateRef');
  private readonly contentTemplate = viewChild<TemplateRef<any>>('contentTemplateRef');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly component = input<'li' | 'div'>('li');
  readonly media = input<TemplateRef<any> | undefined>(undefined);
  readonly input = input<TemplateRef<any> | undefined>(undefined);

  readonly label = input<string | undefined>(undefined);
  readonly floatingLabel = input<boolean>(false);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);
  readonly info = input<string | undefined>(undefined);
  readonly error = input<string | boolean | undefined>(undefined);
  readonly clearButton = input<boolean>(false);
  readonly dropdown = input<boolean>(false);

  readonly inputId = input<string | undefined>(undefined);
  readonly inputStyle = input<Record<string, any> | null | undefined>(
    undefined
  );
  readonly inputClassName = input<string | undefined>(undefined);

  readonly name = input<string | undefined>(undefined);
  readonly value = input<string | number | null | undefined>(undefined);
  readonly defaultValue = input<string | number | null | undefined>(undefined);
  readonly type = input<string>('text');
  readonly inputMode = input<string | undefined>(undefined);
  readonly readOnly = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly placeholder = input<string | undefined>(undefined);
  readonly size = input<number | string | undefined>(undefined);
  readonly accept = input<string | undefined>(undefined);
  readonly autoComplete = input<string | undefined>(undefined);
  readonly autoCorrect = input<string | undefined>(undefined);
  readonly autoCapitalize = input<string | undefined>(undefined);
  readonly spellCheck = input<boolean | 'true' | 'false' | undefined>(
    undefined
  );
  readonly autoFocus = input<boolean>(false);
  readonly autoSave = input<string | undefined>(undefined);
  readonly max = input<string | number | undefined>(undefined);
  readonly min = input<string | number | undefined>(undefined);
  readonly step = input<string | number | undefined>(undefined);
  readonly maxLength = input<number | string | undefined>(undefined);
  readonly minLength = input<number | string | undefined>(undefined);
  readonly multiple = input<boolean>(false);
  readonly pattern = input<string | undefined>(undefined);
  readonly tabIndex = input<number | string | undefined>(undefined);
  readonly rows = input<number | string | undefined>(undefined);
  readonly cols = input<number | string | undefined>(undefined);

  readonly inputChange = output<Event>();
  readonly change = output<Event>();
  readonly focus = output<Event>();
  readonly blur = output<Event>();
  readonly clear = output<Event>();
  readonly valueChange = output<string | number | null>();

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
    ListInputColors(this.colors() ?? {}, this.dark)
  );

  private readonly internalValue = signal<string | number | null | undefined>(
    undefined
  );
  private readonly focused = signal(false);

  private readonly resolvedOutline = computed(() => {
    if (this.outline() !== undefined) return !!this.outline();
    return this.theme() === 'ios'
      ? !!this.outlineIos()
      : !!this.outlineMaterial();
  });

  readonly labelStyle = computed<'floating' | 'stacked'>(() =>
    this.label() && this.floatingLabel() ? 'floating' : 'stacked'
  );

  private readonly labelStyleState = computed<'floating' | 'notFloating'>(() =>
    this.label() && this.floatingLabel() ? 'floating' : 'notFloating'
  );

  private readonly hasValue = computed(() => {
    const value = this.internalValue();
    if (value === undefined || value === null) return false;
    if (typeof value === 'number') return true;
    return value.length > 0;
  });

  private readonly isFloatingTransformed = computed(
    () => !!this.label() && this.floatingLabel() && !this.hasValue() && !this.focused()
  );

  private readonly labelColor = computed(() => {
    if (this.error()) {
      const palette = this.palette() as Record<string, any>;
      return palette['errorText'] ?? '';
    }
    if (this.theme() === 'material') {
      const palette = this.palette() as Record<string, any>;
      return this.focused()
        ? palette['labelTextFocusMaterial']
        : palette['labelTextMaterial'];
    }
    const palette = this.palette() as Record<string, any>;
    return this.focused()
      ? palette['labelTextFocusIos']
      : palette['labelTextIos'];
  });

  private readonly classes = computed(
    () =>
      this.themeClasses(
        ListInputClasses(
          {
            error: this.error(),
            type: this.type(),
            inputClassName: this.inputClassName() ?? '',
            outline: this.resolvedOutline(),
          },
          this.palette(),
          {
            isFloatingTransformed: this.isFloatingTransformed(),
            isFocused: this.focused(),
            darkClasses: this.dark,
            getLabelColor: () => this.labelColor(),
            inputClassName: this.inputClassName() ?? '',
            hasLabel: !!this.label(),
          }
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly itemContentClass: Signal<string> = computed(
    () => this.classes()['itemContent'] as string
  );
  readonly innerClass: Signal<string> = computed(() => {
    const inner = this.classes()['inner'] as Record<string, string>;
    return inner[this.labelStyle()];
  });
  readonly labelClass: Signal<string> = computed(() => {
    const label = this.classes()['label'] as Record<string, any>;
    const style = this.labelStyle();
    const value = label[style];
    return typeof value === 'string' ? value : value?.['common'] ?? '';
  });
  readonly labelTextClass: Signal<string> = computed(
    () => this.classes()['labelText'] as string
  );
  readonly inputWrapClass: Signal<string> = computed(() => {
    const wrap = this.classes()['inputWrap'] as Record<string, string>;
    return wrap[this.labelStyle()];
  });
  readonly inputClass: Signal<string> = computed(() => {
    const input = this.classes()['input'] as Record<string, string>;
    const style = this.labelStyleState();
    return input[style] ?? input['default'] ?? '';
  });
  readonly clearButtonClass: Signal<string> = computed(
    () => this.classes()['clearButton'] as string
  );
  readonly dropdownClass: Signal<string> = computed(
    () => this.classes()['dropdown'] as string
  );
  readonly borderClass: Signal<string> = computed(
    () => this.classes()['border'] as string
  );
  readonly errorInfoClass: Signal<string> = computed(
    () => this.classes()['errorInfo'] as string
  );
  readonly errorTextClass: Signal<string> = computed(
    () => this.classes()['error'] as string
  );
  readonly infoTextClass: Signal<string> = computed(
    () => this.classes()['info'] as string
  );

  readonly dividers = computed(() => {
    if (this.theme() === 'material' || this.resolvedOutline()) {
      return false;
    }
    return undefined;
  });

  readonly showClearButton = computed(
    () => this.clearButton() && this.hasValue()
  );

  readonly showBorder = computed(
    () => this.theme() === 'material' || this.resolvedOutline()
  );

  readonly showError = computed(
    () => !!this.error() && this.error() !== true
  );

  readonly showInfo = computed(
    () => !!this.info() && !this.error()
  );

  readonly inputElementTag = computed<'input' | 'textarea' | 'select'>(() => {
    if (this.type() === 'textarea') return 'textarea';
    if (this.type() === 'select') return 'select';
    return 'input';
  });

  readonly inputTypeAttr = computed(() => {
    const tag = this.inputElementTag();
    if (tag !== 'input') return null;
    return this.type();
  });

  readonly stringValue = computed(() => {
    const value =
      this.value() !== undefined ? this.value() : this.internalValue();
    if (value === undefined || value === null) return '';
    return `${value}`;
  });

  constructor() {
    effect(() => {
      const controlledValue = this.value();
      if (controlledValue !== undefined) {
        this.internalValue.set(controlledValue);
        return;
      }
      const current = this.internalValue();
      if (current !== undefined) return;
      const defaultValue = this.defaultValue();
      if (defaultValue !== undefined) {
        this.internalValue.set(defaultValue);
      }
    });
  }

  handleInput(event: Event) {
    const target = event.target as ListInputElement;
    const newValue = (target as HTMLInputElement).value;
    this.internalValue.set(newValue);
    this.inputChange.emit(event);
    this.valueChange.emit(newValue);
  }

  handleChange(event: Event) {
    this.change.emit(event);
  }

  handleFocus(event: Event) {
    this.focused.set(true);
    this.focus.emit(event);
  }

  handleBlur(event: Event) {
    this.focused.set(false);
    this.blur.emit(event);
  }

  handleClear(event: Event) {
    event.preventDefault();
    const el = this.inputEl()?.nativeElement;
    if (el) {
      el.value = '';
    }
    this.internalValue.set('');
    this.clear.emit(event);
    this.valueChange.emit('');
  }
}
