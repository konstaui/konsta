import { cls } from '../cls.js';

export const PreloaderColors = (colorsProp = {}, dark) => {
  return {
    iconIos: 'text-primary',
    iconMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...colorsProp,
  };
};
