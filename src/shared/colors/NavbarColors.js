import { cls } from '../cls.js';

export const NavbarColors = (colorsProp, dark) => {
  return {
    bgIos: cls('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: cls('bg-md-surface-2-light', dark('dark:bg-md-surface-2-dark')),
    titleIos: cls('text-black', dark('dark:text-white')),
    titleMaterial: cls('text-black', dark('dark:text-white')),
    ...colorsProp,
  };
};
