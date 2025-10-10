import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListGroupComponent } from '../../../../../../src/angular/components/list-group.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';

interface ContactGroup {
  readonly title: string;
  readonly contacts: readonly string[];
}

@Component({
  selector: 'app-contacts-list',
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KListComponent,
    KListGroupComponent,
    KListItemComponent,
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
      <k-navbar title="Contacts List">
        @if (!isPreview()) {
          <k-navbar-back-link left (clicked)="back()"></k-navbar-back-link>
        }
      </k-navbar>

      <k-list [strongIos]="true">
        @for (group of groups; track group.title) {
          <k-list-group>
            <k-list-item
              [title]="group.title"
              [groupTitle]="true"
              [contacts]="true"
            ></k-list-item>
            @for (name of group.contacts; track name) {
              <k-list-item
                [title]="name"
                [contacts]="true"
              ></k-list-item>
            }
          </k-list-group>
        }
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsListComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly groups: ContactGroup[] = [
    {
      title: 'A',
      contacts: [
        'Aaron',
        'Abbie',
        'Adam',
        'Adele',
        'Agatha',
        'Agnes',
        'Albert',
        'Alexander',
      ],
    },
    {
      title: 'B',
      contacts: [
        'Bailey',
        'Barclay',
        'Bartolo',
        'Bellamy',
        'Belle',
        'Benjamin',
      ],
    },
    {
      title: 'C',
      contacts: [
        'Caiden',
        'Calvin',
        'Candy',
        'Carl',
        'Cherilyn',
        'Chester',
        'Chloe',
      ],
    },
    {
      title: 'V',
      contacts: ['Vladimir'],
    },
  ];

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
