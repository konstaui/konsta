import { useContext } from 'react';
import { KonstaContext } from './KonstaContext.js';

const useTheme = ({ ios, material } = {}) => {
  const context = useContext(KonstaContext);
  let theme = context.theme || 'ios';
  if (ios) theme = 'ios';
  if (material) theme = 'material';
  return theme;
};

export { useTheme };
