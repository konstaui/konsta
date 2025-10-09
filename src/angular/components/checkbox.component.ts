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
  template: `
    <{{ component() }} #root class="{{ baseClasses() }}">
      <input
        #inputEl
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
      <i class="{{ iconWrapClasses()[state()] }}">
        <ng-container *ngIf="indeterminate(); else iconTpl">
          <span class="{{ indeterminateClasses() }}"></span>
        </ng-container>
        <ng-template #iconTpl>
          <k-checkbox-icon
            [class]="iconClasses()[state()]"
            [ios]="ios()"
            [material]="material()"
          />
        </ng-template>
      </i>
      <ng-content />
    </{{ component() }}>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KCheckboxComponent {
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
    CheckboxColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(() =>
    this.themeClasses(
      CheckboxClasses({}, this.palette(), this.dark),
      this.className()
    ) as Record<string, any>
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

  readonly state: Signal<CheckboxState> = computed(() => {
    if (this.indeterminate()) return 'checked';
    const checked = this.checked();
    if (checked !== undefined && checked !== null) {
      return checked ? 'checked' : 'notChecked';
    }
    return this.defaultChecked() ? 'checked' : 'notChecked';
  });

  constructor() {
    useTouchRipple({
      element: () => this.root()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });

    effect(() => {
      const input = this.inputRef()?.nativeElement;
      if (!input) return;
      input.indeterminate = this.indeterminate();
    });
  }

  handleChange(event: Event) {
    this.changed.emit(event);
  }
}
