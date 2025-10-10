import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KToastComponent } from '../../../../../../src/angular/components/toast.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';

type ToastPosition = 'left' | 'center' | 'right';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KToastComponent,
    KBlockComponent,
    KButtonComponent,
  ],
  template: `
    <k-page>
      <k-navbar title="Toast">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="flex flex-col gap-4">
        <k-toast position="left" [opened]="opened().left">
          <div class="shrink">Hello this is left toast!</div>
          <div button>
            <k-button
              [clear]="true"
              [rounded]="true"
              [inline]="true"
              (clicked)="close('left')"
            >
              Close
            </k-button>
          </div>
        </k-toast>
        <k-toast position="center" [opened]="opened().center">
          <div class="shrink">Hello this is center toast!</div>
          <div button>
            <k-button
              [clear]="true"
              [rounded]="true"
              [inline]="true"
              (clicked)="close('center')"
            >
              Close
            </k-button>
          </div>
        </k-toast>
        <k-toast position="right" [opened]="opened().right">
          <div class="shrink">Hello this is right toast!</div>
          <div button>
            <k-button
              [clear]="true"
              [rounded]="true"
              [inline]="true"
              (clicked)="close('right')"
            >
              Close
            </k-button>
          </div>
        </k-toast>
        <p>
          Toasts provide brief feedback about an operation through a message on
          the screen.
        </p>
        <p>
          <k-button [rounded]="true" (clicked)="open('left')">
            Toast on Left
          </k-button>
        </p>
        <p>
          <k-button [rounded]="true" (clicked)="open('center')">
            Toast on Center
          </k-button>
        </p>
        <p>
          <k-button [rounded]="true" (clicked)="open('right')">
            Toast on Right
          </k-button>
        </p>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly opened = signal({
    left: false,
    center: false,
    right: false,
  });

  open(position: ToastPosition) {
    this.opened.set({
      left: position === 'left',
      center: position === 'center',
      right: position === 'right',
    });
  }

  close(position: ToastPosition) {
    this.opened.update((state) => ({ ...state, [position]: false }));
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
