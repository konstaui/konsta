import { cls } from '../cls';

export const ActionsGroupColors = (colorsProp = {}, dark) => {
  return {
    bgIos: '',
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    ...colorsProp,
  };
};
