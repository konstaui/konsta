import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { TableClasses } from '../../shared/classes/TableClasses.js';
import { useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-table',
  
  imports: [CommonModule],
  template: `
    <table class="{{ baseClass() }}">
      <ng-content />
    </table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KTableComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly classes = computed(
    () =>
      this.themeClasses(TableClasses(), this.className()) as Record<
        string,
        any
      >
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
}
