import { cls } from '../cls.js';

export const NavbarColors = (colorsProp, dark) => {
  return {
    bgIos: cls('bg-ios-light-surface-2', dark('dark:bg-ios-dark-surface-2')),
    bgMaterial: cls('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    textIos: cls('text-black', dark('dark:text-white')),
    textMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    ...colorsProp,
  };
};
