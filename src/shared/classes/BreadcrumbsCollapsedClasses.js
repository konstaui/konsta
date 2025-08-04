import { cls } from '../cls.js';

export const BreadcrumbsCollapsedClasses = (props, colors) => {
  return {
    base: {
      common: `k-breadcrumbs-collapsed flex items-center cursor-pointer gap-0.75 ${colors.bg}`,
      ios: cls(
        `rounded active:opacity-30 px-1.5 h-[1em] duration-300 active:duration-0`,
        colors.bgIos
      ),
      material: cls('py-3 px-2 rounded-lg', colors.bgMaterial),
    },
    dot: {
      common: `w-1 h-1 rounded-full ${colors.dotBg}`,
      ios: colors.dotBgIos,
      material: colors.dotBgMaterial,
    },
  };
};
