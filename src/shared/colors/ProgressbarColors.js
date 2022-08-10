import { cls } from '../cls.js';

export const ProgressbarColors = (colorsProp = {}, dark) => {
  return {
    bg: 'bg-primary',
    ...colorsProp,
  };
};
