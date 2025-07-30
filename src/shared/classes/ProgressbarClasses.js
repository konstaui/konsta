import { cls } from '../cls';

export const ProgressbarClasses = (colors) => {
  return {
    base: {
      common: `block overflow-hidden rtl:rotate-180`,
      ios: cls(`rounded-full h-1.5`, colors.trackBgIos),
      material: cls('h-1 ', colors.trackBgMaterial),
    },
    inner: {
      common: `block duration-200 w-full h-full`,
      ios: cls(colors.activeBgIos, `rounded-full`),
      material: colors.activeBgMaterial,
    },
  };
};
