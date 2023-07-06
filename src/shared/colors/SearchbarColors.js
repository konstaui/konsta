import { cls } from '../cls.js';

export const SearchbarColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    placeholderMaterial: cls(
      'placeholder-md-light-on-surface-variant',
      dark('dark:placeholder-md-dark-on-surface-variant')
    ),
    labelTextIos: '',
    ...colorsProp,
  };
};
