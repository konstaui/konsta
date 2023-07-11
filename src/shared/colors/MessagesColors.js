import { cls } from '../cls.js';

export const MessagesColors = (colorsProp = {}, dark) => {
  return {
    toolbarIcon: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    ...colorsProp,
  };
};
