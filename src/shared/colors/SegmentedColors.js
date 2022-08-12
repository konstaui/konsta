import { cls } from '../cls.js';

export const SegmentedColors = (colorsProp = {}, dark) => {
  return {
    strongBgIos: cls(
      'bg-black bg-opacity-5',
      dark('dark:bg-white dark:bg-opacity-10')
    ),
    strongBgMaterial: cls(
      'bg-md-light-surface-variant',
      dark('dark:bg-md-dark-surface-variant')
    ),

    borderIos: 'border-primary',
    borderMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    divideIos: 'divide-primary',
    divideMaterial: cls(
      'divide-md-light-outline',
      dark('dark:divide-md-dark-outline')
    ),
    ...colorsProp,
  };
};
