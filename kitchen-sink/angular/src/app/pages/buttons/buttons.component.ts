import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KButtonComponent } from '../../../../../../src/angular/components/button.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';

@Component({
  selector: 'app-buttons',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KButtonComponent,
    KBlockComponent,
    KBlockTitleComponent,
  ],
  styles: [':host { display: contents; }'],
  template: `
    <k-page>
      <k-navbar title="Buttons">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block-title>Default Buttons</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-2">
        <div class="grid grid-cols-3 gap-x-4">
          <k-button>Button</k-button>
          <k-button class="k-color-brand-red">Button</k-button>
          <k-button>Button</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [outline]="true">Outline</k-button>
          <k-button [outline]="true" class="k-color-brand-red">
            Outline
          </k-button>
          <k-button [outline]="true">Outline</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [clear]="true">Clear</k-button>
          <k-button [clear]="true" class="k-color-brand-red">Clear</k-button>
          <k-button [clear]="true">Clear</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [tonal]="true">Tonal</k-button>
          <k-button [tonal]="true" class="k-color-brand-red">Tonal</k-button>
          <k-button [tonal]="true">Tonal</k-button>
        </div>
      </k-block>

      <k-block-title>Rounded Buttons</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-2">
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [rounded]="true">Button</k-button>
          <k-button [rounded]="true" class="k-color-brand-green">Button</k-button>
          <k-button [rounded]="true">Button</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [rounded]="true" [outline]="true">Outline</k-button>
          <k-button
            [rounded]="true"
            [outline]="true"
            class="k-color-brand-green"
          >
            Outline
          </k-button>
          <k-button [rounded]="true" [outline]="true">Outline</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [rounded]="true" [clear]="true">Clear</k-button>
          <k-button
            [rounded]="true"
            [clear]="true"
            class="k-color-brand-green"
          >
            Clear
          </k-button>
          <k-button [rounded]="true" [clear]="true">Clear</k-button>
        </div>
      </k-block>

      <k-block-title>Large Buttons</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-2">
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [large]="true">Button</k-button>
          <k-button [large]="true" class="k-color-brand-yellow">Button</k-button>
          <k-button [large]="true" [rounded]="true">Button</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [large]="true" [outline]="true">Outline</k-button>
          <k-button
            [large]="true"
            [outline]="true"
            class="k-color-brand-yellow"
          >
            Outline
          </k-button>
          <k-button [large]="true" [rounded]="true" [outline]="true">
            Outline
          </k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [large]="true" [clear]="true">Clear</k-button>
          <k-button
            [large]="true"
            [clear]="true"
            class="k-color-brand-yellow"
          >
            Clear
          </k-button>
          <k-button [large]="true" [rounded]="true" [clear]="true">
            Clear
          </k-button>
        </div>
      </k-block>

      <k-block-title>Small Buttons</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-2">
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [small]="true">Button</k-button>
          <k-button [small]="true">Button</k-button>
          <k-button [small]="true" [rounded]="true">Button</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [small]="true" [outline]="true">Outline</k-button>
          <k-button [small]="true" [outline]="true">Outline</k-button>
          <k-button [small]="true" [rounded]="true" [outline]="true">
            Outline
          </k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [small]="true" [clear]="true">Clear</k-button>
          <k-button [small]="true" [clear]="true">Clear</k-button>
          <k-button [small]="true" [rounded]="true" [clear]="true">
            Clear
          </k-button>
        </div>
      </k-block>

      <k-block-title>Raised Buttons</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-2">
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [raised]="true">Button</k-button>
          <k-button [raised]="true">Button</k-button>
          <k-button [raised]="true" [rounded]="true">Button</k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [raised]="true" [outline]="true">Outline</k-button>
          <k-button [raised]="true" [outline]="true">Outline</k-button>
          <k-button [raised]="true" [rounded]="true" [outline]="true">
            Outline
          </k-button>
        </div>
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [raised]="true" [clear]="true">Clear</k-button>
          <k-button [raised]="true" [clear]="true">Clear</k-button>
          <k-button [raised]="true" [rounded]="true" [clear]="true">
            Clear
          </k-button>
        </div>
      </k-block>

      <k-block-title>Disabled Buttons</k-block-title>
      <k-block [strong]="true" [inset]="true" class="space-y-2">
        <div class="grid grid-cols-3 gap-x-4">
          <k-button [disabled]="true">Button</k-button>
          <k-button [disabled]="true" [outline]="true">Outline</k-button>
          <k-button [disabled]="true" [clear]="true">Clear</k-button>
        </div>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent {
  readonly isPreview = computed(() =>
    typeof document !== 'undefined' &&
    document.location.href.includes('examplePreview')
  );

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
