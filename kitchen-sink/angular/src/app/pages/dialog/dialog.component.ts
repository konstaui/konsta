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
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KDialogComponent } from '../../../../../../src/angular/components/dialog.component.js';
import { KDialogButtonComponent } from '../../../../../../src/angular/components/dialog-button.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KRadioComponent } from '../../../../../../src/angular/components/radio.component.js';

@Component({
  selector: 'app-dialog',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KButtonComponent,
    KDialogComponent,
    KDialogButtonComponent,
    KListComponent,
    KListItemComponent,
    KRadioComponent,
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
      <k-navbar title="Dialog">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Dialog is a type of modal window that appears in front of app content
          to provide critical information, or prompt for a decision to be made.
        </p>
      </k-block>

      <k-block [strong]="true" [inset]="true">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <k-button [rounded]="true" (clicked)="basicOpened.set(true)">
            Basic
          </k-button>
          <k-button [rounded]="true" (clicked)="alertOpened.set(true)">
            Alert
          </k-button>
          <k-button [rounded]="true" (clicked)="confirmOpened.set(true)">
            Confirm
          </k-button>
          <k-button [rounded]="true" (clicked)="listOpened.set(true)">
            List
          </k-button>
        </div>
      </k-block>

      <k-dialog
        [opened]="basicOpened()"
        (backdropClick)="basicOpened.set(false)"
      >
        <div title>Dialog Title</div>
        <div>
          Dialog is a type of modal window that appears in front of app content
          to provide critical information, or prompt for a decision to be made.
        </div>
        <div buttons class="flex justify-end gap-2">
          <k-dialog-button (clicked)="basicOpened.set(false)">
            Action 2
          </k-dialog-button>
          <k-dialog-button
            [strong]="true"
            (clicked)="basicOpened.set(false)"
          >
            Action 1
          </k-dialog-button>
        </div>
      </k-dialog>

      <k-dialog
        [opened]="alertOpened()"
        (backdropClick)="alertOpened.set(false)"
      >
        <div title>Konsta UI</div>
        <div>Hello world!</div>
        <k-dialog-button
          buttons
          [strong]="true"
          (clicked)="alertOpened.set(false)"
        >
          Ok
        </k-dialog-button>
      </k-dialog>

      <k-dialog
        [opened]="confirmOpened()"
        (backdropClick)="confirmOpened.set(false)"
      >
        <div title>Konsta UI</div>
        <div>All good today?</div>
        <div buttons class="flex justify-end gap-2">
          <k-dialog-button (clicked)="confirmOpened.set(false)">
            No
          </k-dialog-button>
          <k-dialog-button
            [strong]="true"
            (clicked)="confirmOpened.set(false)"
          >
            Yes
          </k-dialog-button>
        </div>
      </k-dialog>

      <k-dialog
        [opened]="listOpened()"
        (backdropClick)="listOpened.set(false)"
      >
        <div title>Your super hero</div>
        <k-list [nested]="true" class="-mx-4">
          <k-list-item [label]="true" [title]="'Batman'">
            <ng-container ngProjectAs="[after]">
              <k-radio
                component="div"
                value="batman"
                [checked]="radioValue() === 'batman'"
                (changed)="radioValue.set('batman')"
              ></k-radio>
            </ng-container>
          </k-list-item>
          <k-list-item [label]="true" [title]="'Spider-man'">
            <ng-container ngProjectAs="[after]">
              <k-radio
                component="div"
                value="spiderman"
                [checked]="radioValue() === 'spiderman'"
                (changed)="radioValue.set('spiderman')"
              ></k-radio>
            </ng-container>
          </k-list-item>
          <k-list-item [label]="true" [title]="'Hulk'">
            <ng-container ngProjectAs="[after]">
              <k-radio
                component="div"
                value="hulk"
                [checked]="radioValue() === 'hulk'"
                (changed)="radioValue.set('hulk')"
              ></k-radio>
            </ng-container>
          </k-list-item>
        </k-list>
        <k-dialog-button
          buttons
          [strong]="true"
          (clicked)="listOpened.set(false)"
        >
          Confirm
        </k-dialog-button>
      </k-dialog>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly basicOpened = signal(false);
  readonly alertOpened = signal(false);
  readonly confirmOpened = signal(false);
  readonly listOpened = signal(false);

  readonly radioValue = signal<'batman' | 'spiderman' | 'hulk'>('batman');

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
