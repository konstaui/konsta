import { cls } from '../cls.js';

export const BlockTitleColors = (colorsProp = {}, dark) => {
  return {
    textIos: '',
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...colorsProp,
  };
};
