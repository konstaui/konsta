import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  signal,
  viewChild,
} from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KMessagesComponent } from '../../../../../../src/angular/components/messages.component.js';
import { KMessageComponent } from '../../../../../../src/angular/components/message.component.js';
import { KMessagesTitleComponent } from '../../../../../../src/angular/components/messages-title.component.js';
import { KMessagebarComponent } from '../../../../../../src/angular/components/messagebar.component.js';
import { KIconComponent } from '../../../../../../src/angular/components/icon.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KToolbarPaneComponent } from '../../../../../../src/angular/components/toolbar-pane.component.js';

interface MessageItem {
  type: 'sent' | 'received';
  text: string;
  name?: string;
  avatar?: string;
}

@Component({
  selector: 'app-messages',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KMessagesComponent,
    KMessageComponent,
    KMessagesTitleComponent,
    KMessagebarComponent,
    KIconComponent,
    KLinkComponent,
    KToolbarPaneComponent,
  ],
  template: `
    <k-page
      #page
      class="messages-page ios:bg-white ios:dark:bg-black"
    >
      <k-navbar title="Messages">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-messages>
        <k-messages-title>
          <b>{{ currentDay }}</b>, {{ currentTime }}
        </k-messages-title>
        @for (message of messages(); track $index) {
          <k-message
            [type]="message.type"
            [name]="message.name"
            [text]="message.text"
            [avatar]="message.avatar"
          />
        }
      </k-messages>

      <k-messagebar
        class="z-20"
        placeholder="Message"
        [value]="messageText()"
        (input)="onMessageTextChange($event)"
        (valueChange)="onMessageTextSet($event)"
        (disable)="onMessagebarDisable()"
      >
        <k-toolbar-pane left class="ios:h-10">
          <k-link [iconOnly]="true">
            <k-icon>
              <i ios class="f7-icons" style="font-size: 20px;">camera_fill</i>
              <i material class="material-icons text-black dark:text-md-dark-on-surface" style="font-size: 24px;">photo_camera</i>
            </k-icon>
          </k-link>
        </k-toolbar-pane>
        <k-toolbar-pane right class="ios:h-10">
          <k-link
            [iconOnly]="true"
            [class]="sendButtonClass()"
            (clicked)="onSendClick()"
          >
            <k-icon>
              <i ios class="f7-icons transition-colors" [class.text-primary]="isClickable()" style="font-size: 28px;">arrow_up_circle_fill</i>
              <i material class="material-icons text-black dark:text-md-dark-on-surface" [style.opacity]="isClickable() ? 1 : 0.4" style="font-size: 24px;">send</i>
            </k-icon>
          </k-link>
        </k-toolbar-pane>
      </k-messagebar>
    </k-page>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent implements AfterViewInit {
  private readonly page = viewChild<ElementRef<HTMLElement>>('page');

  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly messageText = signal('');
  readonly messages = signal<MessageItem[]>([
    { type: 'sent', text: 'Hi, Kate' },
    { type: 'sent', text: 'How are you?' },
    {
      type: 'received',
      name: 'Kate',
      text: 'Hi, I am good!',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
    },
    {
      type: 'received',
      name: 'Blue Ninja',
      text: 'Hi there, I am also fine, thanks! And how are you?',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg',
    },
    {
      type: 'sent',
      text: 'Hey, Blue Ninja! Glad to see you ;)',
    },
    {
      type: 'sent',
      text: 'How do you feel about going to the movies today?',
    },
    {
      type: 'received',
      name: 'Kate',
      text: 'Oh, great idea!',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
    },
    {
      type: 'received',
      name: 'Kate',
      text: 'What cinema are we going to?',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg',
    },
    {
      type: 'received',
      name: 'Blue Ninja',
      text: 'Great. And what movie?',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg',
    },
    {
      type: 'received',
      name: 'Blue Ninja',
      text: 'What time?',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg',
    },
  ]);

  readonly isClickable = computed(
    () => this.messageText().trim().length > 0
  );

  readonly sendButtonClass = computed(() =>
    this.isClickable() ? 'cursor-pointer opacity-100' : 'opacity-40'
  );

  readonly currentDay: string;
  readonly currentTime: string;

  constructor() {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    const now = new Date();
    this.currentDay = dateFormatter.format(now);
    this.currentTime = timeFormatter.format(now);

    effect(() => {
      this.messages();
      queueMicrotask(() => this.scrollToBottom());
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom(false);
  }

  onMessageTextChange(event: Event) {
    this.messageText.set((event.target as HTMLTextAreaElement).value);
  }

  onMessageTextSet(value: string | null) {
    this.messageText.set(value ?? '');
  }

  onMessagebarDisable() {
    this.messageText.set('');
  }

  onSendClick() {
    if (!this.isClickable()) return;
    const text = this.messageText()
      .replace(/\n/g, '<br>')
      .trim();
    if (!text) return;
    this.messages.update((items) => [...items, { type: 'sent', text }]);
    this.messageText.set('');
  }

  private scrollToBottom(animate = true) {
    const page = this.page();
    if (!page) return;
    const el = page.nativeElement;
    const behavior = animate ? 'smooth' : 'auto';
    el.scrollTo({
      top: el.scrollHeight - el.clientHeight,
      behavior: behavior as ScrollBehavior,
    });
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
