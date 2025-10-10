import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { ProgressbarClasses } from '../../shared/classes/ProgressbarClasses.js';
import { ProgressbarColors } from '../../shared/colors/ProgressbarColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';

type ProgressbarTag = 'span' | 'div';

@Component({
  selector: 'k-progressbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (componentTag()) {
      @case ('div') {
        <div class="{{ baseClass() }}">
          <span
            class="{{ innerClass() }}"
            [ngStyle]="innerStyle()"
          ></span>
          @if (isMaterial()) {
            <span
              class="{{ emptyClass() }}"
              [ngStyle]="emptyStyle()"
            ></span>
            <span class="{{ stopClass() }}"></span>
          }
          <ng-content />
        </div>
      }
      @default {
        <span class="{{ baseClass() }}">
          <span
            class="{{ innerClass() }}"
            [ngStyle]="innerStyle()"
          ></span>
          @if (isMaterial()) {
            <span
              class="{{ emptyClass() }}"
              [ngStyle]="emptyStyle()"
            ></span>
            <span class="{{ stopClass() }}"></span>
          }
          <ng-content />
        </span>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KProgressbarComponent {
  readonly component = input<ProgressbarTag>('span');
  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly colors = input<Record<string, string> | undefined>(undefined);
  readonly ios = input<boolean | undefined>(undefined);
  readonly material = input<boolean | undefined>(undefined);
  readonly progress = input<number>(0);

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
    ProgressbarColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        ProgressbarClasses(this.palette(), this.className()),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly innerClass: Signal<string> = computed(
    () => this.classes()['inner'] as string
  );
  readonly emptyClass: Signal<string> = computed(
    () => this.classes()['empty'] as string
  );
  readonly stopClass: Signal<string> = computed(
    () => this.classes()['stop'] as string
  );

  readonly componentTag: Signal<ProgressbarTag> = computed(() => {
    const value = (this.component() || 'span').toLowerCase();
    return value === 'div' ? 'div' : 'span';
  });

  private readonly clampedProgress = computed(() => {
    const value = Number(this.progress() ?? 0);
    if (Number.isNaN(value)) return 0;
    return Math.min(1, Math.max(0, value));
  });

  readonly innerStyle = computed(() => ({
    transform: `translateX(-${100 - this.clampedProgress() * 100}%)`,
  }));

  readonly emptyStyle = computed(() => {
    const progress = this.clampedProgress();
    const offset = progress > 0 ? ' + 4px' : '';
    return {
      transform: `translateX(calc(${progress * 100}%${offset}))`,
    };
  });

  readonly isMaterial = computed(() => this.theme() === 'material');
}
