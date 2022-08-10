import { cls } from '../cls.js';

export const BlockColors = (colorsProp = {}, dark) => {
  return {
    strongBg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    ...colorsProp,
  };
};
