import { cls } from '../cls.js';

export const PageColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls('bg-page-ios-light', dark('dark:bg-page-ios-dark')),
    bgMaterial: cls(
      'bg-page-material-light',
      dark('dark:bg-page-material-dark')
    ),
    ...colorsProp,
  };
};
