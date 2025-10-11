import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  input,
} from '@angular/core';
import { CardClasses } from '../../shared/classes/CardClasses.js';
import { CardColors } from '../../shared/colors/CardColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-card',
  
  imports: [CommonModule],
  template: `
    <ng-template #cardContent>
      @if (hasHeader()) {
        <div class="{{ headerClasses() }}">
          @if (header()) {
            {{ header() }}
          } @else {
            <ng-content select="[header]" />
          }
        </div>
      }

      @if (contentWrap()) {
        <div class="{{ contentClasses() }}">
          <ng-content />
        </div>
      } @else {
        <ng-content />
      }

      @if (hasFooter()) {
        <div class="{{ footerClasses() }}">
          @if (footer()) {
            {{ footer() }}
          } @else {
            <ng-content select="[footer]" />
          }
        </div>
      }
    </ng-template>

    @switch (tag()) {
      @case ('section') {
        <section class="{{ baseClasses()[style()] }}">
          <ng-container *ngTemplateOutlet="cardContent"></ng-container>
        </section>
      }
      @case ('article') {
        <article class="{{ baseClasses()[style()] }}">
          <ng-container *ngTemplateOutlet="cardContent"></ng-container>
        </article>
      }
      @case ('li') {
        <li class="{{ baseClasses()[style()] }}">
          <ng-container *ngTemplateOutlet="cardContent"></ng-container>
        </li>
      }
      @default {
        <div class="{{ baseClasses()[style()] }}">
          <ng-container *ngTemplateOutlet="cardContent"></ng-container>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KCardComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly header = input<string | number | undefined>(undefined);
  readonly footer = input<string | number | undefined>(undefined);
  readonly contentWrap = input<boolean>(true);
  readonly contentWrapPadding = input<string>('p-4');
  readonly raised = input<boolean | undefined>(undefined);
  readonly raisedIos = input<boolean | undefined>(undefined);
  readonly raisedMaterial = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);
  readonly headerDivider = input<boolean>(false);
  readonly footerDivider = input<boolean>(false);
  readonly headerFontSizeIos = input<string>('text-[17px]');
  readonly headerFontSizeMaterial = input<string>('text-[22px]');

  private readonly headerContent =
    contentChild<ElementRef<HTMLElement>>('[header]');
  private readonly footerContent =
    contentChild<ElementRef<HTMLElement>>('[footer]');

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();
  private static readonly SUPPORTED_TAGS = new Set(['div', 'section', 'article', 'li']);
  readonly tag: Signal<'div' | 'section' | 'article' | 'li'> = computed(() => {
    const raw = (this.component() ?? 'div').toLowerCase();
    return (KCardComponent.SUPPORTED_TAGS.has(raw)
      ? raw
      : 'div') as 'div' | 'section' | 'article' | 'li';
  });

  private readonly palette = computed(() =>
    CardColors(this.colors() ?? {}, this.dark)
  );

  private readonly isOutline = computed(() => {
    const value = this.outline();
    if (value !== undefined && value !== null) return value;
    return this.theme() === 'ios'
      ? !!this.outlineIos()
      : !!this.outlineMaterial();
  });

  private readonly isRaised = computed(() => {
    const value = this.raised();
    if (value !== undefined && value !== null) return value;
    return this.theme() === 'ios'
      ? !!this.raisedIos()
      : !!this.raisedMaterial();
  });

  readonly style: Signal<'outline' | 'raised' | 'plain'> = computed(() => {
    if (this.isOutline()) return 'outline';
    if (this.isRaised()) return 'raised';
    return 'plain';
  });

  private readonly classes = computed(() =>
    this.themeClasses(
      CardClasses(
        {
          contentWrapPadding: this.contentWrapPadding(),
          headerDivider: this.headerDivider(),
          footerDivider: this.footerDivider(),
          headerFontSizeIos: this.headerFontSizeIos(),
          headerFontSizeMaterial: this.headerFontSizeMaterial(),
          outline: this.isOutline(),
          raised: this.isRaised(),
        },
        this.palette(),
        this.className()
      ),
      this.className()
    ) as Record<string, any>
  );

  readonly baseClasses: Signal<Record<string, string>> = computed(
    () => this.classes()['base'] as Record<string, string>
  );
  readonly headerClasses: Signal<string> = computed(
    () => this.classes()['header'] as string
  );
  readonly contentClasses: Signal<string> = computed(
    () => this.classes()['content'] as string
  );
  readonly footerClasses: Signal<string> = computed(
    () => this.classes()['footer'] as string
  );

  readonly hasHeader = computed(
    () => !!this.header() || !!this.headerContent()
  );
  readonly hasFooter = computed(
    () => !!this.footer() || !!this.footerContent()
  );
}
