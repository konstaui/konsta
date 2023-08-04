import { cls } from '../cls.js';

export const MessagebarColors = (colorsProp = {}, dark) => {
  return {
    toolbarIconIos: cls('fill-primary', dark('dark:fill-md-dark-primary')),
    toolbarIconMd: cls('fill-black'),
    inputBgIos: cls('bg-transparent'),
    borderIos: cls(
      'border-[#c8c8cd]',
      dark('dark:border-white dark:border-opacity-30')
    ),
    inputBgMd: cls(
      'bg-md-light-surface-2',
      dark('dark:bg-md-dark-surface-variant')
    ),
    placeholderIos: cls(
      dark('dark:placeholder-white dark:placeholder-opacity-40')
    ),
    placeholderMd: cls(
      'placeholder-md-light-on-surface-variant',
      dark('dark:placeholder-md-dark-on-surface-variant')
    ),
    bgIos: cls('bg-white', dark('dark:bg-black')),
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp,
  };
};
