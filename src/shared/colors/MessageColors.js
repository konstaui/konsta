import { cls } from '../cls.js';

export const MessageColors = (colorsProp = {}, dark) => {
  return {
    toolbarIcon: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    messageNameMd: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    bubbleMdSent: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary dark:text-md-dark-on-primary')
    ),
    bubbleMdReceived: cls(dark('dark:bg-md-dark-surface-variant')),
    ...colorsProp,
  };
};
