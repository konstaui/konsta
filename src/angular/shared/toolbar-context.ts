import { InjectionToken, Signal, computed } from '@angular/core';

export interface ToolbarContextValue {
  readonly tabbarLabels: Signal<boolean>;
  readonly tabbarIcons: Signal<boolean>;
  readonly tabbar: Signal<boolean>;
  readonly toolbar: Signal<boolean>;
}

const createDefaultSignal = (value: boolean): Signal<boolean> =>
  computed(() => value);

export const TOOLBAR_CONTEXT = new InjectionToken<ToolbarContextValue>(
  'KonstaToolbarContext',
  {
    providedIn: 'root',
    factory: () => ({
      tabbarLabels: createDefaultSignal(true),
      tabbarIcons: createDefaultSignal(true),
      tabbar: createDefaultSignal(false),
      toolbar: createDefaultSignal(false),
    }),
  }
);

export const createToolbarContext = (value: {
  tabbarLabels: Signal<boolean>;
  tabbarIcons: Signal<boolean>;
  tabbar: Signal<boolean>;
  toolbar: Signal<boolean>;
}): ToolbarContextValue => ({
  tabbarLabels: computed(() => value.tabbarLabels()),
  tabbarIcons: computed(() => value.tabbarIcons()),
  tabbar: computed(() => value.tabbar()),
  toolbar: computed(() => value.toolbar()),
});
