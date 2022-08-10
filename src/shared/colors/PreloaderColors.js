import { cls } from '../cls.js';

export const PreloaderColors = (colorsProp = {}, dark) => {
  return {
    icon: 'text-primary',
    ...colorsProp,
  };
};
