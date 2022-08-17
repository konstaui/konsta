import { cls } from '../cls.js';

export const LinkColors = (colorsProp = {}, dark) => {
  return {
    textIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    navbarTextIos: 'text-primary',
    navbarTextMaterial: '',
    ...colorsProp,
  };
};
