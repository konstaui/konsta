export const BadgeClasses = (props, colors) => {
  return {
    base: {
      common: `k-badge ${colors.text} ${colors.bg} inline-flex items-center justify-center rounded-full leading-none`,
      ios: `font-semibold`,
      material: `font-medium`,
      sm: 'text-2xs min-w-4 min-h-4 px-0.5',
      md: 'text-xs min-w-5 min-h-5 px-1.5 py-0.5',
    },
  };
};
