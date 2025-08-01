import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const BlockTitleColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls('text-black/60', dark('dark:text-white/60')),
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    mediumTextIos: cls('text-black', dark('dark:text-white')),
    mediumTextMaterial: '',

    largeTextIos: cls('text-black', dark('dark:text-white')),
    largeTextMaterial: '',

    ...filterColors(colorsProp),
  };
};
