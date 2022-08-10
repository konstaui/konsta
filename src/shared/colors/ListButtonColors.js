import { cls } from '../cls.js';

export const ListButtonColors = (colorsProp = {}, dark) => {
  return {
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };
};
