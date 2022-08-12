import { cls } from '../cls.js';

export const ToolbarColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: cls('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    ...colorsProp,
  };
};
