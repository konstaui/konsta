import { cls } from '../cls.js';

export const StepperColors = (colorsProp = {}, dark) => {
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
    fillBgIos: 'bg-primary',
    fillBgMaterial: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    fillActiveBgIos: 'active:bg-ios-primary-shade',
    fillActiveBgMaterial: '',
    fillTouchRipple: cls('touch-ripple-white', 'dark:touch-ripple-primary'),
    outlineBorderIos: 'border-primary',
    outlineBorderMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };
};
