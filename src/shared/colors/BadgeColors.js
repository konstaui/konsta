export const BadgeColors = (colorsProp = {}) => {
  return {
    bg: 'bg-primary',
    text: 'text-white',
    ...colorsProp,
  };
};
