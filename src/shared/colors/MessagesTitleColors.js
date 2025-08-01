import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const MessagesTitleColors = (colorsProp = {}, dark) => {
  return {
    titleIos: cls('text-black/45', dark('dark:text-white/45')),
    titleMd: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    ...filterColors(colorsProp),
  };
};
