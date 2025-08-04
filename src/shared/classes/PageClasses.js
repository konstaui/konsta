import { cls } from '../cls.js';

export const PageClasses = (props, colors) => {
  return {
    base: {
      common: cls('k-page h-full w-full left-0 top-0 overflow-auto absolute'),
      ios: colors.bgIos,
      material: colors.bgMaterial,
    },
  };
};
