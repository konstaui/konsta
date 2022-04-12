export const ProgressbarClasses = (colors) => {
  return {
    base: {
      common: `block h-1 bg-opacity-30 overflow-hidden`,
      ios: `bg-black rounded-full`,
      material: colors.bg,
    },
    inner: `block ${colors.bg} duration-200 w-full h-full`,
  };
};
