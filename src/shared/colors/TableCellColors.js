import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const TableCellColors = (colorsProp = {}, dark) => {
  return {
    textHeaderIos: cls('text-black/45', dark('dark:text-white/55')),
    textHeaderMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    ...filterColors(colorsProp),
  };
};
