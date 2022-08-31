import { cls } from '../cls.js';

export const ButtonColors = (colorsProp = {}, dark) => {
  return {
    activeBgIos: 'active:bg-primary',
    activeBgMaterial: '',
    textIos: 'text-primary',
    textMaterial: cls('text-md-light-primary', 'dark:text-md-dark-primary'),
    fillTextIos: cls('text-white'),
    fillTextMaterial: cls(
      'text-md-light-on-primary',
      dark('dark:text-md-dark-on-primary')
    ),
    fillActiveBgIos: 'active:bg-ios-primary-shade',
    fillActiveBgMaterial: '',
    fillBgIos: 'bg-primary',
    fillBgMaterial: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    fillTouchRipple: cls('touch-ripple-white', 'dark:touch-ripple-primary'),
    outlineBorderIos: 'border-primary',
    outlineBorderMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    tonalBgIos: 'bg-primary',
    tonalBgMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    tonalTextIos: 'text-primary',
    tonalTextMaterial: cls(
      'text-md-light-on-secondary-container',
      dark('dark:text-md-dark-on-secondary-container')
    ),
    touchRipple: 'touch-ripple-primary',
    disabledText: cls(
      'text-black text-opacity-30',
      dark('dark:text-white dark:text-opacity-30')
    ),
    disabledBg: cls(
      'bg-black bg-opacity-10',
      dark('dark:bg-white dark:bg-opacity-10')
    ),
    disabledBorder: cls(
      'border-black border-opacity-10',
      dark('dark:border-white dark:border-opacity-10')
    ),
    ...colorsProp,
  };
};
