import { cls } from '../cls.js';

export const MessagesTitleClasses = (props, colors) => {
  return {
    base: {
      common: cls('text-center text-xs leading-none'),
      ios: cls('w-full mt-2.5', colors.titleIos),
      material: cls('mt-4', colors.titleMd),
    },
  };
};
