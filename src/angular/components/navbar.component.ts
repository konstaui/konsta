import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  ElementRef,
  OnDestroy,
  Signal,
  TemplateRef,
  computed,
  effect,
  forwardRef,
  input,
  viewChild,
} from '@angular/core';
import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
import { NavbarColors } from '../../shared/colors/NavbarColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import {
  NAVBAR_CONTEXT,
  createNavbarContext,
} from '../shared/navbar-context.js';
import { KGlassDirective } from '../directives/glass.directive.js';

@Component({
  selector: 'k-navbar',
  styles: [`
    ::ng-deep [subnavbar] {
      display: contents;
    }
  `],
  imports: [CommonModule, NgTemplateOutlet, KGlassDirective],
  template: `
    <ng-template #leftTemplate>
      <ng-content select="[left]" />
    </ng-template>
    <ng-template #rightTemplate>
      <ng-content select="[right]" />
    </ng-template>

    @switch (component()) {
      @case ('nav') {
        <nav #navEl class="{{ baseClasses() }}">
          <ng-container *ngTemplateOutlet="navbarContent"></ng-container>
        </nav>
      }
      @case ('header') {
        <header #navEl class="{{ baseClasses() }}">
          <ng-container *ngTemplateOutlet="navbarContent"></ng-container>
        </header>
      }
      @default {
        <div #navEl class="{{ baseClasses() }}">
          <ng-container *ngTemplateOutlet="navbarContent"></ng-container>
        </div>
      }
    }

    <ng-template #navbarContent>
      @if (theme() === 'ios') {
        <div class="{{ bgBlurClasses() }}"></div>
      }
      <div #bgEl class="{{ bgClasses() }}"></div>
      <div #innerEl class="{{ innerClasses() }}">
        <div kGlass [kGlass]="leftClasses()">
          <ng-container *ngTemplateOutlet="leftTemplate" />
        </div>
        @if (title() || subtitle()) {
          <div #titleEl class="{{ titleClasses() }}">
            @if (title()) {
              {{ title() }}
            }
            @if (subtitle()) {
              <div class="{{ subtitleClasses() }}">
                {{ subtitle() }}
              </div>
            }
          </div>
        }
        <div kGlass [kGlass]="rightClasses()">
          <ng-container *ngTemplateOutlet="rightTemplate" />
        </div>
        <ng-content />
      </div>
      @if ((large() || medium()) && title()) {
        <div
          #titleContainerEl
          class="{{ titleContainerClasses() }}"
        >
          {{ title() }}
        </div>
      }
      @if (subnavbar() && subnavbarContent()) {
        <div #subnavbarEl class="{{ subnavbarClasses() }}">
          <ng-container *ngTemplateOutlet="subnavbarContent()!" />
        </div>
      } @else if (subnavbar()) {
        <div #subnavbarEl class="{{ subnavbarClasses() }}">
          <ng-content select="[subnavbar]" />
        </div>
      }
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NAVBAR_CONTEXT,
      useFactory: (component: KNavbarComponent) => component.contextValue,
      deps: [forwardRef(() => KNavbarComponent)],
    },
  ],
})
export class KNavbarComponent implements AfterViewInit, OnDestroy {
  // Template references
  private readonly navEl = viewChild<ElementRef<HTMLElement>>('navEl');
  private readonly bgEl = viewChild<ElementRef<HTMLDivElement>>('bgEl');
  private readonly innerEl = viewChild<ElementRef<HTMLDivElement>>('innerEl');
  private readonly titleEl = viewChild<ElementRef<HTMLDivElement>>('titleEl');
  private readonly titleContainerEl = viewChild<ElementRef<HTMLDivElement>>('titleContainerEl');
  private readonly subnavbarEl = viewChild<ElementRef<HTMLDivElement>>('subnavbarEl');

  // Content children to detect if left/right slots have content
  private readonly leftContent = contentChild('[left]');
  private readonly rightContent = contentChild('[right]');

  // Computed to check if content exists
  private readonly hasLeft = computed(() => !!this.leftContent());
  private readonly hasRight = computed(() => !!this.rightContent());

  // Inputs
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly bgClassName = input<string>('');
  readonly innerClassName = input<string>('');
  readonly leftClassName = input<string>('');
  readonly titleClassName = input<string>('');
  readonly subtitleClassName = input<string>('');
  readonly rightClassName = input<string>('');
  readonly subnavbarClassName = input<string>('');
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly subtitle = input<string | undefined>(undefined);
  readonly outline = input<boolean>(false);
  readonly large = input<boolean>(false);
  readonly medium = input<boolean>(false);
  readonly transparent = input<boolean>(false);
  readonly centerTitle = input<boolean | undefined>(undefined);
  readonly subnavbar = input<boolean>(false);
  readonly subnavbarContent = input<TemplateRef<any> | undefined>(undefined);
  readonly scrollEl = input<HTMLElement | undefined>(undefined);
  readonly component = input<'div' | 'nav' | 'header'>('div');

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
    NavbarColors(this.colors() ?? {}, this.dark)
  );

  readonly classes = computed(() =>
    this.themeClasses(
      NavbarClasses(
        {
          outline: this.outline(),
          large: this.large(),
          medium: this.medium(),
          transparent: this.transparent(),
          left: this.hasLeft(),
          right: this.hasRight(),
          subnavbar: this.subnavbar(),
          fontSizeIos: 'text-[17px]',
          fontSizeMaterial: 'text-[16px]',
          titleFontSizeIos: 'text-[17px]',
          titleFontSizeMaterial: 'text-[22px]',
          titleLargeFontSizeIos: 'text-[34px]',
          titleLargeFontSizeMaterial: 'text-[28px]',
          titleMediumFontSizeIos: 'text-[24px]',
          titleMediumFontSizeMaterial: 'text-[24px]',
          centerTitle: this.centerTitle() ?? this.theme() === 'ios',
          bgClassName: this.bgClassName(),
          innerClassName: this.innerClassName(),
          leftClassName: this.leftClassName(),
          titleClassName: this.titleClassName(),
          subtitleClassName: this.subtitleClassName(),
          rightClassName: this.rightClassName(),
          subnavbarClassName: this.subnavbarClassName(),
        },
        this.palette(),
        this.className()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.classes()['base']
  );
  readonly bgBlurClasses: Signal<string> = computed(
    () => this.classes()['bgBlur']
  );
  readonly bgClasses: Signal<string> = computed(
    () => this.classes()['bg']
  );
  readonly innerClasses: Signal<string> = computed(
    () => this.classes()['inner']
  );
  readonly leftClasses: Signal<string> = computed(
    () => this.classes()['left']
  );
  readonly rightClasses: Signal<string> = computed(
    () => this.classes()['right']
  );
  readonly titleClasses: Signal<string> = computed(
    () => this.classes()['title']
  );
  readonly titleContainerClasses: Signal<string> = computed(
    () => this.classes()['titleContainer']
  );
  readonly subtitleClasses: Signal<string> = computed(
    () => this.classes()['subtitle']
  );
  readonly subnavbarClasses: Signal<string> = computed(
    () => this.classes()['subnavbar']
  );

  readonly contextValue = createNavbarContext({
    navbar: computed(() => true),
  });

  // Scroll handling
  private titleContainerHeight = 0;
  private wasScrollable = false;
  private scrollListener: ((e: Event) => void) | null = null;

  constructor() {
    // Set up scroll handling when component inputs change
    effect((onCleanup) => {
      this.initScroll();
      onCleanup(() => this.destroyScroll());
    });
  }

  ngAfterViewInit() {
    // Initialize scroll after view is ready
  }


  private getScrollEl(): HTMLElement | null {
    const scrollElInput = this.scrollEl();
    if (scrollElInput !== undefined) {
      return scrollElInput;
    }
    const navElement = this.navEl()?.nativeElement;
    // Find the k-page element (scrollable container)
    let parent = navElement?.parentElement;
    while (parent) {
      if (parent.classList.contains('k-page') || parent.tagName === 'K-PAGE') {
        const pageInner = parent.querySelector('.ios-edges, .material-edges');
        return (pageInner as HTMLElement) || parent;
      }
      parent = parent.parentElement;
    }
    return navElement?.parentElement ?? null;
  }

  private onScroll = (e: Event) => {
    const target = e.target as HTMLElement;
    const scrollTop = target.scrollTop;
    const isTransparent = this.transparent();
    const large = this.large();
    const medium = this.medium();
    const theme = this.theme();

    if (!isTransparent && !large && !medium) {
      if (this.wasScrollable) {
        const titleEl = this.titleEl()?.nativeElement;
        const bgEl = this.bgEl()?.nativeElement;
        if (titleEl) {
          titleEl.style.opacity = '';
        }
        if (bgEl) {
          bgEl.style.opacity = '';
        }
      }
      return;
    }

    const maxTranslate = this.titleContainerHeight;
    const scrollProgress = Math.max(Math.min(scrollTop / maxTranslate, 1), 0);

    const bgEl = this.bgEl()?.nativeElement;
    if (bgEl) {
      if (theme === 'material') {
        bgEl.style.opacity = isTransparent
          ? String(-0.5 + scrollProgress * 1.5)
          : '';
        if (medium || large) {
          bgEl.style.transform = `translateY(-${scrollProgress * maxTranslate}px)`;
        }
      }
    }

    const titleContainerEl = this.titleContainerEl()?.nativeElement;
    if (titleContainerEl) {
      titleContainerEl.style.transform = `translateY(-${scrollProgress * maxTranslate}px)`;
      titleContainerEl.style.opacity = String(Math.max(0, 1 - scrollProgress * 2));
    }

    const titleEl = this.titleEl()?.nativeElement;
    if (titleEl) {
      titleEl.style.opacity = String(-0.5 + scrollProgress * 1.5);
    }

    if ((medium || large)) {
      const subnavbarEl = this.subnavbarEl()?.nativeElement;
      if (subnavbarEl) {
        subnavbarEl.style.transform = `translateY(-${scrollProgress * maxTranslate}px)`;
      }
    }
  };

  private initScroll() {
    const large = this.large();
    const medium = this.medium();
    const isTransparent = this.transparent();

    if (!large && !medium && !isTransparent) {
      if (this.wasScrollable) {
        this.onScroll({ target: { scrollTop: 0 } } as any);
        this.wasScrollable = false;
      }
      return;
    }

    this.wasScrollable = true;

    const titleContainerEl = this.titleContainerEl()?.nativeElement;
    const innerEl = this.innerEl()?.nativeElement;

    if (titleContainerEl) {
      this.titleContainerHeight = titleContainerEl.offsetHeight;
    } else if (innerEl) {
      this.titleContainerHeight = innerEl.offsetHeight;
    }

    const scrollElLocal = this.getScrollEl();
    if (scrollElLocal) {
      scrollElLocal.addEventListener('scroll', this.onScroll);
      this.onScroll({ target: scrollElLocal } as any);
    } else {
      this.onScroll({ target: { scrollTop: 0 } } as any);
    }
  }

  private destroyScroll() {
    const scrollElLocal = this.getScrollEl();
    if (scrollElLocal && this.scrollListener) {
      scrollElLocal.removeEventListener('scroll', this.onScroll);
    }
  }

  ngOnDestroy() {
    // Clean up scroll listeners
    this.destroyScroll();
  }
}
