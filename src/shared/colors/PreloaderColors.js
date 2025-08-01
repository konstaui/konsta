import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const PreloaderColors = (colorsProp = {}, dark) => {
  return {
    iconIos: 'text-primary',
    iconMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
