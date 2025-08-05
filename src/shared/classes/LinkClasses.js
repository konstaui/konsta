import { cls } from '../cls.js';

export const LinkClasses = (props, { textColor, needsTouchRipple }) => {
  const { iconOnly, tabbar, tabbarLabels, tabbarIcons } = props;
  return {
    base: {
      common: cls(
        'k-link',
        !tabbar && textColor,
        `inline-flex gap-1 justify-center items-center cursor-pointer select-none`,
        needsTouchRipple && `touch-ripple-primary relative z-10`
      ),
      ios: cls(!tabbar && 'active:opacity-50 duration-300'),
      material: !tabbar && cls(needsTouchRipple ? '' : `active:opacity-55`),
    },
    tabbar: {
      common: cls(`w-full h-full duration-300 transition-colors relative`),
      ios: cls(
        'px-4 truncate',
        !tabbarIcons && tabbarLabels && 'md:px-8',
        tabbarIcons && tabbarLabels && 'md:min-w-24',
        tabbarIcons && !tabbarLabels && 'md:min-w-12'
      ),
      material: 'font-medium text-sm z-10',
      active: 'k-tabbar-link-active',
      inactive: '',
    },
    toolbar: {
      common: cls(`h-full`, iconOnly && 'k-touch-ripple-inset'),
      ios: cls(!iconOnly && 'px-4 truncate', iconOnly && 'aspect-square'),
      material: 'px-3 text-sm font-medium max-h-12',
    },
    navbar: {
      common: cls(`h-full max-h-12`, iconOnly && 'k-touch-ripple-inset'),
      ios: cls(!iconOnly && 'px-4', iconOnly && 'aspect-square'),
      material: 'px-3',
    },
  };
};
