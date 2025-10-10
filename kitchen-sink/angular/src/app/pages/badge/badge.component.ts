import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KBadgeComponent } from '../../../../../../src/angular/components/badge.component.js';
import { KTabbarComponent } from '../../../../../../src/angular/components/tabbar.component.js';
import { KTabbarLinkComponent } from '../../../../../../src/angular/components/tabbar-link.component.js';
import { KToolbarPaneComponent } from '../../../../../../src/angular/components/toolbar-pane.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { DemoIconComponent } from '../../components/demo-icon.component.js';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KLinkComponent,
    KBadgeComponent,
    KTabbarComponent,
    KTabbarLinkComponent,
    KToolbarPaneComponent,
    KListComponent,
    KListItemComponent,
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
      <k-navbar title="Badge">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
        <k-link right [iconOnly]="true" component="button">
          <span class="relative inline-flex">
            <app-demo-icon class="block w-7 h-7" />
            <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-red-500' }">5</k-badge>
          </span>
        </k-link>
      </k-navbar>

      <k-tabbar [labels]="true" [icons]="true" class="left-0 bottom-0 fixed">
        <k-toolbar-pane>
          <k-tabbar-link [active]="true" [label]="'Inbox'">
            <span icon class="relative inline-flex">
              <app-demo-icon />
              <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-green-500' }">5</k-badge>
            </span>
          </k-tabbar-link>
          <k-tabbar-link [label]="'Calendar'">
            <span icon class="relative inline-flex">
              <app-demo-icon />
              <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-red-500' }">7</k-badge>
            </span>
          </k-tabbar-link>
          <k-tabbar-link [label]="'Upload'">
            <span icon class="relative inline-flex">
              <app-demo-icon />
              <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-red-500' }">1</k-badge>
            </span>
          </k-tabbar-link>
        </k-toolbar-pane>
      </k-tabbar>

      <k-list [strong]="true" [inset]="true">
        <k-list-item [title]="'Foo Bar'">
          <ng-container ngProjectAs="[media]">
            <app-demo-icon />
          </ng-container>
          <ng-container ngProjectAs="[after]">
            <k-badge [colors]="{ bg: 'bg-gray-500' }">0</k-badge>
          </ng-container>
        </k-list-item>

        <k-list-item [title]="'Ivan Petrov'">
          <ng-container ngProjectAs="[media]">
            <app-demo-icon />
          </ng-container>
          <ng-container ngProjectAs="[after]">
            <k-badge>CEO</k-badge>
          </ng-container>
        </k-list-item>

        <k-list-item [title]="'John Doe'">
          <ng-container ngProjectAs="[media]">
            <app-demo-icon />
          </ng-container>
          <ng-container ngProjectAs="[after]">
            <k-badge [colors]="{ bg: 'bg-green-500' }">5</k-badge>
          </ng-container>
        </k-list-item>

        <k-list-item [title]="'Jane Doe'">
          <ng-container ngProjectAs="[media]">
            <app-demo-icon />
          </ng-container>
          <ng-container ngProjectAs="[after]">
            <k-badge [colors]="{ bg: 'bg-yellow-500' }">NEW</k-badge>
          </ng-container>
        </k-list-item>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
