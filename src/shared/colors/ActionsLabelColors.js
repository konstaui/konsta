import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ActionsLabelColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: '',
    textIos: cls('text-black/55', dark('dark:text-white/55')),
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
