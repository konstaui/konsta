import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { KListComponent } from './list.component.js';

type ListGroupTag = 'li' | 'div';

@Component({
  selector: 'k-list-group',

  imports: [CommonModule, KListComponent],
  host: {
    '[class]': 'className()',
  },
  styles: [
    `
      :host {
        display: list-item;
      }
    `,
  ],
  template: `
    <k-list
      [class]="listClass() ?? undefined"
      [colors]="colors()"
      [ios]="ios()"
      [material]="material()"
      [dividers]="dividers()"
      [inset]="inset()"
      [strong]="strong()"
      [outline]="outline()"
      [menuList]="menuList()"
      [nested]="true"
    >
      <ng-content />
    </k-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KListGroupComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly listClass = input<string | undefined>(undefined);
  readonly component = input<ListGroupTag>('li');
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly dividers = input<boolean | undefined>(undefined);
  readonly inset = input<boolean | undefined>(undefined);
  readonly strong = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly menuList = input<boolean | undefined>(undefined);

  readonly componentTag: Signal<ListGroupTag> = computed(() => {
    const value = (this.component() || 'li').toLowerCase();
    if (value === 'div') return 'div';
    return 'li';
  });
}
