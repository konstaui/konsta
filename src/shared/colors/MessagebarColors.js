import { cls } from '../cls.js';

export const MessagebarColors = (colorsProp = {}, dark) => {
  return {
    toolbarIcon: {
      ios: cls('fill-primary', dark('dark:fill-md-dark-primary')),
      material: cls('fill-black'),
    },
    inputBgMd: cls(
      'bg-md-light-surface-2',
      dark('dark:bg-md-dark-surface-variant')
    ),
    placeholderMd: cls(
      'placeholder-md-light-on-surface-variant',
      dark('dark:bg-md-dark-on-surface-variant')
    ),
    ...colorsProp,
  };
};
