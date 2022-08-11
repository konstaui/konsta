import { cls } from '../cls.js';

export const RangeColors = (colorsProp = {}, dark) => {
  return {
    valueBgIos: 'bg-primary',
    valueBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    thumbBgIos: 'range-thumb:bg-white',
    thumbBgMaterial: cls(
      'range-thumb:bg-md-light-primary',
      dark('dark:range-thumb:bg-md-dark-primary')
    ),
    ...colorsProp,
  };
};
