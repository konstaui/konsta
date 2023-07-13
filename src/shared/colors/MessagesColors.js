import { cls } from '../cls.js';

export const MessagesColors = (colorsProp = {}, dark) => {
  return {
    toolbarIcon: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    titleMd: cls(
      'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
    ),
    ...colorsProp,
  };
};
