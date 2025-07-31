import { cls } from '../cls.js';

export const ToolbarColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    tabbarHighlightBgIos: 'bg-primary',
    tabbarHighlightBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    ...colorsProp,
  };
};
