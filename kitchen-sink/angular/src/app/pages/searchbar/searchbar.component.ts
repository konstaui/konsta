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
import { KSearchbarComponent } from '../../../../../../src/angular/components/searchbar.component.js';
import { KListComponent } from '../../../../../../src/angular/components/list.component.js';
import { KListItemComponent } from '../../../../../../src/angular/components/list-item.component.js';

interface SearchItem {
  title: string;
}

const ITEMS: SearchItem[] = [
  { title: 'FC Ajax' },
  { title: 'FC Arsenal' },
  { title: 'FC Athletic' },
  { title: 'FC Barcelona' },
  { title: 'FC Bayern München' },
  { title: 'FC Bordeaux' },
  { title: 'FC Borussia Dortmund' },
  { title: 'FC Chelsea' },
  { title: 'FC Galatasaray' },
  { title: 'FC Juventus' },
  { title: 'FC Liverpool' },
  { title: 'FC Manchester City' },
  { title: 'FC Manchester United' },
  { title: 'FC Paris Saint-Germain' },
  { title: 'FC Real Madrid' },
  { title: 'FC Tottenham Hotspur' },
  { title: 'FC Valencia' },
  { title: 'FC West Ham United' },
];

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KSearchbarComponent,
    KListComponent,
    KListItemComponent,
  ],
  template: `
    <k-page>
      <k-navbar title="Searchbar" [subnavbar]="true">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
        <div subnavbar>
          <k-searchbar
            [value]="searchQuery()"
            [disableButton]="true"
            disableButtonText="Cancel"
            (input)="handleSearch($event)"
            (clear)="handleClear()"
            (disable)="handleDisable()"
          ></k-searchbar>
        </div>
      </k-navbar>

      <k-list [strong]="true" [inset]="true">
        <k-list-item
          *ngIf="filteredItems().length === 0"
          title="Nothing found"
        ></k-list-item>
        <k-list-item
          *ngFor="let item of filteredItems()"
          [title]="item.title"
        ></k-list-item>
      </k-list>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchbarComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly searchQuery = signal('');

  readonly filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase();
    if (!query) return ITEMS;
    return ITEMS.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
  });

  handleSearch(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  handleClear() {
    this.searchQuery.set('');
  }

  handleDisable() {
    // no-op for demo parity
  }

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
