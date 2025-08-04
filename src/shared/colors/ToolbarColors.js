import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ToolbarColors = (colorsProp = {}, dark) => {
  return {
    bgIos: cls(
      'bg-gradient-to-t from-ios-light-surface to-transparent',
      dark('dark:from-ios-dark-surface/50')
    ),
    bgMaterial: cls('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    tabbarHighlightBgIos: '',
    tabbarHighlightBgMaterial: cls(
      'bg-md-light-primary',
      dark('dark:bg-md-dark-primary')
    ),
    ...filterColors(colorsProp),
  };
};
