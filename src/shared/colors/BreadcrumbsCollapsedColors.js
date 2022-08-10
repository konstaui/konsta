import { cls } from '../cls.js';

export const BreadcrumbsCollapsedColors = (colorsProp = {}, dark) => {
  return {
    bg: cls('bg-black bg-opacity-15', dark('dark:bg-white dark:bg-opacity-15')),
    dotBg: cls('bg-black', dark('dark:bg-white')),
    ...colorsProp,
  };
};
