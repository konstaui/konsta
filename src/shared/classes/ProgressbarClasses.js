import { cls } from '../cls';

export const ProgressbarClasses = (colors, baseClassName) => {
  return {
    base: {
      common: cls(
        'k-progressbar block overflow-hidden rtl:rotate-180 rounded-full relative',
        baseClassName
      ),
      ios: cls(`h-1.5`, colors.trackBgIos),
      material: cls('h-1'),
    },
    inner: {
      common: `block duration-200 w-full h-full rounded-full`,
      ios: cls(colors.activeBgIos),
      material: colors.activeBgMaterial,
    },
    empty: {
      common: '',
      ios: '',
      material: cls(
        colors.trackBgMaterial,
        'duration-200 w-full absolute left-0 top-0 h-full rounded-full'
      ),
    },
    stop: {
      common: '',
      ios: '',
      material: cls(
        colors.activeBgMaterial,
        'absolute right-0 top-0 h-1 w-1 rounded-full'
      ),
    },
  };
};
