import * as React from 'react';
// IMPORT_COMPONENTS

// PROVIDER
interface TailwindMobileProviderProps {
  /**
   * App theme. If set to `'parent'` it will look for `ios` or `md` class on root `<html>` element, useful to use with parent framework like Framework7 or Ionic
   *
   * @default 'material'
   */
  theme?: 'ios' | 'material' | 'parent';
  /**
   * Include `dark:` variants (if dark theme is in use)
   *
   * @default false
   * */
  dark?: boolean;
  /**
   * Enables touch ripple effect in Material theme. Allows to globally disable touch ripple for all components
   *
   * @default true
   */
  touchRipple?: boolean;
}
declare const TailwindMobileProvider: React.FunctionComponent<TailwindMobileProviderProps>;

// HELPERS
declare const useTheme: () => 'material' | 'ios';

// EXPORT_COMPONENTS
export { useTheme, TailwindMobileProvider };
