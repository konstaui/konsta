import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const GlassColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-ios-light-glass', dark('dark:bg-ios-dark-glass')),
    shadowIos: cls(
      'shadow-ios-light-glass',
      dark('dark:shadow-ios-dark-glass')
    ),
    ...filterColors(colorsProp),
  };
};
