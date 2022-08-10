import { cls } from '../cls.js';

export const SegmentedColors = (colorsProp = {}, dark) => {
  return {
    border: 'border-primary',
    divide: 'divide-primary',
    ...colorsProp,
  };
};
