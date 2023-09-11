import { cls } from '../cls.js';

export const TableRowColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('hover:bg-black hover:bg-opacity-5', dark('dark:hover:bg-white dark:hover:bg-opacity-10')),
    bgMaterial: cls('hover:bg-md-light-secondary-container', dark('dark:hover:bg-md-dark-secondary-container')),
    ...colorsProp,
  };
};
