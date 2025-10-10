import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
  input,
} from '@angular/core';
import { PreloaderClasses } from '../../shared/classes/PreloaderClasses.js';
import { PreloaderColors } from '../../shared/colors/PreloaderColors.js';
import {
  useDarkClasses,
  useThemeClasses,
  useThemeSignal,
} from '../shared/theme-helpers.js';
import { KPreloaderIosIconComponent } from './icons/preloader-ios-icon.component.js';
import { KPreloaderMaterialIconComponent } from './icons/preloader-material-icon.component.js';

type PreloaderTag = 'span' | 'div';

@Component({
  selector: 'k-preloader',
  standalone: true,
  imports: [
    CommonModule,
    KPreloaderIosIconComponent,
    KPreloaderMaterialIconComponent,
  ],
  template: `
    @switch (componentTag()) {
      @case ('div') {
        <div class="{{ baseClass() }}">
          <span class="{{ innerClass() }}">
            @if (isIos()) {
              <k-preloader-ios-icon class="w-full h-full" />
            } @else {
              <k-preloader-material-icon class="w-full h-full" />
            }
          </span>
          <ng-content />
        </div>
      }
      @default {
        <span class="{{ baseClass() }}">
          <span class="{{ innerClass() }}">
            @if (isIos()) {
              <k-preloader-ios-icon class="w-full h-full" />
            } @else {
              <k-preloader-material-icon class="w-full h-full" />
            }
          </span>
          <ng-content />
        </span>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KPreloaderComponent {
  readonly component = input<PreloaderTag>('span');
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
    PreloaderColors(this.colors() ?? {}, this.dark)
  );

  private readonly classes = computed(
    () =>
      this.themeClasses(
        PreloaderClasses({}, this.palette(), this.theme(), this.className()),
        this.className()
      ) as Record<string, any>
  );

  readonly baseClass: Signal<string> = computed(
    () => this.classes()['base'] as string
  );
  readonly innerClass: Signal<string> = computed(
    () => this.classes()['inner'] as string
  );

  readonly componentTag: Signal<PreloaderTag> = computed(() => {
    const value = (this.component() || 'span').toLowerCase();
    return value === 'div' ? 'div' : 'span';
  });

  readonly isIos = computed(() => this.theme() === 'ios');
}
