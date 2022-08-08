export const FabClasses = (props, colors) => {
  return {
    base: {
      common: `${colors.bg} ${colors.activeBg} ${colors.text} flex items-center justify-center space-x-2 cursor-pointer overflow-hidden select-none`,
      ios: `h-12 duration-100 rounded-full shadow-lg`,
      material: `duration-300 touch-ripple-white rounded-2xl shadow`,
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
