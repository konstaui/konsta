import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Signal,
  computed,
  effect,
  input,
  viewChild,
} from '@angular/core';
import { KonstaTheme } from '../shared/konsta-context.js';
import { KonstaProviderComponent } from '../shared/konsta-provider.component.js';
import { AppClasses } from '../../shared/classes/AppClasses.js';
import { useThemeSignal } from '../shared/theme-helpers.js';
import { cls } from '../../shared/cls.js';

@Component({
  selector: 'k-app',
  
  imports: [CommonModule, KonstaProviderComponent],
  template: `
    <konsta-provider
      [theme]="themePref()"
      [dark]="dark()"
      [materialTouchRipple]="materialTouchRipple()"
      [iosHoverHighlight]="iosHoverHighlight()"
      [autoThemeDetection]="false"
    >
      <div #root class="{{ classes() }}">
        <ng-content />
      </div>
    </konsta-provider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KAppComponent {
  private readonly host = viewChild<ElementRef<HTMLDivElement>>('root');

  readonly className = input<string | undefined>(undefined, {
    alias: 'class',
  });
  readonly theme = input<KonstaTheme | 'parent' | undefined>('material');
  readonly dark = input<boolean>(true);
  readonly materialTouchRipple = input<boolean>(true);
  readonly iosHoverHighlight = input<boolean>(true);
  readonly safeAreas = input<boolean>(true);

  readonly themePref: Signal<KonstaTheme> = useThemeSignal(() => ({
    ios: this.theme() === 'ios',
    material: this.theme() === 'material',
  }));

  readonly classes = computed(() =>
    cls(
      AppClasses(
        {
          safeAreas: this.safeAreas(),
          materialTouchRipple: this.materialTouchRipple(),
          iosHoverHighlight: this.iosHoverHighlight(),
        },
        this.themePref(),
        this.className()
      )
    )
  );

  constructor() {
    effect(() => {
      const el = this.host()?.nativeElement;
      if (!el) return;
      const clsNames = this.classes();
      el.setAttribute('class', clsNames);
    });
  }
}
