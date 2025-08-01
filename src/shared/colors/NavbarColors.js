import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const NavbarColors = (colorsProp, dark) => {
  return {
    bgIos: cls(
      'bg-gradient-to-b from-ios-light-surface to-transparent',
      dark('dark:from-ios-dark-surface/50')
    ),
    bgMaterial: cls('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    textIos: cls('text-black', dark('dark:text-white')),
    textMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    ...filterColors(colorsProp),
  };
};
