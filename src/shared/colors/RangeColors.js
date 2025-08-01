import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const RangeColors = (colorsProp = {}, dark) => {
  return {
    valueBgIos: 'bg-primary',
    valueBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    thumbBgIos: 'bg-white',
    thumbBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
