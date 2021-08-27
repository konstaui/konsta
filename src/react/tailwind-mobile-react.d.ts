import * as React from 'react';
// IMPORT_COMPONENTS

// PROVIDER
interface TailwindMobileProviderProps {
  theme?: 'ios' | 'material';
  dark?: boolean;
}
declare const TailwindMobileProvider: React.FunctionComponent<TailwindMobileProviderProps>;

// HELPERS
declare const useTheme: () => 'material' | 'ios';

// EXPORT_COMPONENTS
export { useTheme, TailwindMobileProvider };
