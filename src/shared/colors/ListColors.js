import { cls } from '../cls.js';

export const ListColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    bgMaterial: cls('bg-md-light-surface-1', dark('dark:bg-md-dark-surface-1')),
    ...colorsProp,
  };
};
