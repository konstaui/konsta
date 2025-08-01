import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ToastColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls('bg-md-light-surface-5', dark('dark:bg-md-dark-surface-5')),
    textIos: '',
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
