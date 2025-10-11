import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  inject,
  input,
  output,
} from '@angular/core';
import {
  SEGMENTED_CONTEXT,
  SegmentedContextValue,
} from '../shared/segmented-context.js';
import { KButtonComponent } from './button.component.js';

@Component({
  selector: 'k-segmented-button',
  
  imports: [CommonModule, KButtonComponent],
  template: `
    <k-button
      [class]="className() ?? undefined"
      [ios]="ios()"
      [material]="material()"
      [segmented]="true"
      [segmentedActive]="active()"
      [segmentedStrong]="contextStrong()"
      [rounded]="roundedValue()"
      (clicked)="clicked.emit($event)"
    >
      <ng-content />
    </k-button>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KSegmentedButtonComponent {
  private readonly context =
    inject<SegmentedContextValue>(SEGMENTED_CONTEXT);

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly active = input<boolean>(false);

  readonly clicked = output<Event>();

  readonly contextStrong: Signal<boolean> = computed(() =>
    this.context.strong()
  );

  private readonly contextRounded = computed(() =>
    this.context.rounded()
  );

  readonly roundedValue = computed(
    () => this.contextStrong() && this.contextRounded()
  );
}
