import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, viewChild, TemplateRef } from '@angular/core';
import { useThemeSignal } from '../../../../../../src/angular/shared/theme-helpers.js';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KLinkComponent } from '../../../../../../src/angular/components/link.component.js';
import { KBadgeComponent } from '../../../../../../src/angular/components/badge.component.js';
import { KTabbarComponent } from '../../../../../../src/angular/components/tabbar.component.js';
import { KTabbarLinkComponent } from '../../../../../../src/angular/components/tabbar-link.component.js';
import { KToolbarPaneComponent } from '../../../../../../src/angular/components/toolbar-pane.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { DemoIconComponent } from '../../components/demo-icon.component';
const DEMO_ICON_SRC = '/demo-icon.png';

@Component({
  selector: 'app-badge',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KLinkComponent,
    KBadgeComponent,
    KTabbarComponent,
    KTabbarLinkComponent,
    KToolbarPaneComponent,
    KListComponent,
    KListItemComponent,
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
      <k-navbar title="Badge">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
        <k-link right [iconOnly]="true" component="button">
          <span class="relative inline-flex">
            <app-demo-icon class="block w-7 h-7" />
            <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-red-500' }">5</k-badge>
          </span>
        </k-link>
      </k-navbar>

      <k-tabbar [labels]="true" [icons]="true" class="left-0 bottom-0 fixed">
        <k-toolbar-pane>
          <k-tabbar-link
            [active]="true"
            [label]="'Inbox'"
            [icon]="inboxIconTpl"
          ></k-tabbar-link>
          <k-tabbar-link
            [label]="'Calendar'"
            [icon]="calendarIconTpl"
          ></k-tabbar-link>
          <k-tabbar-link
            [label]="'Upload'"
            [icon]="uploadIconTpl"
          ></k-tabbar-link>
        </k-toolbar-pane>
      </k-tabbar>

      <ng-template #inboxIconTpl>
        <span class="relative inline-flex">
          @if (isIos()) {
            <i class="f7-icons w-7 h-7">envelope_fill</i>
          } @else {
            <i class="f7-icons w-6 h-6">envelope_fill</i>
          }
          <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-green-500' }">5</k-badge>
        </span>
      </ng-template>

      <ng-template #calendarIconTpl>
        <span class="relative inline-flex">
          @if (isIos()) {
            <i class="f7-icons w-7 h-7">calendar</i>
          } @else {
            <i class="f7-icons w-6 h-6">calendar</i>
          }
          <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-red-500' }">7</k-badge>
        </span>
      </ng-template>

      <ng-template #uploadIconTpl>
        <span class="relative inline-flex">
          @if (isIos()) {
            <i class="f7-icons w-7 h-7">cloud_upload_fill</i>
          } @else {
            <i class="f7-icons w-6 h-6">cloud_upload_fill</i>
          }
          <k-badge class="absolute -top-1 -right-1" [colors]="{ bg: 'bg-red-500' }">1</k-badge>
        </span>
      </ng-template>

      <ng-template #demoIconTemplate>
        <img [src]="demoIconSrc" alt="Demo icon" class="ios:w-7 material:w-6" />
      </ng-template>

      <ng-template #badge0>
        <k-badge [colors]="{ bg: 'bg-gray-500' }">0</k-badge>
      </ng-template>

      <ng-template #badgeCEO>
        <k-badge>CEO</k-badge>
      </ng-template>

      <ng-template #badge5>
        <k-badge [colors]="{ bg: 'bg-green-500' }">5</k-badge>
      </ng-template>

      <ng-template #badgeNEW>
        <k-badge [colors]="{ bg: 'bg-yellow-500' }">NEW</k-badge>
      </ng-template>

      <k-list [strong]="true" [inset]="true">
        <k-list-item [title]="'Foo Bar'" [media]="demoIconTemplate" [after]="badge0" />
        <k-list-item [title]="'Ivan Petrov'" [media]="demoIconTemplate" [after]="badgeCEO" />
        <k-list-item [title]="'John Doe'" [media]="demoIconTemplate" [after]="badge5" />
        <k-list-item [title]="'Jane Doe'" [media]="demoIconTemplate" [after]="badgeNEW" />
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  private readonly theme = useThemeSignal();

  readonly demoIconSrc = DEMO_ICON_SRC;
  readonly inboxIconTpl = viewChild<TemplateRef<any>>('inboxIconTpl');
  readonly calendarIconTpl = viewChild<TemplateRef<any>>('calendarIconTpl');
  readonly uploadIconTpl = viewChild<TemplateRef<any>>('uploadIconTpl');
  readonly demoIconTemplate = viewChild<TemplateRef<any>>('demoIconTemplate');
  readonly badge0 = viewChild<TemplateRef<any>>('badge0');
  readonly badgeCEO = viewChild<TemplateRef<any>>('badgeCEO');
  readonly badge5 = viewChild<TemplateRef<any>>('badge5');
  readonly badgeNEW = viewChild<TemplateRef<any>>('badgeNEW');

  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly isIos = computed(() => this.theme() === 'ios');

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
