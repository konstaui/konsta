import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const PopoverColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    ...filterColors(colorsProp),
  };
};
