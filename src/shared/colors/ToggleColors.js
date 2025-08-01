import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ToggleColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls(
      'bg-ios-light-surface-1-shade',
      dark('dark:bg-ios-dark-surface-1-tint')
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

    ...filterColors(colorsProp),
  };
};
