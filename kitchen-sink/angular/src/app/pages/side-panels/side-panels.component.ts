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
import { KPanelComponent } from '../../../../../../src/angular/components/panel.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { CloseIconComponent } from '../../components/close-icon.component.js';

@Component({
  selector: 'app-side-panels',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KPanelComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KButtonComponent,
    KLinkComponent,
    CloseIconComponent,
  ],
  template: `
    <k-page>
      <k-navbar title="Panel / Side Panel">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Konsta UI comes with 2 panels (on left and on right), both are
          optional. You can put absolutely anything inside: data lists, forms,
          custom content, etc.
        </p>
      </k-block>
      <k-block [strong]="true" [inset]="true" class="flex space-x-4 rtl:space-x-reverse">
        <k-button [rounded]="true" (clicked)="leftPanelOpened.set(true)">
          Left Panel
        </k-button>
        <k-button [rounded]="true" (clicked)="rightPanelOpened.set(true)">
          Right Panel
        </k-button>
      </k-block>

      <k-block-title>Floating Panels</k-block-title>
      <k-block [strong]="true" [inset]="true" class="flex space-x-4 rtl:space-x-reverse">
        <k-button [rounded]="true" (clicked)="leftFloatingPanelOpened.set(true)">
          Left Panel
        </k-button>
        <k-button [rounded]="true" (clicked)="rightFloatingPanelOpened.set(true)">
          Right Panel
        </k-button>
      </k-block>

      <k-panel
        side="left"
        [opened]="leftPanelOpened()"
        (backdropClick)="leftPanelOpened.set(false)"
      >
        <k-page>
          <k-navbar title="Left Panel">
            <k-link [iconOnly]="true" right (clicked)="leftPanelOpened.set(false)">
              <app-close-icon></app-close-icon>
            </k-link>
          </k-navbar>
          <k-block class="space-y-4">
            <p>Here comes left panel.</p>
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
          </k-block>
        </k-page>
      </k-panel>

      <k-panel
        side="right"
        [opened]="rightPanelOpened()"
        (backdropClick)="rightPanelOpened.set(false)"
      >
        <k-page>
          <k-navbar title="Right Panel">
            <k-link [iconOnly]="true" right (clicked)="rightPanelOpened.set(false)">
              <app-close-icon></app-close-icon>
            </k-link>
          </k-navbar>
          <k-block class="space-y-4">
            <p>Here comes right panel.</p>
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
      </k-panel>

      <k-panel
        side="left"
        [floating]="true"
        [opened]="leftFloatingPanelOpened()"
        (backdropClick)="leftFloatingPanelOpened.set(false)"
      >
        <k-page
          [colors]="{ bgIos: 'bg-transparent' }"
          class="no-safe-areas-top no-safe-areas-bottom"
        >
          <k-navbar title="Left Panel">
            <k-link [iconOnly]="true" right (clicked)="leftFloatingPanelOpened.set(false)">
              <app-close-icon></app-close-icon>
            </k-link>
          </k-navbar>
          <k-block class="space-y-4">
            <p>Here comes left panel.</p>
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
          </k-block>
        </k-page>
      </k-panel>

      <k-panel
        side="right"
        [floating]="true"
        [opened]="rightFloatingPanelOpened()"
        (backdropClick)="rightFloatingPanelOpened.set(false)"
      >
        <k-page
          [colors]="{ bgIos: 'bg-transparent' }"
          class="no-safe-areas-top no-safe-areas-bottom"
        >
          <k-navbar title="Right Panel">
            <k-link [iconOnly]="true" right (clicked)="rightFloatingPanelOpened.set(false)">
              <app-close-icon></app-close-icon>
            </k-link>
          </k-navbar>
          <k-block class="space-y-4">
            <p>Here comes right panel.</p>
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
      </k-panel>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePanelsComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly leftPanelOpened = signal(false);
  readonly rightPanelOpened = signal(false);
  readonly leftFloatingPanelOpened = signal(false);
  readonly rightFloatingPanelOpened = signal(false);

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
