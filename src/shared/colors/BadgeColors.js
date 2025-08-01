import { filterColors } from '../filter-colors.js';

export const BadgeColors = (colorsProp = {}) => {
  return {
    bg: 'bg-primary',
    text: 'text-white',
    ...filterColors(colorsProp),
  };
};
