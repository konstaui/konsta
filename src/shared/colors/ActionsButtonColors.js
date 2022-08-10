import { cls } from '../cls.js';

export const ActionsButtonColors = (colorsProp = {}, dark) => {
  return {
    bg: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBg: cls('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: 'text-primary',
    ...colorsProp,
  };
};
