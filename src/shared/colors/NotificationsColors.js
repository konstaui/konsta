import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const NotificationsColors = (colorsProp, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls('bg-md-light-surface-5', dark('dark:bg-md-dark-surface-5')),
    titleIos: cls('text-black', dark('dark:text-white')),
    titleRightIos: cls('text-black/45', dark('dark:text-white/45')),
    titleRightMd: cls(
      'text-md-light-on-surface-variant before:bg-md-light-on-surface-variant',
      dark(
        'dark:text-md-dark-on-surface-variant before:dark:bg-md-dark-on-surface-variant'
      )
    ),
    subtitleIos: cls('text-black ', dark('dark:text-white')),
    textMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant ')
    ),
    deleteIconIos: cls(
      'fill-stone-400 active:fill-stone-200',
      dark('dark:fill-stone-500 dark:active:fill-stone-700')
    ),
    deleteIconMd: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    ...filterColors(colorsProp),
  };
};
