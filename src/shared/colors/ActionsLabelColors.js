import { cls } from '../cls.js';

export const ActionsLabelColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-white', dark('dark:bg-neutral-800')),
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    textIos: cls(
      'text-black text-opacity-55',
      dark('dark:text-white dark:text-opacity-55')
    ),
    textMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    ...colorsProp,
  };
};
