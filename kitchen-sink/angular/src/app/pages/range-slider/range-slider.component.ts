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
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KBlockHeaderComponent } from '../../../../../../src/angular/components/block-header.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KRangeComponent } from '../../../../../../src/angular/components/range.component.js';

@Component({
  selector: 'app-range-slider',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockTitleComponent,
    KBlockHeaderComponent,
    KListComponent,
    KListItemComponent,
    KRangeComponent,
  ],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    <ng-template #volumeInner>
      <span>0</span>
      <k-range
        class="flex-1"
        [value]="volume()"
        [step]="10"
        (input)="onVolumeInput($event)"
      ></k-range>
      <span>100</span>
    </ng-template>

    <ng-template #priceInner>
      <span>$0</span>
      <k-range
        class="flex-1"
        [value]="price()"
        [step]="1"
        [min]="0"
        [max]="1000"
        (input)="onPriceInput($event)"
      ></k-range>
      <span>$1000</span>
    </ng-template>

    <ng-template #redInner>
      <k-range
        class="flex-1 k-color-brand-red"
        [value]="red()"
        [step]="1"
        [min]="0"
        [max]="255"
        (input)="onColorInput($event, 'red')"
      ></k-range>
    </ng-template>

    <ng-template #greenInner>
      <k-range
        class="flex-1 k-color-brand-green"
        [value]="green()"
        [step]="1"
        [min]="0"
        [max]="255"
        (input)="onColorInput($event, 'green')"
      ></k-range>
    </ng-template>

    <ng-template #blueInner>
      <k-range
        class="flex-1 k-color-brand-blue"
        [value]="blue()"
        [step]="1"
        [min]="0"
        [max]="255"
        (input)="onColorInput($event, 'blue')"
      ></k-range>
    </ng-template>

    <k-page>
      <k-navbar title="Range Slider">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block-title>Volume: {{ volume() }}</k-block-title>
      <k-block-header>From 0 to 100 with step 10</k-block-header>
      <k-list [strong]="true" [inset]="true">
        <k-list-item
          [inner]="volumeInner"
          [innerClassName]="'flex gap-4 items-center'"
        ></k-list-item>
      </k-list>

      <k-block-title>
        Price: $
        <span>{{ price() }}</span>
      </k-block-title>
      <k-block-header>From 0 to 1000 with step 1</k-block-header>
      <k-list [strong]="true" [inset]="true">
        <k-list-item
          [inner]="priceInner"
          [innerClassName]="'flex gap-4 items-center'"
        ></k-list-item>
      </k-list>

      <k-block-title>
        Color: rgb({{ red() }}, {{ green() }}, {{ blue() }})
      </k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item
          [inner]="redInner"
          [innerClassName]="'flex items-center'"
        ></k-list-item>
        <k-list-item
          [inner]="greenInner"
          [innerClassName]="'flex items-center'"
        ></k-list-item>
        <k-list-item
          [inner]="blueInner"
          [innerClassName]="'flex items-center'"
        ></k-list-item>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeSliderComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly volume = signal(50);
  readonly price = signal(150);
  readonly red = signal(100);
  readonly green = signal(50);
  readonly blue = signal(75);

  onVolumeInput(event: Event) {
    this.volume.set(this.eventValue(event));
  }

  onPriceInput(event: Event) {
    this.price.set(this.eventValue(event));
  }

  onColorInput(event: Event, channel: 'red' | 'green' | 'blue') {
    const value = this.eventValue(event);
    if (channel === 'red') this.red.set(value);
    if (channel === 'green') this.green.set(value);
    if (channel === 'blue') this.blue.set(value);
  }

  private eventValue(event: Event) {
    const target = event.target as HTMLInputElement;
    const numeric = Number(target.value);
    return Number.isNaN(numeric) ? 0 : numeric;
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
