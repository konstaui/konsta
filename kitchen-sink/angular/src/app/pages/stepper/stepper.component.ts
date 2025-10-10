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
import { KStepperComponent } from '../../../../../../src/angular/components/stepper.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KStepperComponent,
    KListComponent,
    KListItemComponent,
  ],
  template: `
    <k-page>
      <k-navbar title="Stepper">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Shape and size</k-block-title>
      <k-block [strong]="true" [inset]="true" class="text-center space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Default</div>
            <k-stepper
              [value]="value()"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Round</div>
            <k-stepper
              [value]="value()"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Outline</div>
            <k-stepper
              [value]="value()"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Rounded Outline</div>
            <k-stepper
              [value]="value()"
              [outline]="true"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Small</div>
            <k-stepper
              [value]="value()"
              [small]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Small Round</div>
            <k-stepper
              [value]="value()"
              [small]="true"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Small Outline</div>
            <k-stepper
              [value]="value()"
              [small]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Small Rounded Outline</div>
            <k-stepper
              [value]="value()"
              [small]="true"
              [rounded]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Large</div>
            <k-stepper
              [value]="value()"
              [large]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Large Round</div>
            <k-stepper
              [value]="value()"
              [large]="true"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Large Outline</div>
            <k-stepper
              [value]="value()"
              [large]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Large Rounded Outline</div>
            <k-stepper
              [value]="value()"
              [large]="true"
              [rounded]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>
      </k-block>

      <k-block-title>Raised</k-block-title>
      <k-block [strong]="true" [inset]="true" class="text-center space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Default</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Round</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Outline</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Round Outline</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [outline]="true"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Small</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [small]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Small Round</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [small]="true"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Small Outline</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [small]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Small Rounded Outline</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [small]="true"
              [rounded]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Large</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [large]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Large Round</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [large]="true"
              [rounded]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="block text-xs mb-1">Large Outline</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [large]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <div class="block text-xs mb-1">Large Rounded Outline</div>
            <k-stepper
              [value]="value()"
              [raised]="true"
              [large]="true"
              [rounded]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>
      </k-block>

      <k-block-title>With Text Input</k-block-title>
      <k-block [strong]="true" [inset]="true" class="text-center space-y-4">
        <div>
          <k-stepper
            [value]="inputValue()"
            [input]="true"
            (input)="onInputChange($event)"
            (blur)="onInputBlur()"
            (plus)="increaseInput()"
            (minus)="decreaseInput()"
          ></k-stepper>
        </div>
        <div>
          <k-stepper
            [value]="inputValue()"
            [outline]="true"
            [input]="true"
            (input)="onInputChange($event)"
            (blur)="onInputBlur()"
            (plus)="increaseInput()"
            (minus)="decreaseInput()"
          ></k-stepper>
        </div>
      </k-block>

      <k-block-title>Only Buttons</k-block-title>
      <k-list [strong]="true" [inset]="true">
        <k-list-item [title]="'Value is ' + value()">
          <ng-container ngProjectAs="[after]">
            <k-stepper
              [value]="value()"
              [buttonsOnly]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </ng-container>
        </k-list-item>
        <k-list-item [title]="'Value is ' + value()">
          <ng-container ngProjectAs="[after]">
            <k-stepper
              [value]="value()"
              [buttonsOnly]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </ng-container>
        </k-list-item>
        <k-list-item [title]="'Value is ' + value()">
          <ng-container ngProjectAs="[after]">
            <k-stepper
              [value]="value()"
              [buttonsOnly]="true"
              [raised]="true"
              [outline]="true"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </ng-container>
        </k-list-item>
      </k-list>

      <k-block-title>Colors</k-block-title>
      <k-block [strong]="true" [inset]="true" class="text-center space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <k-stepper
              [value]="value()"
              class="k-color-brand-red"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <k-stepper
              [value]="value()"
              [rounded]="true"
              class="k-color-brand-green"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <k-stepper
              [value]="value()"
              class="k-color-brand-yellow"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
          <div>
            <k-stepper
              [value]="value()"
              [rounded]="true"
              class="k-color-brand-purple"
              (plus)="increase()"
              (minus)="decrease()"
            ></k-stepper>
          </div>
        </div>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly value = signal(1);
  readonly inputValue = signal(1);

  increase() {
    this.value.update((current) => current + 1);
  }

  decrease() {
    this.value.update((current) => (current - 1 < 0 ? 0 : current - 1));
  }

  increaseInput() {
    this.inputValue.update((current) => current + 1);
  }

  decreaseInput() {
    this.inputValue.update((current) => (current - 1 < 0 ? 0 : current - 1));
  }

  onInputChange(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.inputValue.set(Number.isNaN(value) ? 0 : value);
  }

  onInputBlur() {
    if (Number.isNaN(this.inputValue())) {
      this.inputValue.set(0);
    }
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
