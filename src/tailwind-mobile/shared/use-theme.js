import { useContext } from 'react';
import { themeCls } from './theme-cls';
import { ThemeContext } from './theme-context';

const useTheme = ({ ios, material }) => {
  const themeContext = useContext(ThemeContext);
  let theme;
  if (ios) theme = 'ios';
  if (material) theme = 'material';
  theme = themeContext || 'common';
  return {
    theme,
    themeClasses: themeCls(theme),
  };
};

export { useTheme };
