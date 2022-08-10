import { cls } from '../cls.js';

export const ToolbarColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: cls(
      'bg-bars-material-light',
      dark('dark:bg-bars-material-dark')
    ),
    ...colorsProp,
  };
};
