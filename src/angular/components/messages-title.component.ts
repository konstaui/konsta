import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { MessagesTitleClasses } from '../../shared/classes/MessagesTitleClasses.js';
import { MessagesTitleColors } from '../../shared/colors/MessagesTitleColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

type MessagesTitleTag = 'div' | 'span';

@Component({
  selector: 'k-messages-title',
  
  imports: [CommonModule],
  template: `
    @switch (componentTag()) {
      @case ('span') {
        <span class="{{ baseClass() }}">
          <ng-content />
        </span>
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
export class KMessagesTitleComponent {
  readonly component = input<MessagesTitleTag>('div');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
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
  private readonly dark = useDarkClasses();

  private readonly palette = computed(() =>
    MessagesTitleColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        MessagesTitleClasses({}, this.palette(), this.className()),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );

  readonly componentTag: Signal<MessagesTitleTag> = computed(() => {
    const value = (this.component() || 'div').toLowerCase();
    return value === 'span' ? 'span' : 'div';
  });
}
