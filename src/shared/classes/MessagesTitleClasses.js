import { cls } from '../cls.js';

export const MessagesTitleClasses = (colors) => {
  return {
    base: {
      common: cls('text-center text-xs leading-none'),
      ios: cls(
        'w-full text-black text-opacity-45 mt-2.5 dark:text-white dark:text-opacity-45'
      ),
      material: cls('mt-4', colors.titleMd),
    },
  };
};
