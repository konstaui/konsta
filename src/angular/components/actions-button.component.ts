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
import { ActionsButtonClasses } from '../../shared/classes/ActionsButtonClasses.js';
import { ActionsButtonColors } from '../../shared/colors/ActionsButtonColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

type ActionsButtonTag = 'button' | 'a' | string;

@Component({
  selector: 'k-actions-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (componentTag()) {
      @case ('a') {
        <a
          #el
          class="{{ classes() }}"
          [attr.href]="href() ?? ''"
          role="button"
          [attr.tabindex]="0"
          (click)="handleClick($event)"
        >
          <ng-content />
        </a>
      }
      @case ('button') {
        <button
          #el
          class="{{ classes() }}"
          [attr.type]="type()"
          (click)="handleClick($event)"
        >
          <ng-content />
        </button>
      }
      @default {
        <{{ componentTag() }}
          #el
          class="{{ classes() }}"
          role="button"
          [attr.tabindex]="0"
          (click)="handleClick($event)"
        >
          <ng-content />
        </{{ componentTag() }}>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KActionsButtonComponent {
  private readonly elementRef = viewChild<ElementRef<HTMLElement>>('el');

  readonly component = input<ActionsButtonTag | undefined>(undefined);
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly type = input<string>('button');
  readonly bold = input<boolean | undefined>(undefined);
  readonly boldIos = input<boolean>(false);
  readonly boldMaterial = input<boolean>(false);
  readonly fontSizeIos = input<string>('text-xl');
  readonly fontSizeMaterial = input<string>('text-base');
  readonly dividers = input<boolean | undefined>(undefined);

  readonly clicked = output<Event>();

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
    ActionsButtonColors(this.colors() ?? {}, this.dark)
  );

  private readonly isBold = computed(() => {
    const value = this.bold();
    if (value !== undefined && value !== null) return value;
    return this.theme() === 'ios' ? this.boldIos() : this.boldMaterial();
  });

  private readonly hasDividers = computed(() => {
    const value = this.dividers();
    if (value !== undefined && value !== null) return value;
    return this.theme() === 'ios';
  });

  private readonly classesObj = computed(
    () =>
      this.themeClasses(
        ActionsButtonClasses(
          {
            fontSizeIos: this.fontSizeIos(),
            fontSizeMaterial: this.fontSizeMaterial(),
            bold: this.isBold(),
            dividers: this.hasDividers(),
          },
          this.palette(),
          this.dark
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly classes: Signal<string> = computed(
    () => this.classesObj()['base'] as string
  );

  readonly componentTag: Signal<ActionsButtonTag> = computed(() => {
    const cmp = this.component();
    if (cmp) return cmp;
    if (this.href() !== undefined && this.href() !== null) return 'a';
    return 'button';
  });

  constructor() {
    useTouchRipple({
      element: () => this.elementRef()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });
  }

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
