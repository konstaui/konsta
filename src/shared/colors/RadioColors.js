import { cls } from '../cls.js';

export const RadioColors = (colorsProp = {}, dark) => {
  return {
    borderIos: cls(
      'border-black border-opacity-30',
      dark('dark:border-white dark:border-opacity-30')
    ),
    borderMaterial: cls(
      'border-black border-opacity-40',
      dark('dark:border-white dark:border-opacity-40')
    ),
    bgChecked: 'bg-primary',
    borderChecked: 'border-primary',
    ...colorsProp,
  };
};
