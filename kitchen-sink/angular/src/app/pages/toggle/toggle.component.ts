import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KToggleComponent } from '../../../../../../src/angular/components/toggle.component.js';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KListComponent,
    KListItemComponent,
    KToggleComponent,
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
      <k-navbar title="Toggle">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-list [strong]="true" [inset]="true">
        <k-list-item [label]="true" [title]="'Item 1'">
          <ng-container ngProjectAs="[after]">
            <k-toggle
              component="div"
              class="-my-1"
              [checked]="checked1()"
              (changed)="toggleSignal(checked1)"
            ></k-toggle>
          </ng-container>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Item 2'">
          <ng-container ngProjectAs="[after]">
            <k-toggle
              component="div"
              class="-my-1 k-color-brand-red"
              [checked]="checked2()"
              (changed)="toggleSignal(checked2)"
            ></k-toggle>
          </ng-container>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Item 3'">
          <ng-container ngProjectAs="[after]">
            <k-toggle
              component="div"
              class="-my-1 k-color-brand-green"
              [checked]="checked3()"
              (changed)="toggleSignal(checked3)"
            ></k-toggle>
          </ng-container>
        </k-list-item>
        <k-list-item [label]="true" [title]="'Item 4'">
          <ng-container ngProjectAs="[after]">
            <k-toggle
              component="div"
              class="-my-1 k-color-brand-yellow"
              [checked]="checked4()"
              (changed)="toggleSignal(checked4)"
            ></k-toggle>
          </ng-container>
        </k-list-item>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly checked1 = signal(true);
  readonly checked2 = signal(true);
  readonly checked3 = signal(true);
  readonly checked4 = signal(true);

  toggleSignal(target: WritableSignal<boolean>) {
    target.update((value) => !value);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
