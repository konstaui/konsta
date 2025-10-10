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
import { KSheetComponent } from '../../../../../../src/angular/components/sheet.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KToolbarComponent } from '../../../../../../src/angular/components/toolbar.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KToolbarPaneComponent } from '../../../../../../src/angular/components/toolbar-pane.component.js';
import { CloseIconComponent } from '../../components/close-icon.component.js';

@Component({
  selector: 'app-sheet-modal',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KSheetComponent,
    KBlockComponent,
    KButtonComponent,
    KToolbarComponent,
    KLinkComponent,
    KToolbarPaneComponent,
    CloseIconComponent,
  ],
  template: `
    <k-page>
      <k-navbar title="Sheet Modal">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Sheet Modals slide up from the bottom of the screen to reveal more
          content. Such modals allow to create custom overlays with custom
          content.
        </p>
        <p>
          <k-button [rounded]="true" (clicked)="sheetOpened.set(true)">
            Open Sheet
          </k-button>
        </p>
      </k-block>

      <k-sheet
        class="pb-safe"
        [opened]="sheetOpened()"
        (backdropClick)="sheetOpened.set(false)"
      >
        <k-toolbar [top]="true" class="justify-end ios:pt-4">
          <div class="ios:hidden"></div>
          <k-toolbar-pane>
            <k-link [iconOnly]="true" (clicked)="sheetOpened.set(false)">
              <app-close-icon></app-close-icon>
            </k-link>
          </k-toolbar-pane>
        </k-toolbar>
        <k-block>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
            excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
            necessitatibus, molestias cupiditate velit nihil alias incidunt,
            excepturi voluptatem dolore itaque sapiente dolores!
          </p>
          <div class="mt-4">
            <k-button [large]="true" [rounded]="true" (clicked)="sheetOpened.set(false)">
              Action
            </k-button>
          </div>
        </k-block>
      </k-sheet>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetModalComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly sheetOpened = signal(false);

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
