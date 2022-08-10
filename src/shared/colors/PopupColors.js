import { cls } from '../cls.js';

export const PopupColors = (colorsProp = {}, dark) => {
  return {
    bg: cls('bg-white', dark('dark:bg-black')),
    ...colorsProp,
  };
};
