import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const SheetColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-ios-light-surface-1', dark('dark:bg-ios-dark-surface-1')),
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...filterColors(colorsProp),
  };
};
