import { cls } from '../cls';
import { filterColors } from '../filter-colors';

export const ActionsGroupColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    ...filterColors(colorsProp),
  };
};
