import {
  EnvironmentProviders,
  InjectionToken,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  makeEnvironmentProviders,
  signal,
} from '@angular/core';

export type KonstaTheme = 'ios' | 'material';
export type KonstaThemeInput = KonstaTheme | 'parent';

export interface KonstaConfigOptions {
  theme?: KonstaThemeInput;
  dark?: boolean;
  materialTouchRipple?: boolean;
  iosHoverHighlight?: boolean;
  autoThemeDetection?: boolean;
}

export interface KonstaContextState {
  readonly themePreference: WritableSignal<KonstaThemeInput>;
  readonly theme: Signal<KonstaTheme>;
  readonly dark: WritableSignal<boolean>;
  readonly materialTouchRipple: WritableSignal<boolean>;
  readonly iosHoverHighlight: WritableSignal<boolean>;
  readonly autoThemeDetection: WritableSignal<boolean>;
}

const DEFAULT_OPTIONS: Required<KonstaConfigOptions> = {
  theme: 'material',
  dark: false,
  materialTouchRipple: true,
  iosHoverHighlight: true,
  autoThemeDetection: true,
};

export const createKonstaContext = (
  options: KonstaConfigOptions = {}
): KonstaContextState => {
  const merged = { ...DEFAULT_OPTIONS, ...options };

  const themePreference = signal<KonstaThemeInput>(merged.theme);
  const autoThemeDetection = signal<boolean>(merged.autoThemeDetection);
  const dark = signal<boolean>(merged.dark);
  const materialTouchRipple = signal<boolean>(merged.materialTouchRipple);
  const iosHoverHighlight = signal<boolean>(merged.iosHoverHighlight);

  const theme = computed<KonstaTheme>(() => {
    const pref = themePreference();
    if (pref === 'parent') {
      if (!autoThemeDetection()) return 'material';
      return detectParentTheme();
    }
    return pref;
  });

  effect(() => {
    // Touching the computed ensures the detection runs when `pref` changes.
    void theme();
  });

  return {
    themePreference,
    theme,
    dark,
    materialTouchRipple,
    iosHoverHighlight,
    autoThemeDetection,
  };
};

const detectParentTheme = (): KonstaTheme => {
  if (typeof document === 'undefined') {
    return 'material';
  }
  const htmlEl = document.documentElement;
  if (!htmlEl) return 'material';
  if (htmlEl.classList.contains('ios')) return 'ios';
  if (htmlEl.classList.contains('md') || htmlEl.classList.contains('material'))
    return 'material';
  return 'material';
};

export const KONSTA_CONTEXT = new InjectionToken<KonstaContextState>(
  'KonstaContext',
  {
    providedIn: 'root',
    factory: () => createKonstaContext(),
  }
);

export const provideKonsta = (
  options: KonstaConfigOptions = {}
): EnvironmentProviders =>
  makeEnvironmentProviders([
    {
      provide: KONSTA_CONTEXT,
      useFactory: () => createKonstaContext(options),
    },
  ]);

export const injectKonstaContext = (): KonstaContextState =>
  inject(KONSTA_CONTEXT);
