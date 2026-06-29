import { cls } from '../cls.js';

export const GlassClasses = (props, colors, baseClassName) => {
  return {
    base: {
      common: cls('k-glass', baseClassName),
      ios: cls(colors.bgIos, colors.shadowIos, 'backdrop-blur-lg touch-none'),
      material: '',
    },
  };
};
