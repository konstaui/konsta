import { cls } from '../cls.js';

export const LinkColors = (colorsProp = {}, dark) => {
  return {
    textIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    tabbarInactive: cls(
      `text-black`,
      dark('dark:text-white dark:text-opacity-55')
    ),
    ...colorsProp,
  };
};
