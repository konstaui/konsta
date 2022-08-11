import { cls } from '../cls.js';

export const PopoverColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-popover-light', dark('dark:bg-popover-dark')),
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    ...colorsProp,
  };
};
