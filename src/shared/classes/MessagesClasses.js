import { cls } from '../cls.js';

export const MessagesClasses = () => {
  return {
    base: {
      common: cls('flex flex-col relative z-1 min-h-[100%] px-4 mt-2.5'),
      ios: cls('bg-white', 'dark:bg-transparent'),
    },
  };
};
