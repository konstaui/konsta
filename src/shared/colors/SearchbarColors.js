import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const SearchbarColors = (colorsProp = {}, dark) => {
  return {
    inputBgIos: '',
    inputBgMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    placeholderIos: '',
    placeholderMaterial: cls(
      'placeholder-md-light-on-surface-variant',
      dark('dark:placeholder-md-dark-on-surface-variant')
    ),
    ...filterColors(colorsProp),
  };
};
