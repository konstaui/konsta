import { cls } from '../cls.js';

export const CardColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    bgMaterial: cls('bg-md-light-surface-1', dark('dark:bg-md-dark-surface-1')),
    footerText: cls(`text-black`, dark('dark:text-white')),
    ...colorsProp,
  };
};
