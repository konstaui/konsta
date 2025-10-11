import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { TableRowClasses } from '../../shared/classes/TableRowClasses.js';
import { TableRowColors } from '../../shared/colors/TableRowColors.js';
import {
  useDarkClasses,
  useThemeClasses,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-table-row',
  
  imports: [CommonModule],
  template: `
    <tr class="{{ baseClass() }}">
      <ng-content />
    </tr>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KTableRowComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly header = input<boolean>(false);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    TableRowColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        TableRowClasses({ header: this.header() }, this.palette()),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
}
