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
      import('./pages/badge/badge.component').then(
        (m) => m.BadgeComponent
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
    path: 'buttons',
    title: 'Buttons',
    loadComponent: () =>
      import('./pages/buttons/buttons.component').then(
        (m) => m.ButtonsComponent
      ),
  },
  {
    path: 'cards',
    title: 'Cards',
    loadComponent: () =>
      import('./pages/cards/cards.component').then(
        (m) => m.CardsComponent
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
      import('./pages/chips/chips.component').then(
        (m) => m.ChipsComponent
      ),
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
    path: 'content-block',
    title: 'Content Block',
    loadComponent: () =>
      import('./pages/content-block/content-block.component').then(
        (m) => m.ContentBlockComponent
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
    path: 'dialog',
    title: 'Dialog',
    loadComponent: () =>
      import('./pages/dialog/dialog.component').then(
        (m) => m.DialogComponent
      ),
  },
  {
    path: 'fab',
    title: 'FAB (Floating Action Button)',
    loadComponent: () =>
      import('./pages/fab/fab.component').then(
        (m) => m.FabComponent
      ),
  },
  {
    path: 'form-inputs',
    title: 'Form Inputs',
    loadComponent: () =>
      import('./pages/form-inputs/form-inputs.component').then(
        (m) => m.FormInputsComponent
      ),
  },
  {
    path: 'list',
    title: 'List',
    loadComponent: () =>
      import('./pages/list/list.component').then(
        (m) => m.ListComponent
      ),
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
    path: 'menu-list',
    title: 'Menu List',
    loadComponent: () =>
      import('./pages/menu-list/menu-list.component').then(
        (m) => m.MenuListComponent
      ),
  },
  {
    path: 'messages',
    title: 'Messages',
    loadComponent: () =>
      import('./pages/messages/messages.component').then(
        (m) => m.MessagesComponent
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
    path: 'notification',
    title: 'Notification',
    loadComponent: () =>
      import('./pages/notification/notification.component').then(
        (m) => m.NotificationComponent
      ),
  },
  {
    path: 'side-panels',
    title: 'Panel / Side Panels',
    loadComponent: () =>
      import('./pages/side-panels/side-panels.component').then(
        (m) => m.SidePanelsComponent
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
    path: 'popup',
    title: 'Popup',
    loadComponent: () =>
      import('./pages/popup/popup.component').then(
        (m) => m.PopupComponent
      ),
  },
  {
    path: 'preloader',
    title: 'Preloader',
    loadComponent: () =>
      import('./pages/preloader/preloader.component').then(
        (m) => m.PreloaderComponent
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
      import('./pages/radio/radio.component').then(
        (m) => m.RadioComponent
      ),
  },
  {
    path: 'range-slider',
    title: 'Range Slider',
    loadComponent: () =>
      import('./pages/range-slider/range-slider.component').then(
        (m) => m.RangeSliderComponent
      ),
  },
  {
    path: 'searchbar',
    title: 'Searchbar',
    loadComponent: () =>
      import('./pages/searchbar/searchbar.component').then(
        (m) => m.SearchbarComponent
      ),
  },
  {
    path: 'segmented-control',
    title: 'Segmented Control',
    loadComponent: () =>
      import('./pages/segmented-control/segmented-control.component').then(
        (m) => m.SegmentedControlComponent
      ),
  },
  {
    path: 'sheet-modal',
    title: 'Sheet Modal',
    loadComponent: () =>
      import('./pages/sheet-modal/sheet-modal.component').then(
        (m) => m.SheetModalComponent
      ),
  },
  {
    path: 'stepper',
    title: 'Stepper',
    loadComponent: () =>
      import('./pages/stepper/stepper.component').then(
        (m) => m.StepperComponent
      ),
  },
  {
    path: 'subnavbar',
    title: 'Subnavbar',
    loadComponent: () =>
      import('./pages/subnavbar/subnavbar.component').then(
        (m) => m.SubnavbarComponent
      ),
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
    path: 'toast',
    title: 'Toast',
    loadComponent: () =>
      import('./pages/toast/toast.component').then(
        (m) => m.ToastComponent
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
];

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
