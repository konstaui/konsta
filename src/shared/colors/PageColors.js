import { cls } from '../cls.js';

export const PageColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-ios-light-surface', dark('dark:bg-ios-dark-surface')),
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp,
  };
};
