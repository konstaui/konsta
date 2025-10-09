import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { BreadcrumbsClasses } from '../../shared/classes/BreadcrumbsClasses.js';
import {
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <{{ component() }} class="{{ classes() }}">
      <ng-content />
    </{{ component() }}>
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
