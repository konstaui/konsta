import { cls } from '../cls.js';

export const ListItemColors = (colorsProp = {}, dark) => {
  return {
    text: cls(`text-black`, dark('dark:text-white')),
    menuListItemText: cls(`text-primary`, dark('dark:text-white')),
    menuListItemActiveBg: cls(`bg-primary`, dark('dark:bg-primary')),
    ...colorsProp,
  };
};
