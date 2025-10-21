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
import { KMenuListComponent } from '../../../../../../src/angular/components/menu-list.component.js';
import { KMenuListItemComponent } from '../../../../../../src/angular/components/menu-list-item.component.js';
import { DemoIconComponent } from '../../components/demo-icon.component.js';

@Component({
  selector: 'app-menu-list',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KMenuListComponent,
    KMenuListItemComponent,
    DemoIconComponent,
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
      <k-navbar title="Menu List">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-block [strong]="true" [inset]="true" class="space-y-4">
        <p>
          Menu list unlike usual links list is designed to indicate currently
          active screen (or section) of your app. Think about it like a Tabbar
          but in a form of a list.
        </p>
      </k-block>

      <k-menu-list [strongIos]="true" [outlineIos]="true">
        <ng-template #mediaIcon>
          <app-demo-icon />
        </ng-template>

        <k-menu-list-item
          [title]="'Home'"
          [active]="selected() === 'home'"
          (click)="selected.set('home')"
          [media]="mediaIcon"
        />
        <k-menu-list-item
          [title]="'Profile'"
          [active]="selected() === 'profile'"
          (click)="selected.set('profile')"
          [media]="mediaIcon"
        />
        <k-menu-list-item
          [title]="'Settings'"
          [active]="selected() === 'settings'"
          (click)="selected.set('settings')"
          [media]="mediaIcon"
        />
      </k-menu-list>

      <k-menu-list [strongIos]="true" [outlineIos]="true">
        <ng-template #mediaIcon2>
          <app-demo-icon />
        </ng-template>

        <k-menu-list-item
          [title]="'Home'"
          [subtitle]="'Home subtitle'"
          [active]="selectedMedia() === 'home'"
          (click)="selectedMedia.set('home')"
          [media]="mediaIcon2"
        />
        <k-menu-list-item
          [title]="'Profile'"
          [subtitle]="'Profile subtitle'"
          [active]="selectedMedia() === 'profile'"
          (click)="selectedMedia.set('profile')"
          [media]="mediaIcon2"
        />
        <k-menu-list-item
          [title]="'Settings'"
          [subtitle]="'Settings subtitle'"
          [active]="selectedMedia() === 'settings'"
          (click)="selectedMedia.set('settings')"
          [media]="mediaIcon2"
        />
      </k-menu-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly selected = signal<'home' | 'profile' | 'settings'>('home');
  readonly selectedMedia = signal<'home' | 'profile' | 'settings'>('home');

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
