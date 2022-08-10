import { cls } from '../cls.js';

export const ListColors = (colorsProp = {}, dark) => {
  return {
    bg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    ...colorsProp,
  };
};
