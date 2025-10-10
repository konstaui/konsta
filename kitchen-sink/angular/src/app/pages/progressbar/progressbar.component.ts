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
import { KProgressbarComponent } from '../../../../../../src/angular/components/progressbar.component.js';
import { KSegmentedComponent } from '../../../../../../src/angular/components/segmented.component.js';
import { KSegmentedButtonComponent } from '../../../../../../src/angular/components/segmented-button.component.js';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KProgressbarComponent,
    KSegmentedComponent,
    KSegmentedButtonComponent,
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
      <k-navbar title="Progressbar">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Determinate Progress Bar</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <div class="my-4">
          <k-progressbar [progress]="progress()"></k-progressbar>
        </div>
        <k-segmented [strongIos]="true" [outlineMaterial]="true" [roundedIos]="true">
          <k-segmented-button
            [active]="progress() === 0.1"
            (pressed)="setProgress(0.1)"
          >
            10%
          </k-segmented-button>
          <k-segmented-button
            [active]="progress() === 0.3"
            (pressed)="setProgress(0.3)"
          >
            30%
          </k-segmented-button>
          <k-segmented-button
            [active]="progress() === 0.5"
            (pressed)="setProgress(0.5)"
          >
            50%
          </k-segmented-button>
          <k-segmented-button
            [active]="progress() === 1"
            (pressed)="setProgress(1)"
          >
            100%
          </k-segmented-button>
        </k-segmented>
      </k-block>

      <k-block-title>Colors</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <k-progressbar class="k-color-brand-red" [progress]="0.25"></k-progressbar>
        <k-progressbar class="k-color-brand-green" [progress]="0.5"></k-progressbar>
        <k-progressbar class="k-color-brand-yellow" [progress]="0.75"></k-progressbar>
        <k-progressbar class="k-color-brand-purple" [progress]="1"></k-progressbar>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressbarComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly progress = signal(0.1);

  setProgress(value: number) {
    this.progress.set(value);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
