import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const CardColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls(''),
    textMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    bgIos: cls(`bg-ios-light-surface-1`, dark('dark:bg-ios-dark-surface-1')),
    bgMaterial: cls('bg-md-light-surface-1', dark('dark:bg-md-dark-surface-1')),
    footerTextIos: cls(`text-black/55`, dark('dark:text-white/55')),
    footerTextMaterial: cls(
      `text-md-light-on-surface-variant`,
      dark('dark:text-md-dark-on-surface-variant')
    ),
    outlineIos: cls('border-black/20', dark('dark:border-white/20')),
    outlineMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    ...filterColors(colorsProp),
  };
};
