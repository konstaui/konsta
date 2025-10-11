import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { MessagesClasses } from '../../shared/classes/MessagesClasses.js';
import {
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

type MessagesTag = 'div' | 'section';

@Component({
  selector: 'k-messages',
  
  imports: [CommonModule],
  template: `
    @switch (componentTag()) {
      @case ('section') {
        <section class="{{ baseClass() }}">
          <ng-content />
        </section>
      }
      @default {
        <div class="{{ baseClass() }}">
          <ng-content />
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KMessagesComponent {
  readonly component = input<MessagesTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);

  private readonly theme = useThemeSignal(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));
  private readonly themeClasses = useThemeClasses(() => ({
    ios: this.ios() === true,
    material: this.material() === true,
  }));

  private readonly classes = computed(
    () =>
      this.themeClasses(
        MessagesClasses({}, this.className()),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );

  readonly componentTag: Signal<MessagesTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'section' ? 'section' : 'div';
  });
}
