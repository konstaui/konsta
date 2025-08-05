import { cls } from '../cls';

export const FabClasses = (props, colors, dark, baseClassName) => {
  return {
    base: {
      common: cls(
        `k-fab flex items-center justify-center gap-2 cursor-pointer overflow-hidden select-none`,
        baseClassName
      ),
      ios: cls(
        `h-11 duration-100 rounded-full shadow-ios-light-glass-fab ${colors.bgIos} ${colors.activeBgIos} ${colors.textIos}`,
        dark('dark:shadow-ios-dark-glass-fab')
      ),
      material: `duration-300 rounded-2xl shadow ${colors.bgMaterial} ${colors.activeBgMaterial} ${colors.textMaterial} ${colors.touchRipple}`,
      iconOnly: {
        ios: 'w-11',
        material: 'w-14 h-14',
      },
      withText: {
        common: 'px-4',
        material: 'h-14',
      },
    },
    text: {
      common: 'text-sm',
      ios: 'font-semibold uppercase',
      material: 'font-medium',
    },
    icon: {
      common: 'flex items-center justify-center size-6',
    },
  };
};
