import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { ToolbarClasses } from '../../shared/classes/ToolbarClasses.js';
import { ToolbarColors } from '../../shared/colors/ToolbarColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import {
  TOOLBAR_CONTEXT,
  createToolbarContext,
} from '../shared/toolbar-context.js';

@Component({
  selector: 'k-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <{{ component() }} class="{{ baseClasses() }}">
      <div *ngIf="showBgBlur()" class="{{ bgBlurClasses() }}"></div>
      <div *ngIf="showBg()" class="{{ bgClasses() }}"></div>
      <div #inner class="{{ innerClasses() }}">
        <ng-content />
      </div>
      <span
        *ngIf="hasHighlight()"
        #highlight
        class="{{ highlightClasses() }}"
        [ngStyle]="highlightStyleSignal()"
      ></span>
    </{{ component() }}>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KToolbarComponent {
  private readonly toolbarContext = inject(TOOLBAR_CONTEXT);

  readonly component = input<'div' | 'nav'>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly bgClassName = input<string | undefined>(undefined);
  readonly innerClassName = input<string | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly tabbar = input<boolean>(false);
  readonly tabbarIcons = input<boolean>(true);
  readonly tabbarLabels = input<boolean>(true);
  readonly top = input<boolean>(false);
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

  private readonly palette = computed(() =>
    ToolbarColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(() =>
    this.themeClasses(
      ToolbarClasses(
        {
          tabbar: this.tabbar(),
          tabbarIcons: this.tabbarIcons(),
          tabbarLabels: this.tabbarLabels(),
          outline: this.outline(),
          bgClassName: this.bgClassName(),
          innerClassName: this.innerClassName(),
          top: this.top(),
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
    () => this.classes()['bgBlur'] ?? ''
  );
  readonly bgClasses: Signal<string> = computed(
    () => this.classes()['bg'] ?? ''
  );
  readonly innerClasses: Signal<string> = computed(
    () => this.classes()['inner'] ?? ''
  );
  readonly highlightClasses: Signal<string> = computed(
    () => this.classes()['highlight'] ?? ''
  );

  readonly showBgBlur = computed(() => this.theme() === 'ios' && !this.top());
  readonly showBg = computed(
    () => this.theme() === 'material' || !this.top()
  );

  readonly hasHighlight = computed(
    () => this.theme() === 'material' && this.tabbar() && !this.tabbarIcons()
  );

  private readonly highlightStyle = signal<Record<string, string>>({});

  readonly highlightStyleSignal = this.highlightStyle.asReadonly();

  readonly innerEl = viewChild<ElementRef<HTMLElement>>('inner');
  readonly highlightEl = viewChild<ElementRef<HTMLElement>>('highlight');

  constructor() {
    const context = createToolbarContext({
      tabbar: computed(() => this.tabbar()),
      tabbarIcons: computed(() => this.tabbarIcons()),
      tabbarLabels: computed(() => this.tabbarLabels()),
      toolbar: computed(() => true),
    });
    Object.assign(this.toolbarContext, context);

    effect(() => {
      if (!this.hasHighlight()) return;
      queueMicrotask(() => this.updateHighlight());
    });
  }

  private updateHighlight() {
    const highlight = this.highlightEl()?.nativeElement;
    const inner = this.innerEl()?.nativeElement;
    if (!highlight || !inner || inner.children.length === 0) return;
    const active = inner.querySelector('.k-tabbar-link-active') as HTMLElement | null;
    const widthPct = 100 / inner.children.length;
    const index = active
      ? Array.from(inner.children).indexOf(active)
      : 0;
    this.highlightStyle.set({
      width: `${widthPct}%`,
      transform: `translateX(${index * 100}%)`,
    });
  }
}
