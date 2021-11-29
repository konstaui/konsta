import React from 'react';
import { KonstaContext } from './KonstaContext.js';
import { useAutoTheme } from './use-auto-theme.js';

const KonstaProvider = (props) => {
  const {
    theme,
    dark,
    touchRipple = true,
    autoThemeDetection = true,
    children,
  } = props;

  const currentTheme = useAutoTheme(theme, autoThemeDetection);

  return (
    <KonstaContext.Provider value={{ theme: currentTheme, dark, touchRipple }}>
      {children}
    </KonstaContext.Provider>
  );
};

export { KonstaProvider };
