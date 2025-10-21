import { InjectionToken, Signal, computed } from '@angular/core';

export interface SegmentedContextValue {
  readonly strong: Signal<boolean>;
  readonly outline: Signal<boolean>;
  readonly rounded: Signal<boolean>;
  readonly raised: Signal<boolean>;
}

const defaultSignal = (value: boolean): Signal<boolean> =>
  computed(() => value);

export const SEGMENTED_CONTEXT = new InjectionToken<SegmentedContextValue>(
  'KonstaSegmentedContext',
  {
    providedIn: 'root',
    factory: () => ({
      strong: defaultSignal(false),
      outline: defaultSignal(false),
      rounded: defaultSignal(false),
      raised: defaultSignal(false),
    }),
  }
);

export const createSegmentedContext = (value: {
  strong: Signal<boolean>;
  outline: Signal<boolean>;
  rounded: Signal<boolean>;
  raised: Signal<boolean>;
}): SegmentedContextValue => ({
  strong: computed(() => value.strong()),
  outline: computed(() => value.outline()),
  rounded: computed(() => value.rounded()),
  raised: computed(() => value.raised()),
});
