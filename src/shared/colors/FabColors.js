import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const FabColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-primary', dark('dark:bg-ios-primary-shade/50')),
    bgMaterial: cls(
      'bg-md-light-primary-container',
      dark('dark:bg-md-dark-primary-container')
    ),
    activeBgIos: '',
    activeBgMaterial: '',
    textIos: 'text-white',
    textMaterial: cls(
      'text-md-light-on-primary-container',
      dark('dark:text-md-dark-on-primary-container')
    ),
    touchRipple: cls('touch-ripple-primary', dark('dark:touch-ripple-white')),
    ...filterColors(colorsProp),
  };
};
