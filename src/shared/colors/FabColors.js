import { cls } from '../cls.js';

export const FabColors = (colorsProp = {}, dark) => {
  return {
    bgIos: 'bg-primary',
    bgMaterial: cls(
      'bg-md-light-primary-container',
      dark('dark:bg-md-dark-primary-container')
    ),
    activeBgIos: 'active:bg-ios-primary-shade',
    activeBgMaterial: '',
    textIos: 'text-white',
    textMaterial: cls(
      'text-md-light-on-primary-container',
      dark('dark:text-md-dark-on-primary-container')
    ),
    touchRipple: cls('touch-ripple-primary', dark('dark:touch-ripple-white')),
    ...colorsProp,
  };
};
