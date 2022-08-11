import { cls } from '../cls.js';

export const ActionsButtonColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-white', dark('dark:bg-neutral-800')),
    bgMaterial: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBgIos: cls(
      'active:bg-neutral-200',
      dark('dark:active:bg-neutral-700')
    ),
    activeBgMaterial: '',
    text: 'text-primary',
    ...colorsProp,
  };
};
