import { cls } from '../cls.js';

export const ToggleColors = (colorsProp = {}, dark) => {
  return {
    bg: 'bg-primary',
    darkBg: 'dark:bg-primary',
    ...colorsProp,
  };
};
