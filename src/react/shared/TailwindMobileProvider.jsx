import React from 'react';
import { TailwindMobileContext } from './TailwindMobileContext.js';
import { useAutoTheme } from './use-auto-theme.js';

const TailwindMobileProvider = (props) => {
  const {
    theme,
    dark,
    touchRipple = true,
    autoThemeDetection = true,
    children,
  } = props;

  const currentTheme = useAutoTheme(theme, autoThemeDetection);

  return (
    <TailwindMobileContext.Provider
      value={{ theme: currentTheme, dark, touchRipple }}
    >
      {children}
    </TailwindMobileContext.Provider>
  );
};

export { TailwindMobileProvider };
