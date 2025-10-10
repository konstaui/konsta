import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { ButtonClasses } from '../../shared/classes/ButtonClasses.js';
import { ButtonColors } from '../../shared/colors/ButtonColors.js';
import {
  KonstaTheme,
  injectKonstaContext,
} from '../shared/konsta-context.js';
import { useDarkClasses, useThemeClasses } from '../shared/theme-helpers.js';
import { getThemeSpecificProps } from '../shared/get-theme-specific-props.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

type ButtonComponentTag = 'button' | 'a';

@Component({
  selector: 'k-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (componentTag() === 'a') {
      <a
        #el
        [class]="classes()"
        [attr.href]="disabled() ? null : href() ?? ''"
        [attr.role]="'button'"
        [attr.tabindex]="disabled() ? -1 : tabindex()"
        [attr.aria-disabled]="disabled()"
        (click)="onClick($event)"
      >
        <ng-content />
      </a>
    } @else {
      <button
        #el
        [class]="classes()"
        [disabled]="disabled()"
        [attr.type]="type()"
        (click)="onClick($event)"
      >
        <ng-content />
      </button>
    }
  `,
})
export class KButtonComponent {
  private readonly ctx = injectKonstaContext();
  private readonly elementRef = viewChild<ElementRef<HTMLElement>>('el');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colorsProp = input<Record<string, string> | undefined>(undefined);
  readonly component = input<ButtonComponentTag | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly type = input<string>('button');
  readonly disabled = input(false);
  readonly inline = input(false);
  readonly segmented = input(false);
  readonly segmentedStrong = input(false);
  readonly segmentedActive = input(false);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);
  readonly clear = input<boolean | undefined>(undefined);
  readonly clearIos = input<boolean | undefined>(undefined);
  readonly clearMaterial = input<boolean | undefined>(undefined);
  readonly tonal = input<boolean | undefined>(undefined);
  readonly tonalIos = input<boolean | undefined>(undefined);
  readonly tonalMaterial = input<boolean | undefined>(undefined);
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
  readonly tabindex = input<number>(0);

  readonly pressed = output<Event>();

  private readonly element: Signal<HTMLElement | null> = computed(() =>
    this.elementRef()?.nativeElement ?? null
  );

  private readonly theme = computed<KonstaTheme>(() => {
    if (this.ios() === true) return 'ios';
    if (this.material() === true) return 'material';
    return this.ctx.theme();
  });

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly colors = computed(() =>
    ButtonColors(this.colorsProp() ?? {}, this.dark)
  );

  private readonly themeSpecific = computed(() =>
    getThemeSpecificProps(
      this.theme(),
      {
        outline: this.outline(),
        clear: this.clear(),
        tonal: this.tonal(),
        rounded: this.rounded(),
        small: this.small(),
        large: this.large(),
        raised: this.raised(),
      },
      {
        outlineIos: this.outlineIos(),
        outlineMaterial: this.outlineMaterial(),
        clearIos: this.clearIos(),
        clearMaterial: this.clearMaterial(),
        tonalIos: this.tonalIos(),
        tonalMaterial: this.tonalMaterial(),
        roundedIos: this.roundedIos(),
        roundedMaterial: this.roundedMaterial(),
        smallIos: this.smallIos(),
        smallMaterial: this.smallMaterial(),
        largeIos: this.largeIos(),
        largeMaterial: this.largeMaterial(),
        raisedIos: this.raisedIos(),
        raisedMaterial: this.raisedMaterial(),
      }
    )
  );

  private readonly size = computed<'small' | 'medium' | 'large'>(() => {
    const props = this.themeSpecific();
    if (props.large) return 'large';
    if (props.small) return 'small';
    return 'medium';
  });

  private readonly style = computed(() => {
    const props = this.themeSpecific();
    if (props.outline) return 'outline';
    if (props.clear || (this.segmented() && !this.segmentedActive())) {
      return 'clear';
    }
    if (props.tonal) return 'tonal';
    if (this.segmentedStrong()) {
      return this.segmentedActive() ? 'segmentedStrongActive' : 'segmentedStrong';
    }
    return 'fill';
  });

  readonly componentTag = computed<ButtonComponentTag>(() => {
    if (this.component()) return this.component()!;
    if (this.href()) return 'a';
    return 'button';
  });

  readonly classes = computed(() => {
    const themeSpecific = this.themeSpecific();
    const c = this.themeClasses(
      ButtonClasses(
        {
          inline: this.inline(),
          segmented: this.segmented(),
          segmentedStrong: this.segmentedStrong(),
          segmentedActive: this.segmentedActive(),
          disabled: this.disabled(),
          outline: themeSpecific.outline,
          clear: themeSpecific.clear,
          tonal: themeSpecific.tonal,
          rounded: themeSpecific.rounded,
          small: themeSpecific.small,
          large: themeSpecific.large,
          raised: themeSpecific.raised,
        },
        this.colors(),
        this.dark
      ),
      ''
    );

    return cls(
      c['base'][themeSpecific.rounded ? 'rounded' : 'square'],
      c['style'][this.style()],
      c['size'][this.size()],
      themeSpecific.raised && c['raised'],
      this.className()
    );
  });

  constructor() {
    useTouchRipple({
      element: () => this.element(),
      needsRipple: () => this.theme() === 'material',
    });

    effect(() => {
      if (this.disabled() && this.componentTag() === 'a') {
        this.element()?.setAttribute('aria-disabled', 'true');
      }
    });
  }

  onClick(event: Event) {
    if (this.disabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    this.pressed.emit(event);
  }
}
