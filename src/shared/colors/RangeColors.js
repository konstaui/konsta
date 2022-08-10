import { cls } from '../cls.js';

export const RangeColors = (colorsProp = {}, dark) => {
  return {
    valueBg: 'bg-primary',
    thumbBgIos: 'range-thumb:bg-white',
    thumbBgMaterial: 'range-thumb:bg-primary',
    ...colorsProp,
  };
};
