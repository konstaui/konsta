import { cls } from '../cls.js';

export const MessagesClasses = (props, baseClassName) => {
  return {
    base: {
      common: cls(
        'k-messages flex flex-col relative z-1 px-safe-2',
        baseClassName
      ),
      ios: 'mb-12',
      material: 'mb-16',
    },
  };
};
