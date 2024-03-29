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
    activeBgIos: cls(
      `active:bg-black active:bg-opacity-10`,
      dark('dark:active:bg-white dark:active:bg-opacity-10')
    ),
    activeBgMaterial: '',
    groupTitleBgIos: cls(
      'bg-ios-light-surface-variant',
      dark('dark:bg-ios-dark-surface-variant')
    ),
    groupTitleBgMaterial: cls(
      'bg-md-light-surface-2',
      dark('dark:bg-md-dark-surface-2')
    ),
    menuListItemTextIos: cls(`text-black`, dark('dark:text-white')),
    menuListItemTextMaterial: cls(
      `text-md-light-on-surface-variant`,
      dark('dark:text-md-dark-on-surface-variant')
    ),
    menuListItemBgIos: cls(
      `active:bg-black active:bg-opacity-10`,
      dark('dark:active:bg-white dark:active:bg-opacity-10')
    ),
    menuListItemBgMaterial: cls(
      'bg-md-light-surface-1',
      dark('dark:bg-md-dark-surface-1')
    ),
    menuListItemActiveTextIos: cls(`text-primary`, dark('dark:text-white')),
    menuListItemActiveTextMaterial: cls(
      `text-md-light-on-secondary-container`,
      dark('dark:text-md-dark-on-secondary-container')
    ),
    menuListItemActiveBgIos: cls(
      `bg-primary bg-opacity-15`,
      dark('dark:bg-primary')
    ),
    menuListItemActiveBgMaterial: cls(
      `bg-md-light-secondary-container`,
      dark('dark:bg-md-dark-secondary-container')
    ),
    touchRipple: cls('touch-ripple-black', dark('dark:touch-ripple-white')),
    groupTitleContactsTextIos: cls(
      'text-opacity-90',
      dark('dark:text-opacity-90')
    ),
    groupTitleContactsTextMaterial: cls(
      'text-md-light-primary',
      dark('dark:text-md-dark-primary')
    ),
    groupTitleContactsBgIos: cls(dark('dark:bg-[#323234]')),
    groupTitleContactsBgMaterial: cls(
      'bg-transparent',
      dark('dark:bg-transparent')
    ),
    ...colorsProp,
  };
};
