import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { cls } from '../../shared/cls.js';
import { LinkClasses } from '../../shared/classes/LinkClasses.js';
import { LinkColors } from '../../shared/colors/LinkColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';
import { TOOLBAR_CONTEXT } from '../shared/toolbar-context.js';
import { NAVBAR_CONTEXT } from '../shared/navbar-context.js';

@Component({
  selector: 'k-link',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container [ngSwitch]="component()">
      <a
        *ngSwitchCase="'a'"
        #root
        class="{{ classes() }}"
        [attr.href]="href() ?? null"
        [attr.target]="target() ?? null"
        (click)="handleClick($event)"
      >
        <ng-content />
      </a>
      <button
        *ngSwitchDefault
        #root
        type="button"
        class="{{ classes() }}"
        (click)="handleClick($event)"
      >
        <ng-content />
      </button>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KLinkComponent {
  private readonly root = viewChild<ElementRef<HTMLElement>>('root');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly component = input<'a' | 'button'>('a');
  readonly tabbar = input<boolean | undefined>(undefined);
  readonly tabbarActive = input<boolean>(false);
  readonly tabbarLabels = input<boolean | undefined>(undefined);
  readonly tabbarIcons = input<boolean | undefined>(undefined);
  readonly toolbar = input<boolean | undefined>(undefined);
  readonly navbar = input<boolean | undefined>(undefined);
  readonly iconOnly = input<boolean>(false);

  readonly clicked = output<Event>();

  private readonly toolbarContext = inject(TOOLBAR_CONTEXT);
  private readonly navbarContext = inject(NAVBAR_CONTEXT);

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
    LinkColors(this.colors() ?? {}, this.dark)
  );

  private readonly isToolbar = computed(() => {
    const value = this.toolbar();
    if (value !== undefined && value !== null) return value;
    return this.toolbarContext.toolbar();
  });

  private readonly isTabbar = computed(() => {
    const value = this.tabbar();
    if (value !== undefined && value !== null) return value;
    return this.toolbarContext.tabbar();
  });

  private readonly isTabbarLabels = computed(() => {
    const value = this.tabbarLabels();
    if (value !== undefined && value !== null) return value;
    return this.toolbarContext.tabbarLabels();
  });

  private readonly isTabbarIcons = computed(() => {
    const value = this.tabbarIcons();
    if (value !== undefined && value !== null) return value;
    return this.toolbarContext.tabbarIcons();
  });

  private readonly isNavbar = computed(() => {
    const value = this.navbar();
    if (value !== undefined && value !== null) return value;
    return this.navbarContext.navbar();
  });

  private readonly needsTouchRipple = computed(
    () =>
      this.theme() === 'material' &&
      (this.isToolbar() || this.isTabbar() || this.isNavbar())
  );

  private readonly textColor = computed(() => {
    const colors = this.palette() as Record<string, any>;
    const theme = this.theme();
    const themeTextColor = this.isNavbar()
      ? theme === 'material'
        ? colors['navbarTextMaterial']
        : colors['navbarTextIos']
      : this.isToolbar()
        ? theme === 'material'
          ? colors['toolbarTextMaterial']
          : colors['toolbarTextIos']
        : theme === 'material'
          ? colors['textMaterial']
          : colors['textIos'];
    if (this.isTabbar() && !this.tabbarActive()) {
      return colors['tabbarInactive'] ?? themeTextColor;
    }
    return themeTextColor;
  });

  readonly classes: Signal<string> = computed(() => {
    const theme = this.theme();
    const linkClasses = this.themeClasses(
      LinkClasses(
        {
          iconOnly: this.iconOnly(),
          tabbar: this.isTabbar(),
          tabbarLabels: this.isTabbarLabels(),
          tabbarIcons: this.isTabbarIcons(),
          toolbar: this.isToolbar(),
          navbar: this.isNavbar(),
        },
        {
          textColor: this.textColor(),
          needsTouchRipple: this.needsTouchRipple(),
        }
      ),
      this.className()
    ) as Record<string, any>;

    const tabbarClasses = linkClasses['tabbar'] || {};

    return cls(
      linkClasses['base'],
      this.isToolbar() && linkClasses['toolbar'],
      this.isNavbar() && linkClasses['navbar'],
      this.isTabbar() && tabbarClasses[this.tabbarActive() ? 'active' : 'inactive'],
      this.className()
    );
  });

  constructor() {
    useTouchRipple({
      element: () => this.root()?.nativeElement ?? null,
      needsRipple: () => this.needsTouchRipple(),
    });
  }

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
