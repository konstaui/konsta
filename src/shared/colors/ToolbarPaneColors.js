import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const ToolbarPaneColors = (colorsProp = {}, dark) => {
  return {
    tabbarHighlightBgIos: cls('bg-black/10', dark('dark:bg-white/15')),

    ...filterColors(colorsProp),
  };
};
