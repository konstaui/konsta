import { cls } from '../cls.js';

export const ActionsButtonColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-white', dark('dark:bg-neutral-800')),
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    activeBgIos: cls(
      'active:bg-neutral-200',
      dark('dark:active:bg-neutral-700')
    ),
    activeBgMaterial: '',
    textIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-on-surface',
      dark('dark:text-md-dark-on-surface')
    ),
    ...colorsProp,
  };
};
