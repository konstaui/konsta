import React from 'react';
import { KonstaContext } from './KonstaContext.js';
import { useAutoTheme } from './use-auto-theme.js';

const KonstaProvider = (props) => {
  const {
    theme,
    dark,
    materialTouchRipple = true,
    iosHoverHighlight = true,
    autoThemeDetection = true,
    children,
  } = props;

  const currentTheme = useAutoTheme(theme, autoThemeDetection);

  return (
    <KonstaContext.Provider
      value={{
        theme: currentTheme,
        dark,
        materialTouchRipple,
        iosHoverHighlight,
      }}
    >
      {children}
    </KonstaContext.Provider>
  );
};

export { KonstaProvider };
