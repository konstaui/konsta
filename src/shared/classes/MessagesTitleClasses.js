import { cls } from '../cls.js';

export const MessagesTitleClasses = (props, colors, baseClassName) => {
  return {
    base: {
      common: cls(
        'k-messages-title text-center text-xs leading-none',
        baseClassName
      ),
      ios: cls('w-full mt-2.5', colors.titleIos),
      material: cls('mt-4', colors.titleMd),
    },
  };
};
