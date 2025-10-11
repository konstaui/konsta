import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { KListItemComponent } from './list-item.component.js';

@Component({
  selector: 'k-menu-list-item',
  
  imports: [CommonModule, KListItemComponent],
  template: `
    <k-list-item
      [class]="className() ?? undefined"
      [colors]="colors()"
      [ios]="ios()"
      [material]="material()"
      [title]="title()"
      [subtitle]="subtitle()"
      [text]="text()"
      [after]="after()"
      [header]="header()"
      [footer]="footer()"
      [menuListItem]="true"
      [menuListItemActive]="active()"
      [href]="href() ?? undefined"
      [target]="target() ?? undefined"
      [routerLink]="routerLink() ?? undefined"
      [link]="link()"
    >
      <ng-content select="[media]" />
      <ng-content select="[title]" />
      <ng-content select="[after]" />
      <ng-content select="[inner]" />
      <ng-content />
    </k-list-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KMenuListItemComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);
  readonly subtitle = input<string | undefined>(undefined);
  readonly text = input<string | undefined>(undefined);
  readonly after = input<string | undefined>(undefined);
  readonly header = input<string | undefined>(undefined);
  readonly footer = input<string | undefined>(undefined);
  readonly active = input<boolean>(false);
  readonly href = input<string | undefined>(undefined);
  readonly target = input<string | undefined>(undefined);
  readonly routerLink = input<string | any[] | undefined>(undefined);
  readonly link = input<boolean>(false);
}
