import { ChangeDetectionStrategy, Component } from '@angular/core';

const ICON_SRC = new URL('../../images/demo-icon.png', import.meta.url).href;

@Component({
  selector: 'app-demo-icon',
  styles: [`
    :host {
      display: contents;
    }
  `],
  template: `<img [src]="iconSrc" alt="icon" class="ios:w-7 material:w-6" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoIconComponent {
  readonly iconSrc = ICON_SRC;
}
