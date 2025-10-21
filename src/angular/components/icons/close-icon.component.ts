import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { useThemeSignal } from '../../shared/theme-helpers.js';

@Component({
  selector: 'k-close-icon',
  styles: [`
    :host {
      display: contents;
    }
  `],
  template: `
    @if (theme() === 'ios') {
      <i [class]="'f7-icons ' + (className() ?? '')" style="font-size: 20px;">xmark</i>
    } @else {
      <i [class]="'material-icons ' + (className() ?? '')" style="font-size: 24px;">close</i>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KCloseIconComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
}
