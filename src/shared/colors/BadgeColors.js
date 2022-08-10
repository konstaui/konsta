import { cls } from '../cls.js';

export const BadgeColors = (colorsProp = {}, dark) => {
  return {
    bg: 'bg-primary',
    text: 'text-white',
    ...colorsProp,
  };
};
