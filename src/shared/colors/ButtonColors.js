import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ButtonColors = (colorsProp = {}, dark) => {
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
    segmentedStrongTextIos: 'text-black',
    segmentedStrongTextMaterial: '',
    tonalBgIos: 'bg-primary/15 active:bg-primary/25',
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
    disabledText: cls('text-black/30', dark('dark:text-white/30')),
    disabledBg: cls('bg-black/10', dark('dark:bg-white/10')),
    disabledBorder: cls('border-black/10', dark('dark:border-white/10')),
    ...filterColors(colorsProp),
  };
};
