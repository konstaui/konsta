import { cls } from '../cls.js';

export const BlockTitleColors = (colorsProp = {}, dark) => {
  return {
    textIos: '',
    textMaterial: 'text-primary',
    ...colorsProp,
  };
};
