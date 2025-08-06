// eslint-disable-next-line
import { KonstaStore } from './KonstaStore.svelte.js';

const useTheme = (props = {}) => {
  const { ios, material } = props;

  let theme = KonstaStore.theme || 'material';
  if (ios) theme = 'ios';
  if (material) theme = 'material';
  return theme;
};

export { useTheme };
