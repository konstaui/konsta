import { cls } from '../cls';

export const ProgressbarClasses = (colors) => {
  return {
    base: {
      common: `block h-1 overflow-hidden rtl:rotate-180`,
      ios: cls(colors.trackBgIos, `rounded-full`),
      material: colors.trackBgMaterial,
    },
    inner: {
      common: `block duration-200 w-full h-full`,
      ios: colors.activeBgIos,
      material: colors.activeBgMaterial,
    },
  };
};
