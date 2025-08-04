import { cls } from '../cls.js';
import { filterColors } from '../filter-colors.js';

export const TabbarLinkColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls('text-black', dark('dark:text-white')),
    textActiveIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    textActiveMaterial: cls(
      'text-md-light-on-secondary-container',
      dark('dark:text-md-dark-on-secondary-container')
    ),
    iconBgIos: '',
    iconBgActiveIos: '',
    iconBgMaterial: '',
    iconBgActiveMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    ...filterColors(colorsProp),
  };
};
