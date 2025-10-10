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
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KActionsComponent } from '../../../../../../src/angular/components/actions.component.js';
import { KActionsGroupComponent } from '../../../../../../src/angular/components/actions-group.component.js';
import { KActionsLabelComponent } from '../../../../../../src/angular/components/actions-label.component.js';
import { KActionsButtonComponent } from '../../../../../../src/angular/components/actions-button.component.js';

@Component({
  selector: 'app-action-sheet',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KButtonComponent,
    KActionsComponent,
    KActionsGroupComponent,
    KActionsLabelComponent,
    KActionsButtonComponent,
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
      <k-navbar title="Action Sheet">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Action Sheet is a slide-up pane for presenting the user with a set of
          alternatives for how to proceed with a given task.
        </p>
      </k-block>

      <k-block-title>Open Action Sheet</k-block-title>
      <k-block
        [strong]="true"
        [inset]="true"
        class="flex space-x-4 rtl:space-x-reverse"
      >
        <k-button [rounded]="true" (clicked)="actionsOneOpened.set(true)">
          One group
        </k-button>
        <k-button [rounded]="true" (clicked)="actionsTwoOpened.set(true)">
          Two groups
        </k-button>
      </k-block>

      <k-actions
        [opened]="actionsOneOpened()"
        (backdropClick)="actionsOneOpened.set(false)"
      >
        <k-actions-group>
          <k-actions-label>Do something</k-actions-label>
          <k-actions-button
            [bold]="true"
            (clicked)="actionsOneOpened.set(false)"
          >
            Button 1
          </k-actions-button>
          <k-actions-button (clicked)="actionsOneOpened.set(false)">
            Button 2
          </k-actions-button>
          <k-actions-button (clicked)="actionsOneOpened.set(false)">
            Cancel
          </k-actions-button>
        </k-actions-group>
      </k-actions>

      <k-actions
        [opened]="actionsTwoOpened()"
        (backdropClick)="actionsTwoOpened.set(false)"
      >
        <k-actions-group>
          <k-actions-label>Do something</k-actions-label>
          <k-actions-button
            [bold]="true"
            (clicked)="actionsTwoOpened.set(false)"
          >
            Button 1
          </k-actions-button>
          <k-actions-button (clicked)="actionsTwoOpened.set(false)">
            Button 2
          </k-actions-button>
        </k-actions-group>
        <k-actions-group>
          <k-actions-button (clicked)="actionsTwoOpened.set(false)">
            Cancel
          </k-actions-button>
        </k-actions-group>
      </k-actions>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionSheetComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly actionsOneOpened = signal(false);
  readonly actionsTwoOpened = signal(false);

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
