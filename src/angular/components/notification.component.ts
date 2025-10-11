import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  input,
  output,
} from '@angular/core';
import { NotificationsClasses } from '../../shared/classes/NotificationsClasses.js';
import { NotificationsColors } from '../../shared/colors/NotificationsColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KGlassComponent } from './glass.component.js';
import { KDeleteIconComponent } from './icons/delete-icon.component.js';

type NotificationTag = 'div' | 'span';

@Component({
  selector: 'k-notification',
  
  imports: [CommonModule, KGlassComponent, KDeleteIconComponent],
  template: `
    @if (isIos()) {
      <k-glass
        [component]="componentTag()"
        [class]="baseClass()"
        [ios]="ios()"
        [material]="material()"
      >
        @if (hasIcon()) {
          <div class="{{ iconClass() }}">
            <ng-content select="[icon]" />
          </div>
        }
        <div class="{{ contentClass() }}">
          <div class="{{ headerClass() }}">
            @if (hasTitle()) {
              <div class="{{ titleClass() }}">
                {{ title() }}
                <ng-content select="[title]" />
              </div>
            }
            @if (hasTitleRightText()) {
              <div class="{{ titleRightTextClass() }}">
                {{ titleRightText() }}
                <ng-content select="[titleRightText]" />
              </div>
            }
            @if (showButton()) {
              <div
                class="{{ buttonClass() }}"
                role="button"
                tabindex="0"
                (click)="handleClose($event)"
              >
                <k-delete-icon class="{{ deleteIconClass() }}" />
                <ng-content select="[button]" />
              </div>
            }
          </div>
          @if (hasSubtitle()) {
            <div class="{{ subtitleClass() }}">
              {{ subtitle() }}
              <ng-content select="[subtitle]" />
            </div>
          }
          @if (hasText()) {
            <div class="{{ textClass() }}">
              {{ text() }}
              <ng-content select="[text]" />
            </div>
          }
          <ng-content />
        </div>
      </k-glass>
    } @else {
      @switch (componentTag()) {
        @case ('span') {
          <span class="{{ baseClass() }}">
            <div class="{{ headerClass() }}">
              @if (hasIcon()) {
                <div class="{{ iconClass() }}">
                  <ng-content select="[icon]" />
                </div>
              }
              <div class="{{ contentWrapperClass() }}">
                <div class="{{ contentTitleClass() }}">
                  @if (hasTitle()) {
                    <div class="{{ titleClass() }}">
                      {{ title() }}
                      <ng-content select="[title]" />
                    </div>
                  }
                  @if (hasTitleRightText()) {
                    <div class="{{ titleRightTextClass() }}">
                      {{ titleRightText() }}
                      <ng-content select="[titleRightText]" />
                    </div>
                  }
                </div>
                <div class="{{ contentClass() }}">
                  @if (hasSubtitle()) {
                    <div class="{{ subtitleClass() }}">
                      {{ subtitle() }}
                      <ng-content select="[subtitle]" />
                    </div>
                  }
                  @if (hasText()) {
                    <div class="{{ textClass() }}">
                      {{ text() }}
                      <ng-content select="[text]" />
                    </div>
                  }
                  <ng-content />
                </div>
              </div>
              @if (showButton()) {
                <div
                  class="{{ buttonClass() }}"
                  role="button"
                  tabindex="0"
                  (click)="handleClose($event)"
                >
                  <k-delete-icon class="{{ deleteIconClass() }}" />
                  <ng-content select="[button]" />
                </div>
              }
            </div>
          </span>
        }
        @default {
          <div class="{{ baseClass() }}">
            <div class="{{ headerClass() }}">
              @if (hasIcon()) {
                <div class="{{ iconClass() }}">
                  <ng-content select="[icon]" />
                </div>
              }
              <div class="{{ contentWrapperClass() }}">
                <div class="{{ contentTitleClass() }}">
                  @if (hasTitle()) {
                    <div class="{{ titleClass() }}">
                      {{ title() }}
                      <ng-content select="[title]" />
                    </div>
                  }
                  @if (hasTitleRightText()) {
                    <div class="{{ titleRightTextClass() }}">
                      {{ titleRightText() }}
                      <ng-content select="[titleRightText]" />
                    </div>
                  }
                </div>
                <div class="{{ contentClass() }}">
                  @if (hasSubtitle()) {
                    <div class="{{ subtitleClass() }}">
                      {{ subtitle() }}
                      <ng-content select="[subtitle]" />
                    </div>
                  }
                  @if (hasText()) {
                    <div class="{{ textClass() }}">
                      {{ text() }}
                      <ng-content select="[text]" />
                    </div>
                  }
                  <ng-content />
                </div>
              </div>
              @if (showButton()) {
                <div
                  class="{{ buttonClass() }}"
                  role="button"
                  tabindex="0"
                  (click)="handleClose($event)"
                >
                  <k-delete-icon class="{{ deleteIconClass() }}" />
                  <ng-content select="[button]" />
                </div>
              }
            </div>
          </div>
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KNotificationComponent {
  readonly component = input<NotificationTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly opened = input<boolean>(false);
  readonly button = input<boolean>(false);
  readonly title = input<string | number | undefined>(undefined);
  readonly titleRightText = input<string | number | undefined>(undefined);
  readonly subtitle = input<string | number | undefined>(undefined);
  readonly text = input<string | number | undefined>(undefined);

  readonly close = output<Event>();

  private readonly iconSlot =
    contentChild<ElementRef<HTMLElement>>('[icon]');
  private readonly buttonSlot =
    contentChild<ElementRef<HTMLElement>>('[button]');
  private readonly titleSlot =
    contentChild<ElementRef<HTMLElement>>('[title]');
  private readonly titleRightSlot =
    contentChild<ElementRef<HTMLElement>>('[titleRightText]');
  private readonly subtitleSlot =
    contentChild<ElementRef<HTMLElement>>('[subtitle]');
  private readonly textSlot =
    contentChild<ElementRef<HTMLElement>>('[text]');

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
    NotificationsColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        NotificationsClasses(
          { opened: this.opened() },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly contentClass: Signal<string> = computed(
    () => this.classes()['content'] as string
  );
  readonly headerClass: Signal<string> = computed(
    () => this.classes()['header'] as string
  );
  readonly iconClass: Signal<string> = computed(
    () => this.classes()['icon'] as string
  );
  readonly contentTitleClass: Signal<string> = computed(() => {
    const value = this.classes()['contentTitle'];
    if (!value) return '';
    if (typeof value === 'string') return value;
    return value as string;
  });
  readonly contentWrapperClass: Signal<string> = computed(() => {
    const value = this.classes()['contentWrapper'] as string | undefined;
    return value ?? 'flex-1';
  });
  readonly titleClass: Signal<string> = computed(
    () => this.classes()['title'] as string
  );
  readonly titleRightTextClass: Signal<string> = computed(
    () => this.classes()['titleRightText'] as string
  );
  readonly buttonClass: Signal<string> = computed(
    () => this.classes()['button'] as string
  );
  readonly deleteIconClass: Signal<string> = computed(
    () => this.classes()['deleteIcon'] as string
  );
  readonly subtitleClass: Signal<string> = computed(
    () => this.classes()['subtitle'] as string
  );
  readonly textClass: Signal<string> = computed(
    () => this.classes()['text'] as string
  );

  readonly isIos = computed(() => this.theme() === 'ios');

  readonly componentTag: Signal<NotificationTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    if (value === 'span') return 'span';
    return 'div';
  });

  readonly hasIcon = computed(
    () => !!this.iconSlot()?.nativeElement
  );
  readonly showButton = computed(
    () =>
      this.button() === true || !!this.buttonSlot()?.nativeElement
  );
  readonly hasTitle = computed(
    () =>
      this.title() !== undefined &&
      this.title() !== null ||
      !!this.titleSlot()?.nativeElement
  );
  readonly hasTitleRightText = computed(
    () =>
      this.titleRightText() !== undefined &&
      this.titleRightText() !== null ||
      !!this.titleRightSlot()?.nativeElement
  );
  readonly hasSubtitle = computed(
    () =>
      this.subtitle() !== undefined &&
      this.subtitle() !== null ||
      !!this.subtitleSlot()?.nativeElement
  );
  readonly hasText = computed(
    () =>
      this.text() !== undefined &&
      this.text() !== null ||
      !!this.textSlot()?.nativeElement
  );

  handleClose(event: Event) {
    event.stopPropagation();
    this.close.emit(event);
  }
}
