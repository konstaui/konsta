import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const LinkClasses = (
  props,
  { textColor, needsTouchRipple },
  classes
) => {
  const { iconOnly, tabbar } = props;
  return {
    base: {
      common: cls(
        !tabbar && textColor,
        `inline-flex space-x-1 rtl:!space-x-reverse justify-center items-center cursor-pointer select-none`,
        needsTouchRipple &&
          `touch-ripple-primary ${positionClass('relative', classes)} z-10`
      ),
      notTabbar: {
        ios: `active:opacity-30 duration-300 active:duration-0`,
        material: needsTouchRipple ? '' : `active:opacity-55`,
      },
    },
    tabbar: {
      common: cls(
        positionClass('relative', classes),
        `w-full h-full duration-300`
      ),
      material: 'font-medium text-sm z-10',
      active: 'k-tabbar-link-active',
      inactive: '',
    },
    toolbar: {
      common: cls(`h-full max-h-12`, iconOnly && 'k-touch-ripple-inset'),
      material: 'px-3 text-sm font-medium',
    },
    navbar: {
      common: cls(`h-full max-h-12`, iconOnly && 'k-touch-ripple-inset'),
      material: 'px-3',
    },
  };
};
