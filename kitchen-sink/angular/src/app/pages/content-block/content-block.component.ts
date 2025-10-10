import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockHeaderComponent } from '../../../../../../src/angular/components/block-header.component.js';
import { KBlockFooterComponent } from '../../../../../../src/angular/components/block-footer.component.js';

@Component({
  selector: 'app-content-block',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KBlockHeaderComponent,
    KBlockFooterComponent,
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
      <k-navbar title="Content Block">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Block Title</k-block-title>
      <k-block>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>

      <k-block-title>Strong Block</k-block-title>
      <k-block [strong]="true">
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>

      <k-block-title>Strong Outline Block</k-block-title>
      <k-block [strong]="true" [outline]="true">
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>

      <k-block-title>Strong Inset Block</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>

      <k-block-title>Strong Inset Outline Block</k-block-title>
      <k-block [strong]="true" [inset]="true" [outline]="true">
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>

      <k-block-title>With Header & Footer</k-block-title>
      <k-block-header>Header</k-block-header>
      <k-block [strong]="true" [outline]="true">
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>
      <k-block-footer>Footer</k-block-footer>

      <k-block-title [medium]="true">Medium Title</k-block-title>
      <k-block [strong]="true" [outline]="true">
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>

      <k-block-title [large]="true">Large Title</k-block-title>
      <k-block [strong]="true" [outline]="true">
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.
        </p>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentBlockComponent {
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
