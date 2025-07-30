import { cls } from '../cls.js';

export const DialogColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls(
      'bg-ios-light-liquid-glass',
      dark('dark:bg-ios-dark-liquid-glass')
    ),
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    titleIos: '',
    titleMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    contentTextIos: '',
    contentTextMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    ...colorsProp,
  };
};
