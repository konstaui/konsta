import { cls } from '../cls.js';

export const LinkColors = (colorsProp = {}, dark) => {
  return {
    text: 'text-primary',
    tabbarInactive: cls(
      `text-black`,
      dark('dark:text-white dark:text-opacity-55')
    ),
    ...colorsProp,
  };
};
