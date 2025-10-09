import { Routes } from '@angular/router';

export interface DemoRoute {
  path: string;
  title: string;
  loadComponent: () => Promise<any>;
}

export const demoRoutes: DemoRoute[] = [
  {
    path: 'buttons',
    title: 'Buttons',
    loadComponent: () =>
      import('./pages/buttons/buttons.component').then(
        (m) => m.ButtonsComponent
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
