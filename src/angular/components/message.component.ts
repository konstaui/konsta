import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  contentChild,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { cls } from '../../shared/cls.js';
import { MessageClasses } from '../../shared/classes/MessageClasses.js';
import { MessageColors } from '../../shared/colors/MessageColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

type MessageTag = 'div' | 'span';
type MessageType = 'sent' | 'received';

@Component({
  selector: 'k-message',
  host: {
    '[style.display]': '"contents"',
  },
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ messageClass() }}" [attr.id]="id() ?? null">
          <ng-container *ngTemplateOutlet="messageContentTpl"></ng-container>
        </span>
      }
      @default {
        <div class="{{ messageClass() }}" [attr.id]="id() ?? null">
          <ng-container *ngTemplateOutlet="messageContentTpl"></ng-container>
        </div>
      }
    }

    <ng-template #messageContentTpl>
      @if (showAvatar()) {
        <div class="{{ messageAvatarClass() }}">
          @if (avatar()) {
            <img
              [src]="avatar()!"
              alt=""
              class="w-full h-full rounded-full object-cover"
            />
          } @else {
            <ng-content select="[avatar]" />
          }
        </div>
      }

      <div class="{{ messageContentClass() }}">
        @if (name()) {
          <div class="{{ messageNameClass() }}">
            {{ name() }}
          </div>
        }
        @if (header()) {
          <div class="{{ messageHeaderClass() }}">
            {{ header() }}
          </div>
        }
        <div class="{{ messageBubbleClass() }}">
          @if (textHeader()) {
            <div class="{{ messageTextHeaderClass() }}">
              {{ textHeader() }}
            </div>
          }
          @if (text()) {
            <div
            class="{{ messageTextClass() }}"
            [innerHTML]="safeText() ?? ''"
          ></div>
          }
          @if (textFooter()) {
            <div class="{{ messageTextFooterClass() }}">
              {{ textFooter() }}
            </div>
          }
          <ng-content />
        </div>
        @if (footer()) {
          <div class="{{ messageFooterClass() }}">
            {{ footer() }}
          </div>
        }
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KMessageComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly avatarSlot =
    contentChild<ElementRef<HTMLElement>>('[avatar]');

  readonly component = input<MessageTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly id = input<string | undefined>(undefined);

  readonly type = input<MessageType>('sent');
  readonly text = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);
  readonly header = input<string | undefined>(undefined);
  readonly footer = input<string | undefined>(undefined);
  readonly textHeader = input<string | undefined>(undefined);
  readonly textFooter = input<string | undefined>(undefined);
  readonly avatar = input<string | undefined>(undefined);

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
    MessageColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        MessageClasses(
          {
            type: this.type(),
          },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly messageClass: Signal<string> = computed(() =>
    cls(
      this.classes()['message'] as string,
      this.type() === 'sent'
        ? (this.classes()['messageSent'] as string)
        : (this.classes()['messageReceived'] as string)
    )
  );

  readonly messageAvatarClass: Signal<string> = computed(
    () => this.classes()['messageAvatar'] as string
  );
  readonly messageContentClass: Signal<string> = computed(
    () => this.classes()['messageContent'] as string
  );
  readonly messageNameClass: Signal<string> = computed(
    () => this.classes()['messageName'] as string
  );
  readonly messageHeaderClass: Signal<string> = computed(
    () => this.classes()['messageHeader'] as string
  );
  readonly messageFooterClass: Signal<string> = computed(
    () => this.classes()['messageFooter'] as string
  );
  readonly messageBubbleClass: Signal<string> = computed(
    () => this.classes()['messageBubble'] as string
  );
  readonly messageTextClass: Signal<string> = computed(
    () => this.classes()['messageText'] as string
  );
  readonly messageTextHeaderClass: Signal<string> = computed(
    () => this.classes()['messageTextHeader'] as string
  );
  readonly messageTextFooterClass: Signal<string> = computed(
    () => this.classes()['messageTextFooter'] as string
  );

  readonly componentTag: Signal<MessageTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'span' ? 'span' : 'div';
  });

  readonly safeText: Signal<SafeHtml | null> = computed(() => {
    const value = this.text();
    if (!value) return null;
    return this.sanitizer.bypassSecurityTrustHtml(value);
  });

  readonly showAvatar = computed(
    () => !!this.avatar() || !!this.avatarSlot()
  );
}
