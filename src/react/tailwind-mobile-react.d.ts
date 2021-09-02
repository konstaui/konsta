import * as React from 'react';
// IMPORT_COMPONENTS

// PROVIDER
interface TailwindMobileProviderProps {
  /**
   * App theme
   *
   * @default 'material'
   */
  theme?: 'ios' | 'material';
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
