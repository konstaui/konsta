import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  input,
  viewChild,
} from '@angular/core';
import { FabClasses } from '../../shared/classes/FabClasses.js';
import { FabColors } from '../../shared/colors/FabColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';
import { useIosHighlight } from '../shared/ios-highlight.js';

type FabTag = 'a' | 'button' | 'div';

@Component({
  selector: 'k-fab',
  
  imports: [CommonModule],
  template: `
    <ng-template #fabContent>
      @if (hasText() && textPosition() === 'before') {
        <span class="{{ textClasses() }}">
          {{ text() }}
          <ng-content select="[text]" />
        </span>
      }
      @if (hasIcon()) {
        <span class="{{ iconClasses() }}">
          @if (icon()) {
            <ng-container *ngTemplateOutlet="icon()!" />
          } @else {
            <ng-content select="[icon]" />
          }
        </span>
      }
      @if (hasText() && textPosition() === 'after') {
        <span class="{{ textClasses() }}">
          {{ text() }}
          <ng-content select="[text]" />
        </span>
      }
      <ng-content />
    </ng-template>

    @switch (componentTag()) {
      @case ('a') {
        <a
          #el
          class="{{ baseClass() }}"
          [attr.href]="href() ?? undefined"
          role="button"
          tabindex="0"
        >
          <ng-container *ngTemplateOutlet="fabContent"></ng-container>
        </a>
      }
      @case ('button') {
        <button
          #el
          class="{{ baseClass() }}"
          type="button"
        >
          <ng-container *ngTemplateOutlet="fabContent"></ng-container>
        </button>
      }
      @default {
        <div
          #el
          class="{{ baseClass() }}"
          role="button"
          tabindex="0"
        >
          <ng-container *ngTemplateOutlet="fabContent"></ng-container>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KFabComponent {
  private readonly elementRef = viewChild<ElementRef<HTMLElement>>('el');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly component = input<FabTag>('a');
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly text = input<string | undefined>(undefined);
  readonly textPosition = input<'before' | 'after'>('after');
  readonly icon = input<any | undefined>(undefined);

  private readonly textSlot =
    contentChild<ElementRef<HTMLElement>>('[text]');
  private readonly iconSlot =
    contentChild<ElementRef<HTMLElement>>('[icon]');

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
    FabColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        FabClasses(
          {
            text: this.text(),
            textPosition: this.textPosition(),
          },
          this.palette(),
          this.dark,
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClasses: Signal<Record<string, string>> = computed(
    () => this.classes()['base'] as Record<string, string>
  );
  readonly textClasses: Signal<string> = computed(
    () => this.classes()['text'] as string
  );
  readonly iconClasses: Signal<string> = computed(
    () => this.classes()['icon'] as string
  );

  readonly baseClass = computed(() => {
    const base = this.baseClasses();
    return this.hasText() ? base['withText'] : base['iconOnly'];
  });

  readonly hasText = computed(
    () => !!this.text() || !!this.textSlot()
  );
  readonly hasIcon = computed(() => !!this.icon() || !!this.iconSlot());

  readonly componentTag: Signal<FabTag> = computed(() => {
    const value = (this.component() || 'a').toLowerCase();
    if (value === 'button') return 'button';
    if (value === 'div') return 'div';
    if (value === 'a') return 'a';
    return 'a';
  });

  constructor() {
    useTouchRipple({
      element: () => this.elementRef()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });

    useIosHighlight({
      element: () => this.elementRef()?.nativeElement ?? null,
      enabled: () => this.theme() === 'ios',
    });
  }
}
