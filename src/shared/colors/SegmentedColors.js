import { cls } from '../cls.js';

export const SegmentedColors = (colorsProp = {}, dark) => {
  return {
    borderIos: 'border-primary',
    borderMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    divideIos: 'divide-primary',
    divideMaterial: cls(
      'divide-md-light-outline',
      dark('dark:divide-md-dark-outline')
    ),
    ...colorsProp,
  };
};
