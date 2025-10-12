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
import { KPopupComponent } from '../../../../../../src/angular/components/popup.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KCloseIconComponent } from '../../../../../../src/angular/components/icons/close-icon.component.js';

@Component({
  selector: 'app-popup',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KPopupComponent,
    KBlockComponent,
    KLinkComponent,
    KButtonComponent,
    KCloseIconComponent,
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
      <k-navbar title="Popup">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Popup is a modal window with any HTML content that pops up over App's
          main content. Popup as all other overlays is part of so called
          "Temporary Views".
        </p>
        <p>
          <k-button [rounded]="true" (clicked)="popupOpened.set(true)">
            Open Popup
          </k-button>
        </p>
      </k-block>

      <k-popup
        [opened]="popupOpened()"
        (backdropClick)="popupOpened.set(false)"
      >
        <k-page>
          <k-navbar title="Popup">
            <k-link
              right
              [iconOnly]="true"
              (clicked)="popupOpened.set(false)"
            >
              <k-close-icon />
            </k-link>
          </k-navbar>
          <k-block [strong]="true" [inset]="true" class="space-y-4">
            <p>
              Here comes popup. You can put here anything, even independent view
              with its own navigation. Also note that by default popup looks a
              bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut
              leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in
              lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam
              lacinia venenatis dignissim. Suspendisse non nisl semper tellus
              malesuada suscipit eu et eros. Nulla eu enim quis quam elementum
              vulputate. Mauris ornare consequat nunc viverra pellentesque.
              Aenean semper eu massa sit amet aliquam. Integer et neque sed
              libero mollis elementum at vitae ligula. Vestibulum pharetra sed
              libero sed porttitor. Suspendisse a faucibus lectus.
            </p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula.
              Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor
              nibh, suscipit in consequat vel, feugiat sed quam. Nam risus
              libero, auctor vel tristique ac, malesuada ut ante. Sed molestie,
              est in eleifend sagittis, leo tortor ullamcorper erat, at
              vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis
              bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at
              urna. Pellentesque tempor congue massa quis faucibus. Vestibulum
              nunc eros, convallis blandit dui sit amet, gravida adipiscing
              libero.
            </p>
          </k-block>
        </k-page>
      </k-popup>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly popupOpened = signal(false);

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
