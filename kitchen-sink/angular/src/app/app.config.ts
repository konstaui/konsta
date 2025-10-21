import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { provideKonsta } from '../../../../src/angular/shared/konsta-context.js';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideKonsta({
      theme: 'ios',
      autoThemeDetection: false,
    }),
  ],
};
