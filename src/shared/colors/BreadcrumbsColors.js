import { filterColors } from '../filter-colors.js';

export const BreadcrumbsColors = (colorsProp = {}) => {
  return {
    ...filterColors(colorsProp),
  };
};
