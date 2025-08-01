import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const SegmentedColors = (colorsProp = {}, dark) => {
  return {
    strongBgIos: cls('bg-black/5', dark('dark:bg-white/10')),
    strongBgMaterial: cls(
      'bg-md-light-surface-variant',
      dark('dark:bg-md-dark-surface-3')
    ),

    strongHighlightBgIos: cls('bg-white', dark('dark:bg-white/75')),
    strongHighlightBgMaterial: cls('bg-white', dark('dark:bg-white/15')),

    borderIos: 'border-primary',
    borderMaterial: cls(
      'border-md-light-outline',
      dark('dark:border-md-dark-outline')
    ),
    divideIos: 'divide-primary',
    divideMaterial: cls(
      'divide-md-light-outline',
      dark('dark:divide-md-dark-outline')
    ),
    ...filterColors(colorsProp),
  };
};
