import { cls } from '../cls.js';

export const SheetColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-white', dark('dark:bg-black')),
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp,
  };
};
