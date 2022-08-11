import { cls } from '../cls.js';

export const ListItemColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls(`text-black`, dark('dark:text-white')),
    textMaterial: cls(
      `text-md-light-on-surface`,
      dark('dark:text-md-dark-on-surface')
    ),
    menuListItemText: cls(`text-primary`, dark('dark:text-white')),
    menuListItemActiveBg: cls(`bg-primary`, dark('dark:bg-primary')),
    ...colorsProp,
  };
};
