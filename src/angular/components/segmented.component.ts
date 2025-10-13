import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';
import {
  NAVBAR_CONTEXT,
  NavbarContextValue,
} from '../shared/navbar-context.js';
import {
  SEGMENTED_CONTEXT,
  createSegmentedContext,
} from '../shared/segmented-context.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { getThemeSpecificProps } from '../shared/get-theme-specific-props.js';
import { KGlassDirective } from '../directives/glass.directive.js';

type SegmentedTag = 'div' | 'span';

@Component({
  selector: 'k-segmented',

  imports: [CommonModule, KGlassDirective],
  host: {
    '[style.display]': '"contents"',
  },
  styles: [`
    /* Remove margin from the first segmented div in a space-y container */
    :host:first-of-type > div,
    :host:first-of-type > span {
      margin-top: 0 !important;
    }
  `],
  template: `
    @if (useGlass()) {
      @switch (componentTag()) {
        @case ('span') {
          <span kGlass
            [class]="baseClass()"
            [ios]="ios()"
            [material]="material()"
          >
            <span [class]="contentWrapperClass()" [style.display]="isOutline() ? null : 'contents'">
              <ng-content />
            </span>
            @if (isStrong()) {
              <span
                #highlight
                [class]="strongHighlightClass()"
                [style]="highlightStyle()"
              ></span>
            }
          </span>
        }
        @default {
          <div kGlass
            [class]="baseClass()"
            [ios]="ios()"
            [material]="material()"
          >
            <span [class]="contentWrapperClass()" [style.display]="isOutline() ? null : 'contents'">
              <ng-content />
            </span>
            @if (isStrong()) {
              <span
                #highlight
                [class]="strongHighlightClass()"
                [style]="highlightStyle()"
              ></span>
            }
          </div>
        }
      }
    } @else {
      @switch (componentTag()) {
        @case ('span') {
          <span [class]="baseClass()">
            <span [class]="contentWrapperClass()" [style.display]="isOutline() ? null : 'contents'">
              <ng-content />
            </span>
            @if (isStrong()) {
              <span
                #highlight
                [class]="strongHighlightClass()"
                [style]="highlightStyle()"
              ></span>
            }
          </span>
        }
        @default {
          <div [class]="baseClass()">
            <span [class]="contentWrapperClass()" [style.display]="isOutline() ? null : 'contents'">
              <ng-content />
            </span>
            @if (isStrong()) {
              <span
                #highlight
                [class]="strongHighlightClass()"
                [style]="highlightStyle()"
              ></span>
            }
          </div>
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: SEGMENTED_CONTEXT,
      useFactory: (component: KSegmentedComponent) =>
        component.contextValue,
      deps: [forwardRef(() => KSegmentedComponent)],
    },
  ],
})
export class KSegmentedComponent implements AfterViewInit, AfterViewChecked {
  private readonly navbarContext =
    inject<NavbarContextValue>(NAVBAR_CONTEXT);

  private readonly highlightRef =
    viewChild<ElementRef<HTMLSpanElement>>('highlight');

  readonly component = input<SegmentedTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly raised = input<boolean | undefined>(undefined);
  readonly raisedIos = input<boolean | undefined>(undefined);
  readonly raisedMaterial = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);
  readonly strong = input<boolean | undefined>(undefined);
  readonly strongIos = input<boolean | undefined>(undefined);
  readonly strongMaterial = input<boolean | undefined>(undefined);
  readonly rounded = input<boolean | undefined>(undefined);
  readonly roundedIos = input<boolean | undefined>(undefined);
  readonly roundedMaterial = input<boolean | undefined>(undefined);

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
        raised: this.raised(),
        outline: this.outline(),
        strong: this.strong(),
        rounded: this.rounded(),
      },
      {
        raisedIos: this.raisedIos(),
        raisedMaterial: this.raisedMaterial(),
        outlineIos: this.outlineIos(),
        outlineMaterial: this.outlineMaterial(),
        strongIos: this.strongIos(),
        strongMaterial: this.strongMaterial(),
        roundedIos: this.roundedIos(),
        roundedMaterial: this.roundedMaterial(),
      }
    )
  );

  private readonly palette = computed(() =>
    SegmentedColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        SegmentedClasses(
          {
            ...this.themeProps(),
            navbar: this.navbarContext.navbar(),
          },
          this.palette(),
          this.dark,
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(() => {
    const c = this.classes();
    const base = c['base'] as Record<string, string>;
    const parts = [this.isRounded() ? base['rounded'] : base['square']];
    if (this.isRaised()) parts.push(c['raised'] as string);
    if (this.isOutline()) parts.push(c['outline'] as string);
    if (this.isStrong()) parts.push(c['strong'] as string);
    // Add spacing between segmented controls when in a space-y container
    // This compensates for display: contents not working with Tailwind's space-y
    // Apply margin, then override for first div using first-of-type
    parts.push('[.space-y-4_&]:mt-4 [.space-y-2_&]:mt-2 [.space-y-1_&]:mt-1');
    if (this.className()) parts.push(this.className()!);
    return cls(...parts);
  });

  readonly outlineInnerClass: Signal<string> = computed(
    () => this.classes()['outlineInner'] as string
  );

  readonly contentWrapperClass: Signal<string> = computed(() => {
    if (this.isOutline()) {
      return this.outlineInnerClass();
    }
    // Return empty string when not outline (wrapper will have display: contents from style binding)
    return '';
  });

  readonly strongHighlightClass: Signal<string> = computed(
    () => this.classes()['strongHighlight'] as string
  );

  readonly componentTag: Signal<SegmentedTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'span' ? 'span' : 'div';
  });

  readonly isRaised = computed(() => !!this.themeProps().raised);
  readonly isOutline = computed(() => !!this.themeProps().outline);
  readonly isStrong = computed(() => !!this.themeProps().strong);
  readonly isRounded = computed(() => !!this.themeProps().rounded);
  readonly useGlass = computed(
    () => this.theme() === 'ios' && this.navbarContext.navbar()
  );

  readonly highlightStyle = signal<Record<string, string>>({});

  readonly contextValue = createSegmentedContext({
    strong: computed(() => this.isStrong()),
    outline: computed(() => this.isOutline()),
    rounded: computed(() => this.isRounded()),
    raised: computed(() => this.isRaised()),
  });

  constructor() {
    effect(() => {
      if (!this.isStrong()) {
        if (Object.keys(this.highlightStyle()).length) {
          this.highlightStyle.set({});
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.scheduleHighlightUpdate();
  }

  ngAfterViewChecked(): void {
    this.scheduleHighlightUpdate();
  }

  private scheduleHighlightUpdate() {
    if (!this.isStrong()) return;
    queueMicrotask(() => this.updateHighlight());
  }

  private updateHighlight() {
    if (!this.isStrong()) return;
    const highlightEl = this.highlightRef()?.nativeElement;
    if (!highlightEl) return;

    const container = highlightEl.parentElement;
    if (!container) return;

    // Find all button elements (they might be nested in a wrapper with display: contents)
    const buttons = Array.from(container.querySelectorAll('.k-button'));
    const buttonsLength = Math.max(buttons.length, 1);
    const activeEl = container.querySelector(
      '.k-segmented-strong-button-active'
    ) as HTMLElement | null;

    const activeIndex = Math.max(
      0,
      activeEl ? buttons.indexOf(activeEl) : 0
    );

    const between = '4px';
    const padding =
      this.theme() === 'ios' && this.navbarContext.navbar() ? '4px' : '2px';

    const width = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
    const transform = `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`;

    this.highlightStyle.set({
      width,
      transform,
    });
  }
}
