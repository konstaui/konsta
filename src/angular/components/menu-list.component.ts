import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { KListComponent } from './list.component.js';

@Component({
  selector: 'k-menu-list',
  
  imports: [CommonModule, KListComponent],
  template: `
    <k-list
      [class]="className() ?? undefined"
      [colors]="colors()"
      [ios]="ios()"
      [material]="material()"
      [dividers]="dividers()"
      [dividersIos]="dividersIos()"
      [dividersMaterial]="dividersMaterial()"
      [inset]="inset()"
      [insetIos]="insetIos()"
      [insetMaterial]="insetMaterial()"
      [strong]="strong()"
      [strongIos]="strongIos()"
      [strongMaterial]="strongMaterial()"
      [outline]="outline()"
      [outlineIos]="outlineIos()"
      [outlineMaterial]="outlineMaterial()"
      [menuList]="true"
    >
      <ng-content />
    </k-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KMenuListComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly dividers = input<boolean | undefined>(undefined);
  readonly dividersIos = input<boolean | undefined>(undefined);
  readonly dividersMaterial = input<boolean | undefined>(undefined);
  readonly inset = input<boolean | undefined>(undefined);
  readonly insetIos = input<boolean | undefined>(undefined);
  readonly insetMaterial = input<boolean | undefined>(undefined);
  readonly strong = input<boolean | undefined>(undefined);
  readonly strongIos = input<boolean | undefined>(undefined);
  readonly strongMaterial = input<boolean | undefined>(undefined);
  readonly outline = input<boolean | undefined>(undefined);
  readonly outlineIos = input<boolean | undefined>(undefined);
  readonly outlineMaterial = input<boolean | undefined>(undefined);
}
