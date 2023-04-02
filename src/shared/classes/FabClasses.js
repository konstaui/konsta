export const FabClasses = (props, colors) => {
  return {
    base: {
      common: `flex items-center justify-center space-x-2 rtl:!space-x-reverse cursor-pointer overflow-hidden select-none`,
      ios: `h-12 duration-100 rounded-full shadow-lg ${colors.bgIos} ${colors.activeBgIos} ${colors.textIos}`,
      material: `duration-300 rounded-2xl shadow ${colors.bgMaterial} ${colors.activeBgMaterial} ${colors.textMaterial} ${colors.touchRipple}`,
      iconOnly: {
        ios: 'w-12',
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
      common: 'h-1em w-1em',
      ios: 'text-icon-ios',
      material: 'text-icon-material',
    },
  };
};
