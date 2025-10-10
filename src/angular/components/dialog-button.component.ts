import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
  output,
} from '@angular/core';
import { useThemeSignal } from '../shared/theme-helpers.js';
import { KButtonComponent } from './button.component.js';

type DialogButtonTag = 'button' | 'a';

@Component({
  selector: 'k-dialog-button',
  standalone: true,
  imports: [CommonModule, KButtonComponent],
  template: `
    <k-button
      [component]="componentTag()"
      [class]="className() ?? undefined"
      [disabled]="disabled()"
      [ios]="ios()"
      [material]="material()"
      [inline]="isMaterial()"
      [rounded]="true"
      [large]="isIos()"
      [tonal]="isIos() ? !isStrong() : undefined"
      [clear]="isMaterial() ? !isStrong() : undefined"
      (pressed)="clicked.emit($event)"
    >
      <ng-content />
    </k-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KDialogButtonComponent {
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly component = input<DialogButtonTag | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly strong = input<boolean | undefined>(undefined);
  readonly strongIos = input<boolean>(false);
  readonly strongMaterial = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  readonly clicked = output<Event>();

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  readonly componentTag: Signal<DialogButtonTag> = computed(() => {
    const value = (this.component() || '').toLowerCase();
    if (value === 'a') return 'a';
    return 'button';
  });

  readonly isStrong = computed<boolean>(() => {
    const explicit = this.strong();
    if (explicit !== undefined && explicit !== null) return explicit;
    if (this.theme() === 'ios') return this.strongIos();
    return this.strongMaterial();
  });

  readonly isIos = computed(() => this.theme() === 'ios');
  readonly isMaterial = computed(() => this.theme() === 'material');
}
