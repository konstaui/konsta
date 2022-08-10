import { cls } from '../cls.js';

export const FabColors = (colorsProp = {}, dark) => {
  return {
    bg: 'bg-primary',
    activeBg: 'active:bg-primary-dark',
    text: 'text-white',
    ...colorsProp,
  };
};
