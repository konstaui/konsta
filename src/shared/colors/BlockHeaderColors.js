import { cls } from '../cls.js';

export const BlockHeaderColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls('text-black/60', dark('dark:text-white/60')),
    textMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    ...colorsProp,
  };
};
