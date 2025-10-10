import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListButtonComponent } from '../../../../../../src/angular/components/list-button.component.js';

@Component({
  selector: 'app-list-button',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KListComponent,
    KListButtonComponent,
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
      <k-navbar title="List Button">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-list [strong]="true" [outline]="true">
        <k-list-button>Button 1</k-list-button>
        <k-list-button>Button 2</k-list-button>
        <k-list-button>Button 3</k-list-button>
      </k-list>

      <k-list [strong]="true" [inset]="true">
        <k-list-button>Button 1</k-list-button>
        <k-list-button>Button 2</k-list-button>
        <k-list-button>Button 3</k-list-button>
      </k-list>

      <k-list [strong]="true" [inset]="true">
        <k-list-button class="k-color-brand-red">Red Button</k-list-button>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListButtonComponent {
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
