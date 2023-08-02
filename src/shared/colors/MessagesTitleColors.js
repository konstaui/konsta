import { cls } from '../cls.js';

export const MessagesTitleColors = (colorsProp = {}, dark) => {
  return {
    titleIos: cls(
      'text-black text-opacity-45',
      dark('dark:text-white dark:text-opacity-45')
    ),
    titleMd: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    ...colorsProp,
  };
};
