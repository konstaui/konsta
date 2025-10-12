import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  TemplateRef,
  ViewEncapsulation,
  computed,
  contentChild,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListItemClasses } from '../../shared/classes/ListItemClasses.js';
import { ListItemColors } from '../../shared/colors/ListItemColors.js';
import { LIST_CONTEXT } from '../shared/list-context.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';
import { KChevronIconComponent } from './icons/chevron-icon.component.js';

@Component({
  selector: 'k-list-item',

  imports: [CommonModule, RouterModule, KChevronIconComponent],
  template: `
    @if (groupTitle()) {
      <li #root [class]="groupTitleClasses()">
        {{ title() }}
        <ng-content />
      </li>
    } @else {
      <li #root [class]="baseClasses()">
        @if (itemTag() === 'label') {
          <label #itemContent [class]="itemContentClasses()">
            <div #mediaContainer [class]="mediaClasses()">
              @if (media()) {
                <ng-container *ngTemplateOutlet="media()!" />
              }
              <ng-content select="[media],[data-media],[slot='media']" />
            </div>

            <div [class]="innerClasses()">
              @if (header()) {
                <div [class]="headerClasses()">{{ header() }}</div>
              }
              <div [class]="titleWrapClasses()">
                @if (title()) {
                  <span [class]="titleClasses()">{{ title() }}</span>
                } @else {
                  <ng-content select="[title]" />
                }
                <span [class]="afterClasses()">
                  @if (after()) {
                    @if (isTemplateRef(after())) {
                      <ng-container *ngTemplateOutlet="after()!" />
                    } @else {
                      {{ after() }}
                    }
                  }
                  <ng-content select="[after],[slot='after']" />
                </span>
                @if (showChevron()) {
                  <k-chevron-icon [class]="chevronClasses()"></k-chevron-icon>
                }
              </div>
              @if (subtitle()) {
                <div [class]="subtitleClasses()">{{ subtitle() }}</div>
              }
              @if (text()) {
                <div [class]="textClasses()">{{ text() }}</div>
              }
              @if (footer()) {
                <div [class]="footerClasses()">{{ footer() }}</div>
              }
              <ng-content select="[inner]" />
            </div>
            <ng-content select="[content]" />
          </label>
        } @else if (itemTag() === 'a') {
          <a #itemContent [class]="itemContentClasses()" [href]="linkHref()" [routerLink]="routerLink()" [target]="target()">
            <div #mediaContainer [class]="mediaClasses()">
              @if (media()) {
                <ng-container *ngTemplateOutlet="media()!" />
              }
              <ng-content select="[media],[data-media],[slot='media']" />
            </div>

            <div [class]="innerClasses()">
              @if (header()) {
                <div [class]="headerClasses()">{{ header() }}</div>
              }
              <div [class]="titleWrapClasses()">
                @if (title()) {
                  <span [class]="titleClasses()">{{ title() }}</span>
                } @else {
                  <ng-content select="[title]" />
                }
                <span [class]="afterClasses()">
                  @if (after()) {
                    @if (isTemplateRef(after())) {
                      <ng-container *ngTemplateOutlet="after()!" />
                    } @else {
                      {{ after() }}
                    }
                  }
                  <ng-content select="[after],[slot='after']" />
                </span>
                @if (showChevron()) {
                  <k-chevron-icon [class]="chevronClasses()"></k-chevron-icon>
                }
              </div>
              @if (subtitle()) {
                <div [class]="subtitleClasses()">{{ subtitle() }}</div>
              }
              @if (text()) {
                <div [class]="textClasses()">{{ text() }}</div>
              }
              @if (footer()) {
                <div [class]="footerClasses()">{{ footer() }}</div>
              }
              <ng-content select="[inner]" />
            </div>
            <ng-content select="[content]" />
          </a>
        } @else {
          <div #itemContent [class]="itemContentClasses()">
            <div #mediaContainer [class]="mediaClasses()">
              @if (media()) {
                <ng-container *ngTemplateOutlet="media()!" />
              }
              <ng-content select="[media],[data-media],[slot='media']" />
            </div>

            <div [class]="innerClasses()">
              @if (header()) {
                <div [class]="headerClasses()">{{ header() }}</div>
              }
              <div [class]="titleWrapClasses()">
                @if (title()) {
                  <span [class]="titleClasses()">{{ title() }}</span>
                } @else {
                  <ng-content select="[title]" />
                }
                <span [class]="afterClasses()">
                  @if (after()) {
                    @if (isTemplateRef(after())) {
                      <ng-container *ngTemplateOutlet="after()!" />
                    } @else {
                      {{ after() }}
                    }
                  }
                  <ng-content select="[after],[slot='after']" />
                </span>
                @if (showChevron()) {
                  <k-chevron-icon [class]="chevronClasses()"></k-chevron-icon>
                }
              </div>
              @if (subtitle()) {
                <div [class]="subtitleClasses()">{{ subtitle() }}</div>
              }
              @if (text()) {
                <div [class]="textClasses()">{{ text() }}</div>
              }
              @if (footer()) {
                <div [class]="footerClasses()">{{ footer() }}</div>
              }
              <ng-content select="[inner]" />
            </div>
            <ng-content select="[content]" />
          </div>
        }
      </li>
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KListItemComponent {
  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private readonly itemContent = viewChild<ElementRef<HTMLElement>>(
    'itemContent'
  );
  private readonly mediaContainer = viewChild<ElementRef<HTMLElement>>(
    'mediaContainer'
  );
  private readonly projectedMedia =
    contentChild<ElementRef<HTMLElement>>('[media],[data-media]', {
      descendants: true,
    });
  private readonly projectedMediaSlot =
    contentChild<ElementRef<HTMLElement>>('[slot="media"]', {
      descendants: true,
    });

  private readonly listContext = inject(LIST_CONTEXT);

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly subtitle = input<string | undefined>(undefined);
  readonly text = input<string | undefined>(undefined);
  readonly after = input<string | TemplateRef<any> | undefined>(undefined);
  readonly media = input<TemplateRef<any> | undefined>(undefined);
  readonly header = input<string | undefined>(undefined);
  readonly footer = input<string | undefined>(undefined);
  readonly label = input<boolean>(false);
  readonly link = input<boolean>(false);
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly routerLink = input<string | any[] | undefined>(undefined);
  readonly menuListItem = input<boolean>(false);
  readonly menuListItemActive = input<boolean>(false);
  readonly chevron = input<boolean | undefined>(undefined);
  readonly chevronIos = input<boolean>(true);
  readonly chevronMaterial = input<boolean>(true);
  readonly groupTitle = input<boolean>(false);
  readonly dividers = input<boolean | undefined>(undefined);
  readonly contacts = input<boolean>(false);
  readonly titleFontSizeIos = input<string>('text-[17px]');
  readonly titleFontSizeMaterial = input<string>('text-[16px]');
  readonly strongTitle = input<'auto' | boolean>('auto');
  readonly mediaClassName = input<string | undefined>(undefined);
  readonly innerClassName = input<string | undefined>(undefined);
  readonly contentClassName = input<string | undefined>(undefined);
  readonly titleWrapClassName = input<string | undefined>(undefined);

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly colorsComputed = computed(() =>
    ListItemColors(this.colors() ?? {}, this.dark)
  );

  private readonly isLink = computed(() => {
    if (this.groupTitle()) return false;
    if (this.link()) return true;
    if (this.routerLink() !== undefined && this.routerLink() !== null) {
      return true;
    }
    const href = this.href();
    return href !== undefined && href !== null;
  });

  private readonly needsTouchRipple = computed(
    () => this.theme() === 'material' && (this.label() || this.isLink())
  );

  readonly linkHref = computed(() => {
    if (!this.isLink()) return null;
    if (this.routerLink() !== undefined && this.routerLink() !== null) {
      return null;
    }
    const href = this.href();
    return href ?? '';
  });

  readonly itemTag = computed(() => {
    if (this.label()) return 'label';
    if (this.isLink()) return 'a';
    return 'div';
  });

  private readonly textColor = computed(() => {
    const palette = this.colorsComputed() as Record<string, any>;
    if (this.menuListItem()) {
      if (this.menuListItemActive()) {
        return this.theme() === 'ios'
          ? palette['menuListItemActiveTextIos']
          : palette['menuListItemActiveTextMaterial'];
      }
      return this.theme() === 'ios'
        ? palette['menuListItemTextIos']
        : palette['menuListItemTextMaterial'];
    }
    return this.theme() === 'ios'
      ? palette['primaryTextIos']
      : palette['primaryTextMaterial'];
  });

  private readonly autoStrongTitle = computed(() => {
    if (this.strongTitle() !== 'auto') {
      return this.strongTitle() === true;
    }
    return !!this.title() && (!!this.subtitle() || !!this.text());
  });

  private readonly listClasses = computed<Record<string, any>>(() =>
    this.themeClasses(
      ListItemClasses(
        {
          menuListItem: this.menuListItem(),
          dividers:
            this.dividers() !== undefined
              ? !!this.dividers()
              : this.listContext.dividers(),
          mediaClassName: this.mediaClassName() ?? '',
          innerClassName: this.innerClassName() ?? '',
          contentClassName: this.contentClassName() ?? '',
          titleWrapClassName: this.titleWrapClassName() ?? '',
          titleFontSizeIos: this.titleFontSizeIos(),
          titleFontSizeMaterial: this.titleFontSizeMaterial(),
          strongTitle: this.strongTitle(),
          contacts: this.contacts(),
        },
        this.colorsComputed(),
        {
          isMediaItem: !!this.title() && (!!this.subtitle() || !!this.text()),
          theme: this.theme(),
          textColor: this.textColor(),
          needsTouchRipple: this.needsTouchRipple(),
          isMenuListItemActive: this.menuListItemActive(),
          autoStrongTitle: this.autoStrongTitle(),
          darkClasses: this.dark,
          nested: this.listContext.nested(),
        },
        this.className()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<string> = computed(
    () => this.listClasses()['base']
  );
  readonly itemContentClasses: Signal<string> = computed(() => {
    const c = this.listClasses()['itemContent'] as Record<string, string>;
    return this.isLink() || this.label() ? c['link'] : c['default'];
  });
  readonly mediaClasses: Signal<string> = computed(() => {
    const baseClasses = this.listClasses()['media'] as string;
    // Remove margin when media is empty and list is nested (like in popovers)
    if (!this.hasMediaContent() && this.listContext?.nested()) {
      return baseClasses.replace(/me-\d+/g, '');
    }
    return baseClasses;
  });
  readonly innerClasses: Signal<string> = computed(
    () => this.listClasses()['inner']
  );
  readonly titleWrapClasses: Signal<string> = computed(
    () => this.listClasses()['titleWrap']
  );
  readonly titleClasses: Signal<string> = computed(() => {
    const c = this.listClasses()['title'] as Record<string, any>;
    if (this.menuListItem()) return c['menuListItem'];
    if (this.strongTitle() === true || this.autoStrongTitle()) {
      const strong = c['strong'];
      if (typeof strong === 'string') return strong;
      return strong?.[this.theme()] ?? strong;
    }
    return c['default'] ?? c;
  });
  readonly afterClasses: Signal<string> = computed(
    () => this.listClasses()['after']
  );
  readonly subtitleClasses: Signal<string> = computed(
    () => this.listClasses()['subtitle']
  );
  readonly textClasses: Signal<string> = computed(
    () => this.listClasses()['text']
  );
  readonly footerClasses: Signal<string> = computed(
    () => this.listClasses()['footer']
  );
  readonly headerClasses: Signal<string> = computed(
    () => this.listClasses()['header']
  );
  readonly groupTitleClasses: Signal<string> = computed(() => {
    const classes = this.listClasses()['groupTitle'];
    const customClass = this.className();
    return customClass ? `${classes} ${customClass}` : classes;
  });
  readonly chevronClasses: Signal<string> = computed(
    () => this.listClasses()['chevron'] as string
  );
  readonly showChevron = computed(() => {
    if (this.menuListItem()) return false;
    if (!this.isLink()) return false;
    const explicit = this.chevron();
    const resolved =
      explicit !== undefined
        ? explicit
        : this.theme() === 'ios'
          ? this.chevronIos()
          : this.chevronMaterial();
    return !!resolved;
  });

  readonly hasMediaContent = computed(() => {
    if (this.projectedMedia() || this.projectedMediaSlot()) {
      return true;
    }
    const mediaEl = this.mediaContainer()?.nativeElement;
    if (!mediaEl) return false;
    if (typeof Node === 'undefined') return false;
    return Array.from(mediaEl.childNodes).some(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE ||
        (node.nodeType === Node.TEXT_NODE &&
          node.textContent?.trim().length)
    );
  });

  isTemplateRef(value: any): value is TemplateRef<any> {
    return value instanceof TemplateRef;
  }

  constructor() {
    useTouchRipple({
      element: () => this.itemContent()?.nativeElement ?? null,
      needsRipple: () => this.needsTouchRipple(),
    });

  }

  handleClick(event: Event) {
    if (!this.isLink() && !this.label()) return;
  }
}
