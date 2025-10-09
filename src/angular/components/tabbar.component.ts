import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { KToolbarComponent } from './toolbar.component.js';

@Component({
  selector: 'k-tabbar',
  standalone: true,
  imports: [CommonModule, KToolbarComponent],
  template: `
    <k-toolbar
      [component]="component()"
      [class]="className()"
      [colors]="colors()"
      [tabbar]="true"
      [tabbarIcons]="icons()"
      [tabbarLabels]="labels()"
      [top]="top()"
      [ios]="ios()"
      [material]="material()"
    >
      <ng-content />
    </k-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KTabbarComponent {
  readonly component = input<'div' | 'nav'>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly icons = input<boolean>(true);
  readonly labels = input<boolean>(true);
  readonly top = input<boolean>(false);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
}
