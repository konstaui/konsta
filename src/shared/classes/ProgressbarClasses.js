export const ProgressbarClasses = (colors) => {
  return {
    base: {
      common: `block h-1 bg-opacity-30 dark:bg-opacity-30 overflow-hidden rtl:rotate-180`,
      ios: `bg-black rounded-full`,
      material: colors.bgMaterial,
    },
    inner: {
      common: `block duration-200 w-full h-full`,
      ios: colors.bgIos,
      material: colors.bgMaterial,
    },
  };
};
