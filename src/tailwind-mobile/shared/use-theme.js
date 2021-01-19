import { useContext } from 'react';
import { ThemeContext } from './theme-context';

const useTheme = ({ ios, material }) => {
  const themeContext = useContext(ThemeContext);
  if (ios) return 'ios';
  if (material) return 'material';
  return themeContext;
};

export { useTheme };
