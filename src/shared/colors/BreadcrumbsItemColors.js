import { cls } from '../cls.js';

export const BreadcrumbsItemColors = (colorsProp = {}, dark) => {
  return {
    text: cls(
      'text-black text-opacity-55',
      dark('dark:text-white dark:text-opacity-55')
    ),
    textActive: cls('text-black', dark('dark:text-white')),
    ...colorsProp,
  };
};
