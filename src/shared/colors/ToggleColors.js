import { cls } from '../cls.js';

export const ToggleColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls(
      'bg-black bg-opacity-10',
      dark('dark:bg-white dark:bg-opacity-20')
    ),
    checkedBgIos: 'bg-primary',
    thumbBgIos: 'bg-white',
    checkedThumbBgIos: 'bg-white',
    bgMaterial: cls(
      'bg-md-light-surface-variant',
      dark('dark:bg-md-dark-surface-variant')
    ),
    checkedBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    borderMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    checkedBorderMaterial: cls(
      'border-md-light-primary',
      dark('dark:border-md-dark-primary')
    ),
    thumbBgMaterial: cls(
      'bg-md-light-outline',
      dark('dark:bg-md-dark-outline')
    ),
    checkedThumbBgMaterial: cls(
      'bg-md-light-on-primary',
      dark('dark:bg-md-dark-on-primary')
    ),

    ...colorsProp,
  };
};
