import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { TableCellClasses } from '../../shared/classes/TableCellClasses.js';
import { TableCellColors } from '../../shared/colors/TableCellColors.js';
import {
  useDarkClasses,
  useThemeClasses,
} from '../shared/theme-helpers.js';

type TableCellTag = 'th' | 'td';

@Component({
  selector: 'k-table-cell',
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (componentTag()) {
      @case ('th') {
        <th class="{{ baseClass() }}">
          <ng-content />
        </th>
      }
      @default {
        <td class="{{ baseClass() }}">
          <ng-content />
        </td>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KTableCellComponent {
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
    TableCellColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        TableCellClasses(
          {
            header: this.header(),
          },
          this.palette(),
          this.className()
        ),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );

  readonly componentTag: Signal<TableCellTag> = computed(() =>
    this.header() ? 'th' : 'td'
  );
}
