import { cls } from '../cls.js';

export const ChipColors = (colorsProp = {}, dark) => {
  return {
    bg: cls(`bg-black bg-opacity-10`, dark('dark:bg-white dark:bg-opacity-10')),
    text: 'text-current',
    border: cls(
      `border-black border-opacity-20`,
      dark('dark:border-white dark:border-opacity-20')
    ),
    ...colorsProp,
  };
};
