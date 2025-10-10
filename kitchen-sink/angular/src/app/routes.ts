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
    path: 'fab',
    title: 'FAB (Floating Action Button)',
    loadComponent: () =>
      import('./pages/fab/fab.component').then((m) => m.FabComponent),
  },
  {
    path: 'menu-list',
    title: 'Menu List',
    loadComponent: () =>
      import('./pages/menu-list/menu-list.component').then(
        (m) => m.MenuListComponent
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
    path: 'list-button',
    title: 'List Button',
    loadComponent: () =>
      import('./pages/list-button/list-button.component').then(
        (m) => m.ListButtonComponent
      ),
  },
  {
    path: 'navbar',
    title: 'Navbar',
    loadComponent: () =>
      import('./pages/navbar/navbar.component').then(
        (m) => m.NavbarComponent
      ),
  },
  {
    path: 'popover',
    title: 'Popover',
    loadComponent: () =>
      import('./pages/popover/popover.component').then(
        (m) => m.PopoverComponent
      ),
  },
  {
    path: 'progressbar',
    title: 'Progressbar',
    loadComponent: () =>
      import('./pages/progressbar/progressbar.component').then(
        (m) => m.ProgressbarComponent
      ),
  },
  {
    path: 'radio',
    title: 'Radio',
    loadComponent: () =>
      import('./pages/radio/radio.component').then((m) => m.RadioComponent),
  },
  {
    path: 'tabbar',
    title: 'Tabbar',
    loadComponent: () =>
      import('./pages/tabbar/tabbar.component').then(
        (m) => m.TabbarComponent
      ),
  },
  {
    path: 'toggle',
    title: 'Toggle',
    loadComponent: () =>
      import('./pages/toggle/toggle.component').then(
        (m) => m.ToggleComponent
      ),
  },
  {
    path: 'toolbar',
    title: 'Toolbar',
    loadComponent: () =>
      import('./pages/toolbar/toolbar.component').then(
        (m) => m.ToolbarComponent
      ),
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
