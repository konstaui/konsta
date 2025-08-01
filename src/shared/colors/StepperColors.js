import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const StepperColors = (colorsProp = {}, dark) => {
  return {
    textIos: 'text-primary',
    textMaterial: cls('text-md-light-primary', 'dark:text-md-dark-primary'),
    fillTextIos: cls('text-white'),
    fillTextMaterial: cls(
      'text-md-light-on-primary',
      dark('dark:text-md-dark-on-primary')
    ),
    fillBgIos: 'bg-primary active:bg-ios-primary-shade',
    fillBgMaterial: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    fillTouchRipple: cls('touch-ripple-white', 'dark:touch-ripple-primary'),
    clearBgIos: 'bg-transparent active:bg-primary/15',
    clearBgMaterial: 'bg-transparent',
    outlineBgIos: 'bg-transparent active:bg-primary/15',
    outlineBgMaterial: 'bg-transparent',
    outlineBorderIos: 'border-primary',
    outlineBorderMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    touchRipple: 'touch-ripple-primary',
    ...filterColors(colorsProp),
  };
};
