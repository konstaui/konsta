import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const LinkColors = (colorsProp = {}, dark) => {
  return {
    textIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    navbarTextIos: '',
    navbarTextMaterial: '',
    toolbarTextIos: '',
    toolbarTextMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
