import { InjectionToken, Signal, computed } from '@angular/core';

export interface NavbarContextValue {
  readonly navbar: Signal<boolean>;
}

const createDefaultSignal = (value: boolean): Signal<boolean> =>
  computed(() => value);

export const NAVBAR_CONTEXT = new InjectionToken<NavbarContextValue>(
  'KonstaNavbarContext',
  {
    providedIn: 'root',
    factory: () => ({
      navbar: createDefaultSignal(false),
    }),
  }
);

export const createNavbarContext = ({
  navbar,
}: {
  navbar: Signal<boolean>;
}): NavbarContextValue => ({
  navbar: computed(() => navbar()),
});
