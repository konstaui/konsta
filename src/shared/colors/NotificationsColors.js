import { cls } from '../cls.js';

export const NotificationsColors = (colorsProp, dark) => {
  return {
    bgIos: cls('bg-white', dark('dark:bg-[#1e1e1e]')),
    bgMaterial: cls('bg-md-light-surface-5', dark('dark:bg-md-dark-surface-5')),
    titleRightMd: cls(
      'text-md-light-on-surface-variant before:bg-md-light-on-surface-variant',
      dark(
        'dark:text-md-dark-on-surface-variant before:dark:bg-md-dark-on-surface-variant'
      )
    ),
    textMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant ')
    ),
    ...colorsProp,
  };
};
