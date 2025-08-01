import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const RadioColors = (colorsProp = {}, dark) => {
  return {
    borderIos: cls('border-black/30', dark('dark:border-white/30')),
    borderMaterial: cls(
      `border-md-light-outline`,
      dark('dark:border-md-dark-outline')
    ),
    bgCheckedIos: 'bg-primary',
    bgCheckedMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    borderCheckedIos: 'border-primary',
    borderCheckedMaterial: cls(
      'border-md-light-primary',
      dark('dark:border-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
