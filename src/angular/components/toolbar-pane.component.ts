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
import { KGlassComponent } from './glass.component.js';
import { TOOLBAR_CONTEXT } from '../shared/toolbar-context.js';
import { useIosTabbarHighlight } from '../../shared/use-ios-tabbar-highlight.js';

@Component({
  selector: 'k-toolbar-pane',
  standalone: true,
  imports: [CommonModule, KGlassComponent],
  template: `
    <ng-container [ngSwitch]="theme()">
      <k-glass
        *ngSwitchCase="'ios'"
        [component]="component()"
        [class]="baseClasses()"
        #glassEl
      >
        <ng-content />
        <span
          *ngIf="hasHighlight()"
          #highlight
          [class]="highlightClasses()"
          [ngStyle]="highlightStyleSignal()"
        >
          <span #highlightInner [class]="highlightInnerClasses()"></span>
          <span #highlightThumb [class]="highlightThumbClasses()"></span>
        </span>
      </k-glass>
      <ng-container *ngSwitchDefault>
        <ng-content />
      </ng-container>
    </ng-container>
  `,
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
          tabbar: this.toolbarCtx.tabbar(),
        },
        this.palette(),
        this.dark,
        this.className()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.classes()['base']
  );
  readonly highlightClasses: Signal<string> = computed(
    () => this.classes()['highlight'] ?? ''
  );
  readonly highlightInnerClasses: Signal<string> = computed(
    () => this.classes()['highlightInner'] ?? ''
  );
  readonly highlightThumbClasses: Signal<string> = computed(
    () => this.classes()['highlightThumb'] ?? ''
  );

  readonly hasHighlight = computed(
    () => this.theme() === 'ios' && this.toolbarCtx.tabbar()
  );

  private readonly highlightStyle = signal<Record<string, string>>({});
  readonly highlightStyleSignal = this.highlightStyle.asReadonly();

  private readonly hasTabbarLinks = signal(false);

  readonly glassEl = viewChild<ElementRef<HTMLElement>>('glassEl');
  readonly highlightEl = viewChild<ElementRef<HTMLElement>>('highlight');
  readonly highlightInnerEl =
    viewChild<ElementRef<HTMLElement>>('highlightInner');
  readonly highlightThumbEl =
    viewChild<ElementRef<HTMLElement>>('highlightThumb');

  private highlightData: Record<string, any> = {};
  private highlightObserver: MutationObserver | null = null;
  private iosTabbarHighlight: ReturnType<typeof useIosTabbarHighlight> | null =
    null;

  readonly themeSignal = this.theme;

  constructor() {
    effect(() => {
      if (!this.hasHighlight()) {
        this.disconnectHighlightObserver();
        return;
      }
      this.attachHighlightObserver();
      this.scheduleHighlightUpdate();
    });
  }

  ngAfterViewInit(): void {
    if (this.hasHighlight()) {
      this.initIosTabbarHighlight();
      this.attachHighlightObserver();
      this.scheduleHighlightUpdate();
    }
  }

  ngOnDestroy(): void {
    this.disconnectHighlightObserver();
    if (this.iosTabbarHighlight) {
      this.iosTabbarHighlight.detachEvents();
    }
  }

  private initIosTabbarHighlight() {
    if (this.iosTabbarHighlight) {
      this.iosTabbarHighlight.detachEvents();
    }

    this.iosTabbarHighlight = useIosTabbarHighlight({
      getEl: () => this.glassEl()?.nativeElement,
      getHighlightEl: () => this.highlightEl()?.nativeElement,
      getHighlightInnerEl: () => this.highlightInnerEl()?.nativeElement,
      getHighlightThumbEl: () => this.highlightThumbEl()?.nativeElement,
      getHasHighlight: () => this.hasHighlight(),
      data: this.highlightData,
      getHasTabbarLinks: () => this.hasTabbarLinks(),
      setHasTabbarLinks: (value: boolean) => this.hasTabbarLinks.set(value),
      classes: this.classes(),
      getHighlightStyle: () => this.highlightStyle(),
      setHighlightStyle: (style: Record<string, string>) =>
        this.highlightStyle.set(style),
    });

    this.iosTabbarHighlight.attachEvents();
  }

  private scheduleHighlightUpdate() {
    queueMicrotask(() => {
      if (this.iosTabbarHighlight) {
        this.iosTabbarHighlight.onUpdated();
      }
    });
  }

  private attachHighlightObserver() {
    if (typeof window === 'undefined') return;
    const el = this.glassEl()?.nativeElement;
    if (!el) return;

    if (this.highlightObserver) {
      this.highlightObserver.disconnect();
    }

    this.highlightObserver = new MutationObserver(() => {
      this.scheduleHighlightUpdate();
    });

    this.highlightObserver.observe(el, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private disconnectHighlightObserver() {
    if (this.highlightObserver) {
      this.highlightObserver.disconnect();
      this.highlightObserver = null;
    }
  }
}
