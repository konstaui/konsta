export const FabClasses = (props, colors) => {
  return {
    base: {
      common: `${colors.bg} ${colors.activeBg} ${colors.text} flex items-center justify-center space-x-2 rounded-full shadow-lg cursor-pointer overflow-hidden select-none`,
      ios: `h-12 duration-100`,
      material: `duration-300 touch-ripple-white`,
      iconOnly: {
        ios: 'w-12',
        material: 'w-14 h-14',
      },
      withText: {
        common: 'px-4',
        material: 'h-12',
      },
    },
    text: {
      common: 'uppercase text-sm',
      ios: 'font-semibold',
      material: 'font-medium tracking-wider',
    },
    icon: {
      common: 'h-1em w-1em',
      ios: 'text-icon-ios',
      material: 'text-icon-material',
    },
  };
};
