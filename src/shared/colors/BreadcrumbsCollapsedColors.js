import { cls } from '../cls.js';

export const BreadcrumbsCollapsedColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls(
      'bg-black bg-opacity-15',
      dark('dark:bg-white dark:bg-opacity-15')
    ),
    bgMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    dotBgIos: cls('bg-black', dark('dark:bg-white')),
    dotBgMaterial: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    ...colorsProp,
  };
};
