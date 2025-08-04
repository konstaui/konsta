import { cls } from '../cls.js';

export const GlassClasses = (props, dark) => {
  return {
    base: {
      common: '',
      ios: cls(
        'bg-ios-light-glass shadow-ios-light-glass backdrop-blur-lg touch-none',
        dark('dark:bg-ios-dark-glass dark:shadow-ios-dark-glass')
      ),
      material: '',
    },
  };
};
