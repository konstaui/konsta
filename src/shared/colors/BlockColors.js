import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const BlockColors = (colorsProp = {}, dark) => {
  return {
    outlineIos: cls('border-black/20', dark('dark:border-white/15')),
    outlineMaterial: cls(
      'border-md-light-outline',
      dark('border-md-dark-outline')
    ),
    strongBgIos: cls(
      `bg-ios-light-surface-1`,
      dark('dark:bg-ios-dark-surface-1')
    ),
    strongBgMaterial: cls(
      'bg-md-light-surface-1',
      dark('dark:bg-md-dark-surface-1')
    ),
    textIos: '',
    textMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    ...filterColors(colorsProp),
  };
};
