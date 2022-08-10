import { cls } from '../cls.js';

export const CardColors = (colorsProp = {}, dark) => {
  return {
    bg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    footerText: cls(`text-black`, dark('dark:text-white')),
    ...colorsProp,
  };
};
