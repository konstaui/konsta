import { cls } from '../cls.js';

export const TableCellColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls('text-black text-opacity-45', dark('dark:text-white dark:text-opacity-55')),
    textMaterial: cls('text-md-light-on-surface-variant',dark('dark:text-md-dark-on-surface-variant')),
    cellBorderIos: cls('before:bg-black before:bg-opacity-20', dark('dark:before:bg-white dark:before:bg-opacity-15')),
    cellBorderMaterial: cls('before:bg-md-light-outline', dark('dark:before:bg-md-dark-outline')),
    ...colorsProp,
  };
};
