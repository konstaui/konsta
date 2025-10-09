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
import { cls } from '../../shared/cls.js';
import { LinkClasses } from '../../shared/classes/LinkClasses.js';
import { LinkColors } from '../../shared/colors/LinkColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

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
  readonly tabbar = input<boolean>(false);
  readonly tabbarActive = input<boolean>(false);
  readonly tabbarLabels = input<boolean>(false);
  readonly tabbarIcons = input<boolean>(false);
  readonly toolbar = input<boolean>(false);
  readonly navbar = input<boolean>(false);
  readonly iconOnly = input<boolean>(false);

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
    LinkColors(this.colors() ?? {}, this.dark)
  );

  private readonly needsTouchRipple = computed(
    () => this.theme() === 'material' && (this.toolbar() || this.tabbar() || this.navbar())
  );

  private readonly textColor = computed(() => {
    const colors = this.palette() as Record<string, any>;
    const theme = this.theme();
    const themeTextColor = this.navbar()
      ? theme === 'material'
        ? colors['navbarTextMaterial']
        : colors['navbarTextIos']
      : this.toolbar()
        ? theme === 'material'
          ? colors['toolbarTextMaterial']
          : colors['toolbarTextIos']
        : theme === 'material'
          ? colors['textMaterial']
          : colors['textIos'];
    if (this.tabbar() && !this.tabbarActive()) {
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
          tabbar: this.tabbar(),
          tabbarLabels: this.tabbarLabels(),
          tabbarIcons: this.tabbarIcons(),
          toolbar: this.toolbar(),
          navbar: this.navbar(),
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
      this.toolbar() && linkClasses['toolbar'],
      this.navbar() && linkClasses['navbar'],
      this.tabbar() && tabbarClasses[this.tabbarActive() ? 'active' : 'inactive'],
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
