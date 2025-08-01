import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const DialogButtonColors = (colorsProp = {}, dark) => {
  return {
    activeBgIos: cls('active:bg-black/10', dark('dark:active:bg-white/10')),
    textIos: 'text-primary',
    disabledTextIos: cls('text-black/30', dark('dark:text-white/30')),
    ...filterColors(colorsProp),
  };
};
