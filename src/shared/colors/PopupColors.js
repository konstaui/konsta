import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const PopupColors = (colorsProp = {}, dark) => {
  return {
    bg: cls('bg-white', dark('dark:bg-black')),
    ...filterColors(colorsProp),
  };
};
