import { get } from 'svelte/store';
import { KonstaStore } from './KonstaStore.js';

const useTheme = ({ ios, material } = {}, cb) => {
  const calcTheme = (v) => {
    let theme = v.theme || 'ios';
    if (ios) theme = 'ios';
    if (material) theme = 'material';
    return theme;
  };
  if (cb) {
    KonstaStore.subscribe((newValue) => {
      cb(calcTheme(newValue));
    });
  }

  return calcTheme(get(KonstaStore));
};

export { useTheme };
