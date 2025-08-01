import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const BreadcrumbsItemColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls('text-black/55', dark('dark:text-white/55')),
    textMaterial: cls(
      'text-md-light-on-secondary-container',
      dark('dark:text-md-dark-on-secondary-container')
    ),
    bgIos: '',
    bgMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    textActiveIos: cls('text-black', dark('dark:text-white')),
    textActiveMaterial: cls(
      'text-md-light-on-secondary-container',
      dark('dark:text-md-dark-on-secondary-container')
    ),
    ...filterColors(colorsProp),
  };
};
