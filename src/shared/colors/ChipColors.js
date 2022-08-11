import { cls } from '../cls.js';

export const ChipColors = (colorsProp = {}, dark) => {
  return {
    fillTextIos: 'text-current',
    fillTextMaterial: cls(
      'text-md-light-on-secondary-container',
      dark('dark:text-md-dark-on-secondary-container')
    ),
    fillBgIos: cls(
      `bg-black bg-opacity-10`,
      dark('dark:bg-white dark:bg-opacity-10')
    ),
    fillBgMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    outlineTextIos: cls('text-current'),
    outlineTextMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    outlineBorderIos: cls(
      `border-black border-opacity-20`,
      dark('dark:border-white dark:border-opacity-20')
    ),
    outlineBorderMaterial: cls(
      `border-md-light-outline`,
      dark('dark:border-md-dark-outline')
    ),
    ...colorsProp,
  };
};
