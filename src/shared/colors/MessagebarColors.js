import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const MessagebarColors = (colorsProp = {}, dark) => {
  return {
    toolbarIconIos: cls('fill-primary', dark('dark:fill-md-dark-primary')),
    toolbarIconMd: cls('fill-black'),
    inputBgIos: cls('bg-transparent'),
    inputBgMd: cls(
      'bg-md-light-surface-2',
      dark('dark:bg-md-dark-surface-variant')
    ),
    placeholderIos: cls(dark('dark:placeholder-whit/40')),
    placeholderMd: cls(
      'placeholder-md-light-on-surface-variant',
      dark('dark:placeholder-md-dark-on-surface-variant')
    ),
    bgIos: undefined,
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...filterColors(colorsProp),
  };
};
