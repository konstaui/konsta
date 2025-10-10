import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KChipComponent } from '../../../../../../src/angular/components/chip.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';

@Component({
  selector: 'app-chips',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KChipComponent,
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
      <k-navbar title="Chips">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block-title>Chips With Text</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <k-chip class="m-0.5">Example Chip</k-chip>
        <k-chip class="m-0.5">Another Chip</k-chip>
        <k-chip class="m-0.5">One More Chip</k-chip>
        <k-chip class="m-0.5">Fourth Chip</k-chip>
        <k-chip class="m-0.5">Last One</k-chip>
      </k-block>

      <k-block-title>Outline Chips</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <k-chip [outline]="true" class="m-0.5">Example Chip</k-chip>
        <k-chip [outline]="true" class="m-0.5">Another Chip</k-chip>
        <k-chip [outline]="true" class="m-0.5">One More Chip</k-chip>
        <k-chip [outline]="true" class="m-0.5">Fourth Chip</k-chip>
        <k-chip [outline]="true" class="m-0.5">Last One</k-chip>
      </k-block>

      <k-block-title>Contact Chips</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <k-chip class="m-0.5">
          <img
            media
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"
          />
          Jane Doe
        </k-chip>
        <k-chip class="m-0.5">
          <img
            media
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-3.jpg"
          />
          John Doe
        </k-chip>
        <k-chip class="m-0.5">
          <img
            media
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
          Adam Smith
        </k-chip>
      </k-block>

      <k-block-title>Deletable Chips / Tags</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <k-chip class="m-0.5" [deleteButton]="true" (deleted)="handleDelete('Example Chip')">
          Example Chip
        </k-chip>
        <k-chip class="m-0.5" [deleteButton]="true" (deleted)="handleDelete('Adam Smith')">
          <img
            media
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
          Adam Smith
        </k-chip>
      </k-block>

      <k-block-title>Color Chips</k-block-title>
      <k-block [strong]="true" [inset]="true">
        <k-chip class="m-0.5" [colors]="{ fillBg: 'bg-red-500', fillText: 'text-white' }">
          Red Chip
        </k-chip>
        <k-chip class="m-0.5" [colors]="{ fillBg: 'bg-green-500', fillText: 'text-white' }">
          Green Chip
        </k-chip>
        <k-chip class="m-0.5" [colors]="{ fillBg: 'bg-blue-500', fillText: 'text-white' }">
          Blue Chip
        </k-chip>
        <k-chip class="m-0.5" [colors]="{ fillBg: 'bg-yellow-500', fillText: 'text-white' }">
          Yellow Chip
        </k-chip>
        <k-chip class="m-0.5" [colors]="{ fillBg: 'bg-pink-500', fillText: 'text-white' }">
          Pink Chip
        </k-chip>
        <k-chip
          class="m-0.5"
          [outline]="true"
          [colors]="{ outlineBorder: 'border-red-500', outlineText: 'text-red-500' }"
        >
          Red Chip
        </k-chip>
        <k-chip
          class="m-0.5"
          [outline]="true"
          [colors]="{ outlineBorder: 'border-green-500', outlineText: 'text-green-500' }"
        >
          Green Chip
        </k-chip>
        <k-chip
          class="m-0.5"
          [outline]="true"
          [colors]="{ outlineBorder: 'border-blue-500', outlineText: 'text-blue-500' }"
        >
          Blue Chip
        </k-chip>
        <k-chip
          class="m-0.5"
          [outline]="true"
          [colors]="{ outlineBorder: 'border-yellow-500', outlineText: 'text-yellow-500' }"
        >
          Yellow Chip
        </k-chip>
        <k-chip
          class="m-0.5"
          [outline]="true"
          [colors]="{ outlineBorder: 'border-pink-500', outlineText: 'text-pink-500' }"
        >
          Pink Chip
        </k-chip>
      </k-block>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  handleDelete(name: string) {
    if (typeof console !== 'undefined') {
      console.log(`Delete ${name}`);
    }
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
