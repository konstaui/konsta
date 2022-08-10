import { cls } from '../cls.js';

export const ButtonColors = (colorsProp = {}, dark) => {
  return {
    text: 'text-primary',
    border: 'border-primary',
    bg: 'bg-primary',
    activeBg: 'active:bg-primary',
    activeBgDark: 'active:bg-primary-dark',
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
