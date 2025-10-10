import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { KPageComponent } from '../../../../../../src/angular/components/page.component.js';
import { KNavbarComponent } from '../../../../../../src/angular/components/navbar.component.js';
import { KNavbarBackLinkComponent } from '../../../../../../src/angular/components/navbar-back-link.component.js';
import { KBlockComponent } from '../../../../../../src/angular/components/block.component.js';
import { KBlockTitleComponent } from '../../../../../../src/angular/components/block-title.component.js';
import { KTableComponent } from '../../../../../../src/angular/components/table.component.js';
import { KTableHeadComponent } from '../../../../../../src/angular/components/table-head.component.js';
import { KTableBodyComponent } from '../../../../../../src/angular/components/table-body.component.js';
import { KTableRowComponent } from '../../../../../../src/angular/components/table-row.component.js';
import { KTableCellComponent } from '../../../../../../src/angular/components/table-cell.component.js';
import { KCardComponent } from '../../../../../../src/angular/components/card.component.js';

interface Dessert {
  readonly name: string;
  readonly calories: number;
  readonly fat: number;
  readonly carbs: number;
  readonly protein: number;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CommonModule,
    KPageComponent,
    KNavbarComponent,
    KNavbarBackLinkComponent,
    KBlockComponent,
    KBlockTitleComponent,
    KTableComponent,
    KTableHeadComponent,
    KTableBodyComponent,
    KTableRowComponent,
    KTableCellComponent,
    KCardComponent,
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
      <k-navbar title="Data Table">
        <k-navbar-back-link
          left
          *ngIf="!isPreview()"
          (clicked)="back()"
        ></k-navbar-back-link>
      </k-navbar>

      <k-block-title>Plain table</k-block-title>
      <k-block class="overflow-x-auto !pl-safe !pr-safe">
        <k-table>
          <k-table-head>
            <k-table-row [header]="true">
              <k-table-cell [header]="true">
                Dessert (100g serving)
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Calories
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Fat (g)
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Carbs
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Protein (g)
              </k-table-cell>
            </k-table-row>
          </k-table-head>
          <k-table-body>
            <k-table-row *ngFor="let dessert of desserts">
              <k-table-cell>{{ dessert.name }}</k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.calories }}
              </k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.fat | number:'1.1-1' }}
              </k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.carbs }}
              </k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.protein | number:'1.1-1' }}
              </k-table-cell>
            </k-table-row>
          </k-table-body>
        </k-table>
      </k-block>

      <k-block-title>Within card</k-block-title>
      <k-card class="overflow-x-auto" [contentWrap]="false">
        <k-table>
          <k-table-head>
            <k-table-row [header]="true">
              <k-table-cell [header]="true">
                Dessert (100g serving)
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Calories
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Fat (g)
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Carbs
              </k-table-cell>
              <k-table-cell [header]="true" class="text-right">
                Protein (g)
              </k-table-cell>
            </k-table-row>
          </k-table-head>
          <k-table-body>
            <k-table-row *ngFor="let dessert of desserts">
              <k-table-cell>{{ dessert.name }}</k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.calories }}
              </k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.fat | number:'1.1-1' }}
              </k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.carbs }}
              </k-table-cell>
              <k-table-cell class="text-right">
                {{ dessert.protein | number:'1.1-1' }}
              </k-table-cell>
            </k-table-row>
          </k-table-body>
        </k-table>
      </k-card>
    </k-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent {
  readonly isPreview = computed(
    () =>
      typeof document !== 'undefined' &&
      document.location.href.includes('examplePreview')
  );

  readonly desserts: Dessert[] = [
    { name: 'Frozen yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.4,
    },
    { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  ];

  back() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }
}
