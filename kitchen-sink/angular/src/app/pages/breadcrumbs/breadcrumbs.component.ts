import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockHeaderComponent } from '../../../../../../src/angular/components/block-header.component.js';
import { KBreadcrumbsComponent } from '../../../../../../src/angular/components/breadcrumbs.component.js';
import { KBreadcrumbsItemComponent } from '../../../../../../src/angular/components/breadcrumbs-item.component.js';
import { KBreadcrumbsSeparatorComponent } from '../../../../../../src/angular/components/breadcrumbs-separator.component.js';
import { KBreadcrumbsCollapsedComponent } from '../../../../../../src/angular/components/breadcrumbs-collapsed.component.js';
import { KPopoverComponent } from '../../../../../../src/angular/components/popover.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KBlockHeaderComponent,
    KBreadcrumbsComponent,
    KBreadcrumbsItemComponent,
    KBreadcrumbsSeparatorComponent,
    KBreadcrumbsCollapsedComponent,
    KPopoverComponent,
    KListComponent,
    KListItemComponent,
    KLinkComponent,
  ],
  styles: [
    `
      :host {
        display: contents;
      }

      :host ::ng-deep .breadcrumbs-popover {
        width: 120px;
      }
    `,
  ],
  template: `
    <k-page>
      <k-navbar title="Breadcrumbs">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block [strong]="true" [inset]="true">
        Breadcrumbs allow users to keep track and maintain awareness of their
        locations within the app or website. They should be used for large sites
        and apps with hierarchically arranged pages.
      </k-block>

      <k-block-title>Basic</k-block-title>
      <k-block [strong]="true" [outline]="true">
        <k-breadcrumbs>
          <k-breadcrumbs-item>
            <k-link component="button">Home</k-link>
          </k-breadcrumbs-item>
          <k-breadcrumbs-separator></k-breadcrumbs-separator>
          <k-breadcrumbs-item>
            <k-link component="button">Catalog</k-link>
          </k-breadcrumbs-item>
          <k-breadcrumbs-item [active]="true">
            <k-link component="button">iPhone 12</k-link>
          </k-breadcrumbs-item>
        </k-breadcrumbs>
      </k-block>

      <k-block-title>Scrollable</k-block-title>
      <k-block-header>
        Breadcrumbs will be scrollable if they don't fit the screen
      </k-block-header>
      <k-block [strong]="true" [outline]="true">
        <k-breadcrumbs>
          <k-breadcrumbs-item>
            <k-link component="button">Home</k-link>
          </k-breadcrumbs-item>
          <k-breadcrumbs-separator></k-breadcrumbs-separator>
          <k-breadcrumbs-item>
            <k-link component="button">Catalog</k-link>
          </k-breadcrumbs-item>
          <k-breadcrumbs-separator></k-breadcrumbs-separator>
          <k-breadcrumbs-item>
            <k-link component="button">Phones</k-link>
          </k-breadcrumbs-item>
          <k-breadcrumbs-separator></k-breadcrumbs-separator>
          <k-breadcrumbs-item>
            <k-link component="button">Apple</k-link>
          </k-breadcrumbs-item>
          <k-breadcrumbs-separator></k-breadcrumbs-separator>
          <k-breadcrumbs-item [active]="true">
            iPhone 12
          </k-breadcrumbs-item>
        </k-breadcrumbs>
      </k-block>

      <k-block-title>Collapsed</k-block-title>
      <k-block [strong]="true" [outline]="true">
        <k-breadcrumbs>
          <k-breadcrumbs-item>
            <k-link component="button">Home</k-link>
          </k-breadcrumbs-item>
          <k-breadcrumbs-separator></k-breadcrumbs-separator>
          <k-breadcrumbs-collapsed
            class="breadcrumbs-collapsed-trigger"
            (clicked)="openPopover()"
          ></k-breadcrumbs-collapsed>
          <k-breadcrumbs-separator></k-breadcrumbs-separator>
          <k-breadcrumbs-item [active]="true">iPhone 12</k-breadcrumbs-item>
        </k-breadcrumbs>
      </k-block>

      <k-popover
        class="breadcrumbs-popover"
        [opened]="popoverOpened()"
        target=".breadcrumbs-collapsed-trigger"
        (backdropClick)="closePopover()"
      >
        <k-list [nested]="true">
          <k-list-item [link]="true" [title]="'Catalog'" (click)="closePopover()"></k-list-item>
          <k-list-item [link]="true" [title]="'Phones'" (click)="closePopover()"></k-list-item>
          <k-list-item [link]="true" [title]="'Apple'" (click)="closePopover()"></k-list-item>
        </k-list>
      </k-popover>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly popoverOpened = signal(false);

  openPopover() {
    this.popoverOpened.set(true);
  }

  closePopover() {
    this.popoverOpened.set(false);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
