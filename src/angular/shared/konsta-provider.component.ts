import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
} from '@angular/core';
import {
  KONSTA_CONTEXT,
  KonstaThemeInput,
  createKonstaContext,
  injectKonstaContext,
} from './konsta-context.js';

@Component({
  selector: 'konsta-provider',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: KONSTA_CONTEXT,
      useFactory: () => createKonstaContext(),
    },
  ],
  template: `<ng-content />`,
})
export class KonstaProviderComponent {
  readonly theme = input<KonstaThemeInput | undefined>(undefined);
  readonly dark = input<boolean | undefined>(undefined);
  readonly materialTouchRipple = input<boolean | undefined>(undefined);
  readonly iosHoverHighlight = input<boolean | undefined>(undefined);
  readonly autoThemeDetection = input<boolean | undefined>(undefined);

  private readonly ctx = injectKonstaContext();

  constructor() {
    effect(() => {
      const theme = this.theme();
      if (typeof theme !== 'undefined') {
        this.ctx.themePreference.set(theme);
      }

      const dark = this.dark();
      if (typeof dark !== 'undefined') {
        this.ctx.dark.set(Boolean(dark));
      }

      const ripple = this.materialTouchRipple();
      if (typeof ripple !== 'undefined') {
        this.ctx.materialTouchRipple.set(Boolean(ripple));
      }

      const hover = this.iosHoverHighlight();
      if (typeof hover !== 'undefined') {
        this.ctx.iosHoverHighlight.set(Boolean(hover));
      }

      const autoTheme = this.autoThemeDetection();
      if (typeof autoTheme !== 'undefined') {
        this.ctx.autoThemeDetection.set(Boolean(autoTheme));
      }
    });
  }
}
