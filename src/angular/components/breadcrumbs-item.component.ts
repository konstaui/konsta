import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { BreadcrumbsItemClasses } from '../../shared/classes/BreadcrumbsItemClasses.js';
import { BreadcrumbsItemColors } from '../../shared/colors/BreadcrumbsItemColors.js';
import {
  useDarkClasses,
  useThemeClasses,
} from '../shared/theme-helpers.js';

@Component({
  selector: 'k-breadcrumbs-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <{{ component() }}
      class="{{ classes() }}"
      role="menuitem"
      [attr.tabindex]="0"
      (click)="handleClick($event)"
    >
      <ng-content />
    </{{ component() }}>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KBreadcrumbsItemComponent {
  readonly component = input<string>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly active = input<boolean>(false);

  readonly clicked = output<Event>();

  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    BreadcrumbsItemColors(this.colors() ?? {}, this.dark)
  );

  readonly classes: Signal<string> = computed(() => {
    const c = this.themeClasses(
      BreadcrumbsItemClasses(
        {
          active: this.active(),
        },
        this.palette()
      ),
      this.className()
    ) as Record<string, any>;
    return c['base'] as string;
  });

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
