import { cls } from '../cls.js';

export const ListItemColors = (colorsProp = {}, dark) => {
  return {
    primaryTextIos: cls(`text-black`, dark('dark:text-white')),
    primaryTextMaterial: cls(
      `text-md-light-on-surface`,
      dark('dark:text-md-dark-on-surface')
    ),

    secondaryTextIos: cls(
      'text-black text-opacity-55',
      dark('dark:text-white dark:text-opacity-55')
    ),
    secondaryTextMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),

    dividerBgIos: cls(
      'bg-list-divider-light',
      dark('dark:bg-list-divider-dark')
    ),
    dividerBgMaterial: cls(
      'bg-md-light-surface-2',
      dark('dark:bg-md-dark-surface-2')
    ),
    menuListItemText: cls(`text-primary`, dark('dark:text-white')),
    menuListItemActiveBg: cls(`bg-primary`, dark('dark:bg-primary')),
    ...colorsProp,
  };
};
