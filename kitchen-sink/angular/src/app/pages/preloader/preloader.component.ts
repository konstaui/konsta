import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KPreloaderComponent } from '../../../../../../src/angular/components/preloader.component.js';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KPreloaderComponent,
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
      <k-navbar title="Preloader">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Default</k-block-title>
      <k-block [strong]="true" [inset]="true" class="text-center">
        <k-preloader></k-preloader>
      </k-block>

      <k-block-title>Colors</k-block-title>
      <k-block [strong]="true" [inset]="true" class="grid grid-cols-4">
        <div class="text-center">
          <k-preloader class="k-color-brand-red"></k-preloader>
        </div>
        <div class="text-center">
          <k-preloader class="k-color-brand-green"></k-preloader>
        </div>
        <div class="text-center">
          <k-preloader class="k-color-brand-purple"></k-preloader>
        </div>
        <div class="text-center">
          <k-preloader class="k-color-brand-yellow"></k-preloader>
        </div>
      </k-block>

      <k-block-title>Sizes</k-block-title>
      <k-block
        [strong]="true"
        [insetMaterial]="true"
        [outlineIos]="true"
        class="grid grid-cols-4 items-center"
      >
        <div class="text-center">
          <k-preloader class="w-4 h-4"></k-preloader>
        </div>
        <div class="text-center">
          <k-preloader class="w-8 h-8"></k-preloader>
        </div>
        <div class="text-center">
          <k-preloader class="w-12 h-12"></k-preloader>
        </div>
        <div class="text-center">
          <k-preloader class="w-16 h-16"></k-preloader>
        </div>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreloaderComponent {
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
