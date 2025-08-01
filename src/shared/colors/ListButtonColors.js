import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ListButtonColors = (colorsProp = {}, dark) => {
  return {
    textIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    bgIos: 'active:bg-primary/15',
    bgMaterial: '',
    touchRipple: 'touch-ripple-primary',
    ...filterColors(colorsProp),
  };
};
