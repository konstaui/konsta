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
import { KSegmentedComponent } from '../../../../../../src/angular/components/segmented.component.js';
import { KSegmentedButtonComponent } from '../../../../../../src/angular/components/segmented-button.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';

@Component({
  selector: 'app-segmented-control',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KSegmentedComponent,
    KSegmentedButtonComponent,
    KBlockComponent,
    KBlockTitleComponent,
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
      <k-navbar title="Segmented Control">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Default Segmented</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <k-segmented>
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>

        <k-segmented [rounded]="true">
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>
      </k-block>

      <k-block-title>Raised Segmented</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <k-segmented [raised]="true">
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>
        <k-segmented [raised]="true" [rounded]="true">
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>
      </k-block>

      <k-block-title>Outline</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <k-segmented [outline]="true">
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>
        <k-segmented [rounded]="true" [outline]="true">
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>
      </k-block>

      <k-block-title>Strong Segmented</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <k-segmented [strong]="true">
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>

        <k-segmented [strong]="true" [rounded]="true">
          <k-segmented-button
            *ngFor="let id of segmentIds"
            [active]="activeSegment() === id"
            (pressed)="setActive(id)"
          >
            Button
          </k-segmented-button>
        </k-segmented>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedControlComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly segmentIds: ReadonlyArray<number> = [1, 2, 3];
  readonly activeSegment = signal(1);

  setActive(id: number) {
    this.activeSegment.set(id);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
