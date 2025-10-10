import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KAppComponent } from '../../../../src/angular/components/app.component.js';
import { injectKonstaContext } from '../../../../src/angular/shared/konsta-context.js';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, KAppComponent],
  template: `
    <k-app
      [themeInput]="theme()"
      [dark]="dark()"
      [materialTouchRipple]="true"
      [iosHoverHighlight]="true"
      [safeAreas]="true"
    >
      <router-outlet />
    </k-app>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);
  private readonly konsta = injectKonstaContext();

  readonly theme = this.themeService.theme;
  readonly dark = this.themeService.dark;

  constructor() {
    effect(() => {
      this.konsta.themePreference.set(this.themeService.theme());
    });

    effect(() => {
      if (typeof document === 'undefined') return;
      document.documentElement.classList.toggle('dark', this.dark());
    });

    effect(() => {
      if (typeof document === 'undefined') return;
      const html = document.documentElement;
      html.classList.forEach((className) => {
        if (className.startsWith('k-color')) html.classList.remove(className);
      });
      const color = this.themeService.color();
      if (color) html.classList.add(color);
    });

    effect(() => {
      if (typeof document === 'undefined') return;
      document.documentElement.classList.toggle(
        'k-md-vibrant',
        this.themeService.vibrant()
      );
    });

    effect(() => {
      if (typeof document === 'undefined') return;
      document.documentElement.classList.toggle(
        'k-md-monochrome',
        this.themeService.monochrome()
      );
    });
  }
}
