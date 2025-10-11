import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { BreadcrumbsClasses } from '../../shared/classes/BreadcrumbsClasses.js';
import { useThemeClasses, useThemeSignal } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-breadcrumbs',
  
  imports: [CommonModule],
  template: `
    @switch (tag()) {
      @case ('nav') {
        <nav class="{{ classes() }}">
          <ng-content />
        </nav>
      }
      @case ('ol') {
        <ol class="{{ classes() }}">
          <ng-content />
        </ol>
      }
      @case ('ul') {
        <ul class="{{ classes() }}">
          <ng-content />
        </ul>
      }
      @default {
        <div class="{{ classes() }}">
          <ng-content />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBreadcrumbsComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly fontSizeIos = input<string>('text-sm');
  readonly fontSizeMaterial = input<string>('text-sm');

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private static readonly SUPPORTED_TAGS = new Set(['div', 'nav', 'ol', 'ul']);
  readonly tag: Signal<'div' | 'nav' | 'ol' | 'ul'> = computed(() => {
    const raw = (this.component() ?? 'div').toLowerCase();
    return (KBreadcrumbsComponent.SUPPORTED_TAGS.has(raw)
      ? raw
      : 'div') as 'div' | 'nav' | 'ol' | 'ul';
  });

  readonly classes: Signal<string> = computed(() => {
    const c = this.themeClasses(
      BreadcrumbsClasses({
        fontSizeIos: this.fontSizeIos(),
        fontSizeMaterial: this.fontSizeMaterial(),
      }),
      this.className()
    ) as Record<string, any>;
    return c['base'] as string;
  });
}
