import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  Signal,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { ListItemClasses } from '../../shared/classes/ListItemClasses.js';
import { ListItemColors } from '../../shared/colors/ListItemColors.js';
import { LIST_CONTEXT } from '../shared/list-context.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

@Component({
  selector: 'k-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li #root class="{{ baseClasses() }}">
      <ng-container *ngIf="groupTitle(); else standardItem">
        <div class="{{ groupTitleClasses() }}">
          <ng-content select="[media]" />
          <span>{{ title() }}</span>
          <ng-content select="[after]" />
        </div>
      </ng-container>

      <ng-template #standardItem>
        <ng-container [ngSwitch]="itemTag()">
          <a
            *ngSwitchCase="'a'"
            #itemContent
            class="{{ itemContentClasses() }}"
            [attr.href]="linkHref()"
            [attr.target]="target() ?? null"
            (click)="handleClick($event)"
          >
            <ng-container *ngTemplateOutlet="itemBody"></ng-container>
          </a>
          <label
            *ngSwitchCase="'label'"
            #itemContent
            class="{{ itemContentClasses() }}"
            (click)="handleClick($event)"
          >
            <ng-container *ngTemplateOutlet="itemBody"></ng-container>
          </label>
          <div
            *ngSwitchDefault
            #itemContent
            class="{{ itemContentClasses() }}"
          >
            <ng-container *ngTemplateOutlet="itemBody"></ng-container>
          </div>
        </ng-container>
      </ng-template>

      <ng-template #itemBody>
        <div class="{{ mediaClasses() }}">
          <ng-content select="[media]" />
        </div>
        <div class="{{ innerClasses() }}">
          <ng-container *ngIf="header()">
            <div class="{{ headerClasses() }}">{{ header() }}</div>
          </ng-container>
          <div class="{{ titleWrapClasses() }}">
            <ng-container *ngIf="title(); else projectedTitle">
              <span class="{{ titleClasses() }}">{{ title() }}</span>
            </ng-container>
            <ng-template #projectedTitle>
              <ng-content select="[title]" />
            </ng-template>
            <span class="{{ afterClasses() }}">
              <ng-container *ngIf="after(); else projectedAfter">
                {{ after() }}
              </ng-container>
              <ng-template #projectedAfter>
                <ng-content select="[after]" />
              </ng-template>
            </span>
          </div>
          <ng-container *ngIf="subtitle()">
            <div class="{{ subtitleClasses() }}">{{ subtitle() }}</div>
          </ng-container>
          <ng-container *ngIf="text()">
            <div class="{{ textClasses() }}">{{ text() }}</div>
          </ng-container>
          <ng-container *ngIf="footer()">
            <div class="{{ footerClasses() }}">{{ footer() }}</div>
          </ng-container>
          <ng-content select="[inner]" />
        </div>
        <ng-content select="[content]" />
      </ng-template>
    </li>
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
  readonly after = input<string | undefined>(undefined);
  readonly header = input<string | undefined>(undefined);
  readonly footer = input<string | undefined>(undefined);
  readonly label = input<boolean>(false);
  readonly link = input<boolean>(false);
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
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
    const href = this.href();
    return href !== undefined && href !== null;
  });

  private readonly needsTouchRipple = computed(
    () => this.theme() === 'material' && (this.label() || this.isLink())
  );

  readonly linkHref = computed(() => {
    if (!this.isLink()) return null;
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
          mediaClassName: '',
          innerClassName: '',
          contentClassName: '',
          titleWrapClassName: '',
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
  readonly mediaClasses: Signal<string> = computed(
    () => this.listClasses()['media']
  );
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
  readonly groupTitleClasses: Signal<string> = computed(
    () => this.listClasses()['groupTitle']
  );

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
