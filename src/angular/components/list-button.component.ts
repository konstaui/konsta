import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';
import { ListButtonColors } from '../../shared/colors/ListButtonColors.js';
import {
  LIST_CONTEXT,
  ListContextValue,
} from '../shared/list-context.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { useTouchRipple } from '../shared/touch-ripple.js';

type ListButtonContainer = 'li' | 'div';
type ListButtonLinkTag = 'a' | 'button';

@Component({
  selector: 'k-list-button',
  
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    <ng-template #buttonTpl>
      @if (isLink()) {
        @switch (linkTag()) {
          @case ('a') {
            <a
              #buttonEl
              class="{{ buttonClass() }}"
              [attr.href]="hrefAttr() ?? null"
              [attr.target]="target() ?? null"
            >
              <ng-content />
            </a>
          }
          @case ('button') {
            <button
              #buttonEl
              class="{{ buttonClass() }}"
              type="button"
              [attr.value]="valueAttr()"
            >
              <ng-content />
            </button>
          }
          @default {
            <span #buttonEl class="{{ buttonClass() }}">
              <ng-content />
            </span>
          }
        }
      } @else {
        <button
          #buttonEl
          class="{{ buttonClass() }}"
          [attr.type]="type() ?? 'button'"
          [attr.value]="valueAttr()"
        >
          <ng-content />
        </button>
      }
    </ng-template>

    @switch (componentTag()) {
      @case ('li') {
        <li class="{{ baseClass() }}">
          <ng-container *ngTemplateOutlet="buttonTpl"></ng-container>
        </li>
      }
      @default {
        <div class="{{ baseClass() }}">
          <ng-container *ngTemplateOutlet="buttonTpl"></ng-container>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KListButtonComponent {
  private readonly listContext = inject<ListContextValue>(LIST_CONTEXT, {
    self: false,
  });
  private readonly buttonEl = viewChild<ElementRef<HTMLElement>>('buttonEl');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly component = input<ListButtonContainer>('li');
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly href = input<string | boolean | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly type = input<string | undefined>(undefined);
  readonly value = input<string | number | undefined>(undefined);
  readonly linkComponent = input<ListButtonLinkTag>('a');

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
    ListButtonColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        ListButtonClasses(
          {
            dividers: this.listContext.dividers(),
          },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly buttonClass: Signal<string> = computed(
    () => this.classes()['button'] as string
  );

  readonly componentTag: Signal<ListButtonContainer> = computed(() => {
    const value = (this.component() || 'li').toLowerCase();
    if (value === 'div') return 'div';
    return 'li';
  });

  readonly isLink = computed(() => {
    const href = this.href();
    if (href === undefined || href === null) return false;
    if (typeof href === 'boolean') return href;
    return true;
  });

  readonly hrefAttr = computed(() => {
    if (!this.isLink()) return undefined;
    const href = this.href();
    if (typeof href === 'boolean') return undefined;
    if (href === undefined || href === null) return undefined;
    return href === '' ? '' : href;
  });

  readonly valueAttr = computed(() => {
    const value = this.value();
    if (value === undefined || value === null) return null;
    return `${value}`;
  });

  readonly linkTag: Signal<ListButtonLinkTag> = computed(() => {
    const value = (this.linkComponent() || 'a').toLowerCase();
    if (value === 'button') return 'button';
    return 'a';
  });

  constructor() {
    useTouchRipple({
      element: () => this.buttonEl()?.nativeElement ?? null,
      needsRipple: () => this.theme() === 'material',
    });
  }
}
