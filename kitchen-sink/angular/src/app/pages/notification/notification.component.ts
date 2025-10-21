import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
  computed,
} from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KNotificationComponent } from '../../../../../../src/angular/components/notification.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KDialogComponent } from '../../../../../../src/angular/components/dialog.component.js';
import { KDialogButtonComponent } from '../../../../../../src/angular/components/dialog-button.component.js';
import { DemoIconComponent } from '../../components/demo-icon.component.js';

interface NotificationState {
  notificationFull: boolean;
  notificationWithButton: boolean;
  notificationCloseOnClick: boolean;
  notificationCallbackOnClose: boolean;
}

@Component({
  selector: 'app-notification',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KNotificationComponent,
    KBlockComponent,
    KButtonComponent,
    KDialogComponent,
    KDialogButtonComponent,
    DemoIconComponent,
  ],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    <k-page>
      <k-navbar title="Notification">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-notification
        [opened]="opened().notificationFull"
        [title]="'Konsta UI'"
        [titleRightText]="'now'"
        [subtitle]="'This is a subtitle'"
        [text]="'This is a simple notification message'"
      >
        <app-demo-icon icon></app-demo-icon>
      </k-notification>

      <k-notification
        [opened]="opened().notificationWithButton"
        [title]="'Konsta UI'"
        [subtitle]="'Notification with close button'"
        [text]="'Click (x) button to close me'"
        [button]="true"
        (click)="close('notificationWithButton')"
        (close)="close('notificationWithButton')"
      >
        <app-demo-icon icon></app-demo-icon>
      </k-notification>

      <k-notification
        [opened]="opened().notificationCloseOnClick"
        [title]="'Konsta UI'"
        [titleRightText]="'now'"
        [subtitle]="'Notification with close on click'"
        [text]="'Click me to close'"
        (click)="close('notificationCloseOnClick')"
      >
        <app-demo-icon icon></app-demo-icon>
      </k-notification>

      <k-notification
        [opened]="opened().notificationCallbackOnClose"
        [title]="'Konsta UI'"
        [titleRightText]="'now'"
        [subtitle]="'Notification with close on click'"
        [text]="'Click me to close'"
        (click)="handleCallbackClose()"
      >
        <app-demo-icon icon></app-demo-icon>
      </k-notification>

      <k-dialog
        [opened]="alertOpened()"
        (backdropClick)="alertOpened.set(false)"
      >
        <div title>Konsta UI</div>
        <div>Notification closed</div>
        <k-dialog-button buttons (clicked)="alertOpened.set(false)">
          Ok
        </k-dialog-button>
      </k-dialog>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Konsta UI comes with simple Notifications component that allows you to
          show some useful messages to user and request basic actions.
        </p>
        <div class="grid gap-4 sm:grid-cols-2">
          <k-button [rounded]="true" (clicked)="open('notificationFull')">
            Full layout notification
          </k-button>
          <k-button [rounded]="true" (clicked)="open('notificationWithButton')">
            With Close Button
          </k-button>
          <k-button [rounded]="true" (clicked)="open('notificationCloseOnClick')">
            Click to Close
          </k-button>
          <k-button
            [rounded]="true"
            (clicked)="open('notificationCallbackOnClose')"
          >
            Callback on Close
          </k-button>
        </div>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly opened = signal<NotificationState>({
    notificationFull: false,
    notificationWithButton: false,
    notificationCloseOnClick: false,
    notificationCallbackOnClose: false,
  });

  readonly alertOpened = signal(false);

  constructor() {
    effect(() => {
      if (this.opened().notificationFull) {
        setTimeout(() => {
          this.opened.update((state) => ({
            ...state,
            notificationFull: false,
          }));
        }, 3000);
      }
    });
  }

  open(key: keyof NotificationState) {
    this.opened.set({
      notificationFull: false,
      notificationWithButton: false,
      notificationCloseOnClick: false,
      notificationCallbackOnClose: false,
      [key]: true,
    });
  }

  close(key: keyof NotificationState) {
    this.opened.update((state) => ({
      ...state,
      [key]: false,
    }));
  }

  handleCallbackClose() {
    this.close('notificationCallbackOnClose');
    this.alertOpened.set(true);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
