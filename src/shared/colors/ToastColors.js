import { cls } from '../cls.js';

export const ToastColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-ios-light-surface-1', dark('dark:bg-ios-dark-surface-1')),
    bgMaterial: cls('bg-md-light-surface-5', dark('dark:bg-md-dark-surface-5')),
    textIos: '',
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...colorsProp,
  };
};
