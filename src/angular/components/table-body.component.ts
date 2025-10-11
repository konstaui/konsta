import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';
import { useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-table-body',
  
  imports: [CommonModule],
  template: `
    <tbody class="{{ baseClass() }}">
      <ng-content />
    </tbody>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KTableBodyComponent {
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
      this.themeClasses(TableBodyClasses(), this.className()) as Record<
        string,
        any
      >
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
}
