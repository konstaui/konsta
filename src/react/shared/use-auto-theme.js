import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect.js';

export const useAutoTheme = (theme, autoThemeDetection = true) => {
  const [themeState, setThemeState] = useState(theme);

  /* eslint-disable no-restricted-globals */
  useIsomorphicLayoutEffect(() => {
    if (!autoThemeDetection) return;
    if (theme === 'ios' || theme === 'material') {
      if (themeState !== theme) setThemeState(theme);
    } else if (
      themeState === 'parent' &&
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    ) {
      const htmlEl = document.documentElement;
      if (htmlEl) {
        if (htmlEl.classList.contains('ios')) {
          setThemeState('ios');
        } else if (
          htmlEl.classList.contains('md') ||
          htmlEl.classList.contains('material')
        ) {
          setThemeState('material');
        }
      }
    }
  }, [theme]);
  /* eslint-enable no-restricted-globals */
  return autoThemeDetection ? themeState : theme;
};
