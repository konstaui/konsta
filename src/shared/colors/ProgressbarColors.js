import { cls } from '../cls.js';

export const ProgressbarColors = (colorsProp = {}, dark) => {
  return {
    trackBgIos: 'bg-primary/30',
    trackBgMaterial: cls(
      'bg-md-light-primary/30',
      dark('dark:bg-md-dark-primary/30')
    ),
    activeBgIos: 'bg-primary',
    activeBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    ...colorsProp,
  };
};
