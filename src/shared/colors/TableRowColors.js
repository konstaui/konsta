import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const TableRowColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('hover:bg-black/5', dark('dark:hover:bg-white/10')),
    bgMaterial: cls(
      'hover:bg-md-light-secondary-container',
      dark('dark:hover:bg-md-dark-secondary-container')
    ),
    dividerMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    ...filterColors(colorsProp),
  };
};
