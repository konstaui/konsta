import { cls } from '../cls.js';

export const BlockFooterColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls('text-black/75', dark('dark:text-white/75')),
    textMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    ...colorsProp,
  };
};
