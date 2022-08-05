import { cls } from '../cls.js';

export const CardClasses = (props, colors, darkClasses) => {
  const { margin } = props;
  return {
    base: {
      common: cls(margin, colors.bg, `overflow-hidden`),
      ios: 'rounded',
      material: 'rounded-xl',
      shadow: 'shadow',
      outline: cls(
        `border border-black border-opacity-10`,
        darkClasses('dark:border-white dark:border-opacity-10')
      ),
    },
    header: cls(
      `border-b border-black border-opacity-10 px-4 py-2`,
      darkClasses('dark:border-white dark:border-opacity-10')
    ),
    content: 'p-4 text-sm',
    footer: cls(
      `border-t border-black border-opacity-10 text-sm text-opacity-55`,
      colors.footerText,
      darkClasses(
        'dark:border-white  dark:border-opacity-10 dark:text-opacity-55 px-4 py-2'
      )
    ),
  };
};
