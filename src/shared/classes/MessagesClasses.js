import { cls } from '../cls.js';

export const MessagesClasses = () => {
  return {
    base: {
      common: cls('flex flex-col relative z-1 px-2'),
      ios: 'mb-12',
      material: 'mb-16',
    },
  };
};
