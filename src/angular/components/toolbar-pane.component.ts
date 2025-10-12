import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  Signal,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { ToolbarPaneClasses } from '../../shared/classes/ToolbarPaneClasses.js';
import { ToolbarPaneColors } from '../../shared/colors/ToolbarPaneColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { TOOLBAR_CONTEXT } from '../shared/toolbar-context.js';
import { KGlassComponent } from './glass.component.js';

@Component({
  selector: 'k-toolbar-pane',

  imports: [CommonModule, KGlassComponent],
  template: `
    @if (theme() === 'material') {
      <ng-content />
    } @else {
      <k-glass
        #glassEl
        [component]="component()"
        [class]="classes()['base']"
        [afterContent]="highlightTpl"
      >
        <ng-content />
      </k-glass>

      <ng-template #highlightTpl>
        <span
          #highlightEl
          class="{{ classes()['highlight'] }}"
          [style.width]="hasHighlight() ? highlightStyleSignal().width : '0'"
          [style.transform]="hasHighlight() ? highlightStyleSignal().transform : ''"
          [style.display]="hasHighlight() ? 'block' : 'none'"
        >
          <span #highlightInnerEl class="{{ classes()['highlightInner'] }}"></span>
          <span #highlightThumbEl class="{{ classes()['highlightThumb'] }}"></span>
        </span>
      </ng-template>
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KToolbarPaneComponent implements AfterViewInit, OnDestroy {
  readonly component = input<'div' | 'nav'>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly tabbar = input<boolean | undefined>(undefined);

  private readonly glassEl = viewChild<KGlassComponent>('glassEl');
  private readonly highlightEl = viewChild<ElementRef<HTMLElement>>('highlightEl');
  private readonly highlightInnerEl = viewChild<ElementRef<HTMLElement>>('highlightInnerEl');
  private readonly highlightThumbEl = viewChild<ElementRef<HTMLElement>>('highlightThumbEl');

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private readonly toolbarCtx = inject(TOOLBAR_CONTEXT);

  private readonly palette = computed(() =>
    ToolbarPaneColors(this.colors() ?? {}, this.dark)
  );

  readonly classes = computed(() =>
    this.themeClasses(
      ToolbarPaneClasses(
        {
          tabbar: this.tabbar() ?? this.toolbarCtx.tabbar(),
        },
        this.palette(),
        this.dark,
        this.className()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly hasHighlight = computed(
    () => this.theme() === 'ios' && (this.tabbar() ?? this.toolbarCtx.tabbar())
  );

  private readonly highlightStyle = signal<Record<string, string>>({
    width: '',
    transform: ''
  });
  readonly highlightStyleSignal = this.highlightStyle.asReadonly();

  private hasTabbarLinks = false;
  private highlightData: any = {};
  private rafId: number | null = null;
  private observer: MutationObserver | null = null;

  constructor() {
    effect(() => {
      if (this.hasHighlight()) {
        this.scheduleHighlightUpdate();
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.hasHighlight()) {
      this.attachEvents();
      this.observeChanges();
      // Schedule update with a delay to ensure DOM is fully rendered
      setTimeout(() => this.updateHighlight(), 100);
    }
  }

  ngOnDestroy(): void {
    this.detachEvents();
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private scheduleHighlightUpdate() {
    queueMicrotask(() => this.updateHighlight());
  }

  private updateHighlight() {
    const glassComponent = this.glassEl();
    if (!glassComponent) {
      console.log('[toolbar-pane] glassComponent not found');
      return;
    }

    // Get the root element from the glass component (private access via any)
    const actualElement = (glassComponent as any).root?.()?.nativeElement as HTMLElement;
    if (!actualElement) {
      console.log('[toolbar-pane] actualElement not found, glassComponent:', glassComponent);
      return;
    }

    const linkEls = actualElement.querySelectorAll('a, button');
    console.log('[toolbar-pane] Found links:', linkEls.length);
    if (!linkEls.length) {
      this.hasTabbarLinks = false;
      return;
    }

    this.hasTabbarLinks = true;
    const activeLinkEl = actualElement.querySelector('.k-tabbar-link-active');
    const width = (1 / linkEls.length) * 100;
    const activeIndex = activeLinkEl ? [...linkEls].indexOf(activeLinkEl) : 0;

    console.log('[toolbar-pane] Update highlight:', { width: `${width}%`, transform: `translateX(${activeIndex * 100}%)`, activeIndex, activeLink: activeLinkEl });

    this.highlightData.linkEls = linkEls;
    this.highlightData.activeIndex = activeIndex;

    this.highlightStyle.set({
      width: `${width}%`,
      transform: `translateX(${activeIndex * 100}%)`,
    });
  }

  private observeChanges() {
    if (typeof window === 'undefined') return;
    const glassComponent = this.glassEl();
    if (!glassComponent) return;

    // Get the root element from the glass component
    const actualElement = (glassComponent as any).root?.()?.nativeElement as HTMLElement;
    if (!actualElement) return;

    this.observer = new MutationObserver(() => {
      this.scheduleHighlightUpdate();
    });

    this.observer.observe(actualElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private attachEvents() {
    const glassComponent = this.glassEl();
    if (!glassComponent || !this.hasHighlight()) return;

    // Get the root element from the glass component
    const actualElement = (glassComponent as any).root?.()?.nativeElement as HTMLElement;
    if (!actualElement) return;

    actualElement.addEventListener('pointerdown', this.onPointer);
    document.addEventListener('pointermove', this.onPointer);
    document.addEventListener('pointerup', this.onPointer);
  }

  private detachEvents() {
    const glassComponent = this.glassEl();
    if (!glassComponent) return;

    // Get the root element from the glass component
    const actualElement = (glassComponent as any).root?.()?.nativeElement as HTMLElement;
    if (!actualElement) return;

    actualElement.removeEventListener('pointerdown', this.onPointer);
    document.removeEventListener('pointermove', this.onPointer);
    document.removeEventListener('pointerup', this.onPointer);
  }

  private onPointer = (e: PointerEvent) => {
    if (e.pointerType !== 'touch') return;

    const glassComponent = this.glassEl();
    if (!glassComponent) return;

    // Get the root element from the glass component
    const actualElement = (glassComponent as any).root?.()?.nativeElement as HTMLElement;
    if (!actualElement) return;

    if (e.type === 'pointerdown') {
      this.highlightData.rect = actualElement.getBoundingClientRect();
      this.highlightData.touched = true;
      this.setHighlightOnTouch(e);
    }
    if (e.type === 'pointermove') {
      if (!this.highlightData.touched) return;
      this.setHighlightOnTouch(e);
    }
    if (e.type === 'pointerup') {
      if (!this.highlightData.touched) return;
      this.highlightData.touched = false;
      this.unsetHighlightOnTouch();
    }
  };

  private setHighlightOnTouch(e: PointerEvent) {
    if (!this.hasTabbarLinks) return;

    const { rect, linkEls } = this.highlightData;
    const { clientX } = e;
    const highlightWidth = rect.width / linkEls.length;
    const leftOffset = clientX - rect.left - highlightWidth / 2;
    const minLeft = 0;
    const maxLeft = rect.width - highlightWidth;
    const translateX = Math.max(minLeft, Math.min(leftOffset, maxLeft));

    const linkCenters = [...linkEls].map((el: Element, index: number) => {
      return index * highlightWidth + highlightWidth / 2;
    });

    const closestLinkCenter = linkCenters.reduce((prev, curr) => {
      const highlightCenter = translateX + highlightWidth / 2;
      return Math.abs(curr - highlightCenter) < Math.abs(prev - highlightCenter)
        ? curr
        : prev;
    }, linkCenters[0]);
    const closestLinkIndex = linkCenters.indexOf(closestLinkCenter);
    this.highlightData.newActiveIndex = closestLinkIndex;

    const highlightInnerElNative = this.highlightInnerEl()?.nativeElement;
    const highlightThumbElNative = this.highlightThumbEl()?.nativeElement;
    const classes = this.classes();

    if (highlightInnerElNative && classes['highlightInnerPressed']) {
      highlightInnerElNative.classList.add(...classes['highlightInnerPressed'].split(' '));
    }
    if (highlightThumbElNative && classes['highlightThumbPressed']) {
      highlightThumbElNative.classList.add(...classes['highlightThumbPressed'].split(' '));
    }

    this.highlightData.setTransform = `translateX(${translateX}px)`;
    this.startAnimation();
  }

  private unsetHighlightOnTouch() {
    if (!this.hasTabbarLinks) return;

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    const highlightInnerElNative = this.highlightInnerEl()?.nativeElement;
    const highlightThumbElNative = this.highlightThumbEl()?.nativeElement;
    const classes = this.classes();

    if (highlightInnerElNative && classes['highlightInnerPressed']) {
      highlightInnerElNative.classList.remove(...classes['highlightInnerPressed'].split(' '));
    }
    if (highlightThumbElNative && classes['highlightThumbPressed']) {
      highlightThumbElNative.classList.remove(...classes['highlightThumbPressed'].split(' '));
    }

    const { activeIndex, newActiveIndex, linkEls } = this.highlightData;
    if (activeIndex !== newActiveIndex && linkEls && linkEls[newActiveIndex]) {
      (linkEls[newActiveIndex] as HTMLElement).click();
    }

    this.highlightStyle.set({
      width: this.highlightStyle().width,
      transform: `translateX(${newActiveIndex * 100}%)`,
      transitionTimingFunction: '',
    });
  }

  private startAnimation() {
    this.rafId = requestAnimationFrame(() => {
      if (!this.highlightData.setTransform) return;

      const highlightElNative = this.highlightEl()?.nativeElement;
      if (!highlightElNative) return;

      highlightElNative.style.transform = this.highlightData.setTransform;
      highlightElNative.style.transitionTimingFunction = 'ease-out';
      this.highlightData.setTransform = null;
    });
  }
}
