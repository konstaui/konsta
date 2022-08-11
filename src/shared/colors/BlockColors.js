import { cls } from '../cls.js';

export const BlockColors = (colorsProp = {}, dark) => {
  return {
    strongBgIos: cls(
      `bg-block-strong-light`,
      dark('dark:bg-block-strong-dark')
    ),
    strongBgMaterial: cls(
      'bg-md-light-surface-1',
      dark('dark:bg-md-dark-surface-1')
    ),
    ...colorsProp,
  };
};
