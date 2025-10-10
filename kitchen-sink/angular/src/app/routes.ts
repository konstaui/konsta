import { Routes } from '@angular/router';

export interface DemoRoute {
  path: string;
  title: string;
  loadComponent: () => Promise<any>;
}

export const demoRoutes: DemoRoute[] = [
  {
    path: 'action-sheet',
    title: 'Action Sheet',
    loadComponent: () =>
      import('./pages/action-sheet/action-sheet.component').then(
        (m) => m.ActionSheetComponent
      ),
  },
  {
    path: 'badge',
    title: 'Badge',
    loadComponent: () =>
      import('./pages/badge/badge.component').then((m) => m.BadgeComponent),
  },
  {
    path: 'contacts-list',
    title: 'Contacts List',
    loadComponent: () =>
      import('./pages/contacts-list/contacts-list.component').then(
        (m) => m.ContactsListComponent
      ),
  },
  {
    path: 'breadcrumbs',
    title: 'Breadcrumbs',
    loadComponent: () =>
      import('./pages/breadcrumbs/breadcrumbs.component').then(
        (m) => m.BreadcrumbsComponent
      ),
  },
  {
    path: 'cards',
    title: 'Cards',
    loadComponent: () =>
      import('./pages/cards/cards.component').then((m) => m.CardsComponent),
  },
  {
    path: 'content-block',
    title: 'Content Block',
    loadComponent: () =>
      import('./pages/content-block/content-block.component').then(
        (m) => m.ContentBlockComponent
      ),
  },
  {
    path: 'checkbox',
    title: 'Checkbox',
    loadComponent: () =>
      import('./pages/checkbox/checkbox.component').then(
        (m) => m.CheckboxComponent
      ),
  },
  {
    path: 'chips',
    title: 'Chips',
    loadComponent: () =>
      import('./pages/chips/chips.component').then((m) => m.ChipsComponent),
  },
  {
    path: 'dialog',
    title: 'Dialog',
    loadComponent: () =>
      import('./pages/dialog/dialog.component').then(
        (m) => m.DialogComponent
      ),
  },
  {
    path: 'data-table',
    title: 'Data Table',
    loadComponent: () =>
      import('./pages/data-table/data-table.component').then(
        (m) => m.DataTableComponent
      ),
  },
  {
    path: 'list',
    title: 'List',
    loadComponent: () =>
      import('./pages/list/list.component').then((m) => m.ListComponent),
  },
  {
    path: 'buttons',
    title: 'Buttons',
    loadComponent: () =>
      import('./pages/buttons/buttons.component').then(
        (m) => m.ButtonsComponent
      ),
  },
].sort((a, b) => (a.title > b.title ? 1 : -1));

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  ...demoRoutes.map(({ path, loadComponent }) => ({ path, loadComponent })),
  {
    path: '**',
    redirectTo: '',
  },
];
