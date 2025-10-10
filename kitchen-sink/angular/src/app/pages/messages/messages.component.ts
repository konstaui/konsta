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
  standalone: true,
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
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-messages>
        <k-messages-title>
          <b>{{ currentDay }}</b>, {{ currentTime }}
        </k-messages-title>
        <k-message
          *ngFor="let message of messages()"
          [type]="message.type"
          [name]="message.name"
          [text]="message.text"
        >
          <ng-container *ngIf="message.type === 'received' && message.avatar">
            <img
              avatar
              [src]="message.avatar"
              alt=""
              class="w-8 h-8 rounded-full"
            />
          </ng-container>
        </k-message>
      </k-messages>

      <k-messagebar
        class="z-20"
        placeholder="Message"
        [value]="messageText()"
        (input)="onMessageTextChange($event)"
        (valueChange)="onMessageTextSet($event)"
        (disable)="onMessagebarDisable()"
      >
        <k-toolbar-pane left class="ios:h-10" left>
          <k-link [iconOnly]="true">
            <k-icon>
              <span ios>
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6a2 2 0 0 1 2-2h2.4l1-1.5A1 1 0 0 1 10.3 2h3.4a1 1 0 0 1 .9.5l1 1.5H18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm8 3.5A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm0 1.5a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
                </svg>
              </span>
              <span material>
                <svg
                  class="w-6 h-6 fill-black dark:fill-md-dark-on-surface"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7a6.99 6.99 0 0 0 5.65-2.9l2.02 2.02 1.41-1.42-2-2.01A6.99 6.99 0 0 0 19 12c0-3.86-3.14-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-.5-8H11v3l2.62 1.58.38-.62-2-1.21V9z"
                  />
                </svg>
              </span>
            </k-icon>
          </k-link>
        </k-toolbar-pane>
        <k-toolbar-pane right class="ios:h-10" right>
          <k-link
            [iconOnly]="true"
            [class]="sendButtonClass()"
            (clicked)="onSendClick()"
          >
            <k-icon>
              <span ios>
                <svg
                  [ngClass]="{ 'text-primary': isClickable() }"
                  class="w-7 h-7 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm3.54 11.91-6.2 2.67a1 1 0 0 1-1.34-1.18l1.5-5.5a1 1 0 0 1 1.68-.45l.54.53 1.8-1.8a.5.5 0 0 1 .85.35v5.5a.5.5 0 0 1-.73.45l-2.13-1.06-.78.78 4.51-1.94-1.8 3.21a1 1 0 0 1-1.46.38Z"
                  />
                </svg>
              </span>
              <span material>
                <svg
                  class="w-6 h-6 fill-black dark:fill-md-dark-on-surface"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
                    [attr.opacity]="isClickable() ? 1 : 0.4"
                  />
                </svg>
              </span>
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
