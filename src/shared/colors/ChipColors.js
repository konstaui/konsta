import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ChipColors = (colorsProp = {}, dark) => {
  return {
    fillTextIos: 'text-current',
    fillTextMaterial: cls(
      'text-md-light-on-secondary-container',
      dark('dark:text-md-dark-on-secondary-container')
    ),
    fillBgIos: cls(`bg-black/10`, dark('dark:bg-white/10')),
    fillBgMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    outlineTextIos: cls('text-current'),
    outlineTextMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    outlineBorderIos: cls(`border-black/20`, dark('dark:border-white/20')),
    outlineBorderMaterial: cls(
      `border-md-light-outline`,
      dark('dark:border-md-dark-outline')
    ),
    ...filterColors(colorsProp),
  };
};
