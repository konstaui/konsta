import { Injectable, signal } from '@angular/core';
import { KonstaTheme } from '../../../../../src/angular/shared/konsta-context.js';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<KonstaTheme>('ios');
  readonly dark = signal<boolean>(
    typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );
  readonly color = signal<string>('');
  readonly vibrant = signal<boolean>(false);
  readonly monochrome = signal<boolean>(false);

  setTheme(theme: KonstaTheme) {
    this.theme.set(theme);
    if (theme !== 'material') {
      this.vibrant.set(false);
      this.monochrome.set(false);
    }
  }

  toggleDark() {
    this.dark.update((value) => !value);
  }

  setColor(color: string) {
    this.color.set(color);
  }

  toggleVibrant() {
    if (this.theme() !== 'material') return;
    this.vibrant.update((value) => !value);
  }

  toggleMonochrome() {
    if (this.theme() !== 'material') return;
    this.monochrome.update((value) => !value);
  }
}
