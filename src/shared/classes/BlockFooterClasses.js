export const BlockFooterClasses = (props, colors) => {
  return {
    base: {
      common: `pl-4-safe pr-4-safe mb-8 flex items-center -mt-6 text-sm`,
      ios: colors.textIos,
      material: colors.textMaterial,
    },
  };
};
