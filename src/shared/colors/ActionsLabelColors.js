import { cls } from '../cls.js';

export const ActionsLabelColors = (colorsProp = {}, dark) => {
  return {
    bg: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBg: cls('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: cls(
      'text-black text-opacity-55',
      dark('dark:text-white dark:text-opacity-55')
    ),
    ...colorsProp,
  };
};
