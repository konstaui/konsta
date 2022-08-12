import { cls } from '../cls.js';

export const ProgressbarColors = (colorsProp = {}, dark) => {
  return {
    bgIos: 'bg-primary',
    bgMaterial: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    ...colorsProp,
  };
};
