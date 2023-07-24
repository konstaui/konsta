import { cls } from '../cls.js';

export const MessagesTitleColors = (colorsProp = {}) => {
  return {
    titleMd: cls(
      'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
    ),
    ...colorsProp,
  };
};
