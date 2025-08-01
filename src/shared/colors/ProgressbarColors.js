import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ProgressbarColors = (colorsProp = {}, dark) => {
  return {
    trackBgIos: cls('bg-black/10', dark('dark:bg-primary/10')),
    trackBgMaterial: cls(
      'bg-md-light-primary/30',
      dark('dark:bg-md-dark-primary/30')
    ),
    activeBgIos: 'bg-primary',
    activeBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
