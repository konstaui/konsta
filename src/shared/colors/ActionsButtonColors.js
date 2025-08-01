import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ActionsButtonColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: '',
    activeBgIos: cls('active:bg-black/10', dark('dark:active:bg-white/5')),
    activeBgMaterial: '',
    textIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    ...filterColors(colorsProp),
  };
};
