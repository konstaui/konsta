import { InjectionToken, Signal, computed } from '@angular/core';

export interface ListContextValue {
  readonly dividers: Signal<boolean>;
  readonly nested: Signal<boolean>;
}

export const LIST_CONTEXT = new InjectionToken<ListContextValue>(
  'KonstaListContext',
  {
    providedIn: 'root',
    factory: () => ({
      dividers: computed(() => false),
      nested: computed(() => false),
    }),
  }
);

export const createListContext = ({
  dividers,
  nested,
}: {
  dividers: Signal<boolean>;
  nested: Signal<boolean>;
}): ListContextValue => ({
  dividers: computed(() => dividers()),
  nested: computed(() => nested()),
});
