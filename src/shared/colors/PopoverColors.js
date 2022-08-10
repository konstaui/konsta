import { cls } from '../cls.js';

export const PopoverColors = (colorsProp = {}, dark) => {
  return {
    bg: cls('bg-popover-light', dark('dark:bg-popover-dark')),
    ...colorsProp,
  };
};
