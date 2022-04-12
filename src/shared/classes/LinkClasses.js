import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const LinkClasses = (
  props,
  { textColor, needsTouchRipple },
  classes
) => {
  const { iconOnly } = props;
  return {
    base: {
      common: cls(
        textColor,
        `inline-flex space-x-1 justify-center items-center cursor-pointer select-none`,
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
      material: 'uppercase font-medium text-sm overflow-hidden z-10',
      active: {},
      inactive: {
        ios: 'text-opacity-40',
        material: 'text-opacity-55',
      },
    },
    tabbarHighlight: {
      material: 'absolute left-0 top-0 w-full h-0.5 bg-primary duration-300',
      active: 'opacity-100',
      inactive: 'opacity-0',
    },
    toolbar: {
      common: cls(`h-full max-h-12`, iconOnly && 'touch-ripple-inset'),
      material: 'px-3',
    },
    navbar: {
      common: cls(`h-full max-h-12`, iconOnly && 'touch-ripple-inset'),
      material: 'px-3',
    },
  };
};
