import { KonstaStore } from './KonstaStore.js';

const useTheme = ({ ios, material } = {}, cb) => {
  KonstaStore.subscribe((newValue) => {
    let theme = newValue.theme || 'ios';
    if (ios) theme = 'ios';
    if (material) theme = 'material';
    cb(theme);
  });
};

export { useTheme };
