import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const PanelColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-white', dark('dark:bg-black')),
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    floatingBgIos: '',
    floatingBgMaterial: cls(
      'bg-md-light-surface',
      dark('dark:bg-md-dark-surface')
    ),
    ...filterColors(colorsProp),
  };
};
