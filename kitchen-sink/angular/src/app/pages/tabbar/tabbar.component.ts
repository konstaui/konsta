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
import { KTabbarComponent } from '../../../../../../src/angular/components/tabbar.component.js';
import { KTabbarLinkComponent } from '../../../../../../src/angular/components/tabbar-link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KIconComponent } from '../../../../../../src/angular/components/icon.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';
import { KToggleComponent } from '../../../../../../src/angular/components/toggle.component.js';
import { KToolbarPaneComponent } from '../../../../../../src/angular/components/toolbar-pane.component.js';

interface TabDescriptor {
  readonly id: string;
  readonly title: string;
  readonly iosPath: string;
  readonly materialPath: string;
}

@Component({
  selector: 'app-tabbar',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KTabbarComponent,
    KTabbarLinkComponent,
    KBlockComponent,
    KIconComponent,
    KListComponent,
    KListItemComponent,
    KToggleComponent,
    KToolbarPaneComponent,
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
      <k-navbar title="Tabbar">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-tabbar
        class="left-0 bottom-0 fixed"
        [labels]="showLabels()"
        [icons]="showIcons()"
      >
        <k-tabbar-link
          [active]="activeTab() === 'tab-1'"
          [label]="showLabels() ? 'Tab 1' : ''"
          (clicked)="setActiveTab('tab-1')"
        >
          @if (showIcons()) {
            <k-icon icon component="span">
              <svg
                ios
                class="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.25 4C2.11193 4 2 4.11193 2 4.25V19.75C2 19.8881 2.11193 20 2.25 20H21.75C21.8881 20 22 19.8881 22 19.75V7.25C22 7.11193 21.8881 7 21.75 7H12.25C12.1119 7 12 6.88807 12 6.75V4.25C12 4.11193 11.8881 4 11.75 4H2.25ZM1 4.25C1 3.55964 1.55964 3 2.25 3H11.75C12.4404 3 13 3.55964 13 4.25V6H21.75C22.4404 6 23 6.55964 23 7.25V19.75C23 20.4404 22.4404 21 21.75 21H2.25C1.55964 21 1 20.4404 1 19.75V4.25ZM5.75 7.5C5.61193 7.5 5.5 7.61193 5.5 7.75V8.25C5.5 8.38807 5.61193 8.5 5.75 8.5H18.25C18.3881 8.5 18.5 8.38807 18.5 8.25V7.75C18.5 7.61193 18.3881 7.5 18.25 7.5H5.75Z" />
              </svg>
              <svg
                material
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 14H4V8h16v10Zm0-12H4V6h16v-2Z" />
              </svg>
            </k-icon>
          }
        </k-tabbar-link>
        <k-tabbar-link
          [active]="activeTab() === 'tab-2'"
          [label]="showLabels() ? 'Tab 2' : ''"
          (clicked)="setActiveTab('tab-2')"
        >
          @if (showIcons()) {
            <k-icon icon component="span">
              <svg
                ios
                class="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2.75C6 2.33579 6.33579 2 6.75 2H17.25C17.6642 2 18 2.33579 18 2.75V5H20.25C20.6642 5 21 5.33579 21 5.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V5.75C3 5.33579 3.33579 5 3.75 5H6V2.75ZM7 5H17V3H7V5ZM4 6V20H20V6H4Z" />
              </svg>
              <svg
                material
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 17H4V8h16v12Zm0-14H4V5h16v1Z" />
              </svg>
            </k-icon>
          }
        </k-tabbar-link>
        <k-tabbar-link
          [active]="activeTab() === 'tab-3'"
          [label]="showLabels() ? 'Tab 3' : ''"
          (clicked)="setActiveTab('tab-3')"
        >
          @if (showIcons()) {
            <k-icon icon component="span">
              <svg
                ios
                class="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V7.25H3.75C3.33579 7.25 3 7.58579 3 8C3 8.41421 3.33579 8.75 3.75 8.75H11.25V18.4393L8.78033 15.9697C8.48744 15.6768 8.01256 15.6768 7.71967 15.9697C7.42678 16.2626 7.42678 16.7374 7.71967 17.0303L11.4697 20.7803C11.7626 21.0732 12.2374 21.0732 12.5303 20.7803L16.2803 17.0303C16.5732 16.7374 16.5732 16.2626 16.2803 15.9697C15.9874 15.6768 15.5126 15.6768 15.2197 15.9697L12.75 18.4393V8.75H20.25C20.6642 8.75 21 8.41421 21 8C21 7.58579 20.6642 7.25 20.25 7.25H12.75V2.75Z" />
              </svg>
              <svg
                material
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4v2h4v10h2V6h4V4H5Zm12 4h-3v2h2v10h2V8Z" />
              </svg>
            </k-icon>
          }
        </k-tabbar-link>
      </k-tabbar>

      <k-list [strong]="true" [inset]="true">
        <k-list-item [title]="'Tabbar Labels'" [after]="labelsToggleTpl"></k-list-item>

        <ng-template #labelsToggleTpl>
          <k-toggle
            component="div"
            [checked]="showLabels()"
            (changed)="toggleLabels()"
          ></k-toggle>
        </ng-template>

        <k-list-item [title]="'Tabbar Icons'" [after]="iconsToggleTpl"></k-list-item>

        <ng-template #iconsToggleTpl>
          <k-toggle
            component="div"
            [checked]="showIcons()"
            (changed)="toggleIcons()"
          ></k-toggle>
        </ng-template>
      </k-list>

      @if (activeTab() === 'tab-1') {
        <k-block [strong]="true" [inset]="true" class="space-y-4">
          <p><strong>Tab 1</strong></p>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              accusantium necessitatibus, nihil quas praesentium at quibusdam
              cupiditate possimus et repudiandae dolorum delectus quo, similique
              voluptatem magni explicabo adipisci magnam ratione!
            </span>
            <span>
              Quod praesentium consequatur autem veritatis, magni alias consectetur
              ut quo, voluptatum earum in repellat! Id, autem! Minus suscipit, ad
              possimus non voluptatem aliquam praesentium earum corrupti optio velit
              tenetur numquam?
            </span>
            <span>
              Illo id ipsa natus quidem dignissimos odio dolore veniam, accusamus
              vel assumenda nulla aliquam amet distinctio! Debitis deserunt, et, cum
              voluptate similique culpa assumenda inventore, facilis eveniet iure
              optio velit.
            </span>
            <span>
              Maiores minus laborum placeat harum impedit, saepe veniam iusto
              voluptates delectus omnis consectetur tenetur ex ipsa error debitis
              aspernatur amet et alias! Sit odit cum voluptas quae? Est, omnis eos?
            </span>
          </p>
        </k-block>
      }

      @if (activeTab() === 'tab-2') {
        <k-block [strong]="true" [inset]="true" class="space-y-4">
          <p><strong>Tab 2</strong></p>
          <p>
            <span>
              Dicta beatae repudiandae ab pariatur mollitia praesentium fuga ipsum
              adipisci, quia nam expedita, est dolore eveniet, dolorum obcaecati?
              Veniam repellendus mollitia sapiente minus saepe voluptatibus
              necessitatibus laboriosam incidunt nihil autem.
            </span>
            <span>
              Officia pariatur qui, deleniti eum, et minus nisi aliquam nobis hic
              provident quisquam quidem voluptatem eveniet ducimus. Commodi ea
              dolorem, impedit eaque dolor, sint blanditiis magni accusantium natus
              reprehenderit minima?
            </span>
            <span>
              Dicta reiciendis ut vitae laborum aut repellendus quasi beatae nulla
              sapiente et. Quod distinctio velit, modi ipsam exercitationem iste
              quia eaque blanditiis neque rerum optio, nulla tenetur pariatur ex
              officiis.
            </span>
            <span>
              Consectetur accusamus delectus sit voluptatem at esse! Aperiam unde
              maxime est nemo dicta minus autem esse nobis quibusdam iusto,
              reprehenderit harum, perferendis quae. Ipsum sit fugit similique
              recusandae quas inventore?
            </span>
          </p>
        </k-block>
      }

      @if (activeTab() === 'tab-3') {
        <k-block [strong]="true" [inset]="true" class="space-y-4">
          <p><strong>Tab 3</strong></p>
          <p>
            <span>
              Vero esse ab natus neque commodi aut quidem nobis. Unde, quam
              asperiores. A labore quod commodi autem explicabo distinctio saepe ex
              amet iste recusandae porro consectetur, sed dolorum sapiente
              voluptatibus?
            </span>
            <span>
              Commodi ipsum, voluptatem obcaecati voluptatibus illum hic aliquam
              veritatis modi natus unde, assumenda expedita, esse eum fugit? Saepe
              aliquam ipsam illum nihil facilis, laborum quia, eius ea dolores
              molestias dicta.
            </span>
            <span>
              Consequatur quam laudantium, magnam facere ducimus tempora temporibus
              omnis cupiditate obcaecati tempore? Odit qui a, voluptas eveniet
              similique, doloribus eum dolorum ad, enim ea itaque voluptates porro
              minima. Omnis, magnam.
            </span>
            <span>
              Debitis, delectus! Eligendi excepturi rem veritatis, ad exercitationem
              tempore eveniet voluptates aut labore harum dolorem nemo repellendus
              accusantium quibusdam neque? Itaque iusto quisquam reprehenderit
              aperiam maiores dicta iure necessitatibus est.
            </span>
          </p>
        </k-block>
      }
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabbarComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly activeTab = signal<'tab-1' | 'tab-2' | 'tab-3'>('tab-1');
  readonly showLabels = signal(true);
  readonly showIcons = signal(true);

  readonly tabs: readonly TabDescriptor[] = [
    {
      id: 'tab-1',
      title: 'Tab 1',
      iosPath:
        'M2.25 4C2.11193 4 2 4.11193 2 4.25V19.75C2 19.8881 2.11193 20 2.25 20H21.75C21.8881 20 22 19.8881 22 19.75V7.25C22 7.11193 21.8881 7 21.75 7H12.25C12.1119 7 12 6.88807 12 6.75V4.25C12 4.11193 11.8881 4 11.75 4H2.25ZM1 4.25C1 3.55964 1.55964 3 2.25 3H11.75C12.4404 3 13 3.55964 13 4.25V6H21.75C22.4404 6 23 6.55964 23 7.25V19.75C23 20.4404 22.4404 21 21.75 21H2.25C1.55964 21 1 20.4404 1 19.75V4.25ZM5.75 7.5C5.61193 7.5 5.5 7.61193 5.5 7.75V8.25C5.5 8.38807 5.61193 8.5 5.75 8.5H18.25C18.3881 8.5 18.5 8.38807 18.5 8.25V7.75C18.5 7.61193 18.3881 7.5 18.25 7.5H5.75Z',
      materialPath: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 14H4V8h16v10Zm0-12H4V6h16v-2Z',
    },
    {
      id: 'tab-2',
      title: 'Tab 2',
      iosPath:
        'M6 2.75C6 2.33579 6.33579 2 6.75 2H17.25C17.6642 2 18 2.33579 18 2.75V5H20.25C20.6642 5 21 5.33579 21 5.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V5.75C3 5.33579 3.33579 5 3.75 5H6V2.75ZM7 5H17V3H7V5ZM4 6V20H20V6H4Z',
      materialPath: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 17H4V8h16v12Zm0-14H4V5h16v1Z',
    },
    {
      id: 'tab-3',
      title: 'Tab 3',
      iosPath:
        'M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V7.25H3.75C3.33579 7.25 3 7.58579 3 8C3 8.41421 3.33579 8.75 3.75 8.75H11.25V18.4393L8.78033 15.9697C8.48744 15.6768 8.01256 15.6768 7.71967 15.9697C7.42678 16.2626 7.42678 16.7374 7.71967 17.0303L11.4697 20.7803C11.7626 21.0732 12.2374 21.0732 12.5303 20.7803L16.2803 17.0303C16.5732 16.7374 16.5732 16.2626 16.2803 15.9697C15.9874 15.6768 15.5126 15.6768 15.2197 15.9697L12.75 18.4393V8.75H20.25C20.6642 8.75 21 8.41421 21 8C21 7.58579 20.6642 7.25 20.25 7.25H12.75V2.75Z',
      materialPath: 'M5 4v2h4v10h2V6h4V4H5Zm12 4h-3v2h2v10h2V8Z',
    },
  ];

  setActiveTab(id: 'tab-1' | 'tab-2' | 'tab-3') {
    this.activeTab.set(id);
  }

  toggleLabels() {
    this.showLabels.update((value) => !value);
  }

  toggleIcons() {
    this.showIcons.update((value) => !value);
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
