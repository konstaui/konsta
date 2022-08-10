import { cls } from '../cls.js';

export const PanelColors = (colorsProp = {}, dark) => {
  return {
    bg: cls('bg-white', dark('dark:bg-black')),
    ...colorsProp,
  };
};
