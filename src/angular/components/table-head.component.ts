import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';
import { useThemeClasses } from '../shared/theme-helpers.js';

@Component({
  selector: 'k-table-head',
  standalone: true,
  imports: [CommonModule],
  template: `
    <thead class="{{ baseClass() }}">
      <ng-content />
    </thead>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KTableHeadComponent {
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
      this.themeClasses(TableHeadClasses(), this.className()) as Record<
        string,
        any
      >
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
}
