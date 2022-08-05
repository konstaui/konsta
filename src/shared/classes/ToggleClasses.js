import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ToggleClasses = (props, colors, classes, darkClasses) => {
  return {
    base: {
      common: cls(
        positionClass('relative', classes),
        `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full group`
      ),
      ios: 'h-8 w-13 p-0.5',
      material: 'w-14 h-7',
      notChecked: {
        ios: cls(
          'bg-black bg-opacity-10',
          darkClasses('dark:bg-white dark:bg-opacity-20')
        ),
        material: cls(
          `bg-black bg-opacity-20`,
          darkClasses('dark:bg-white dark:bg-opacity-20')
        ),
      },
      checked: {
        ios: `${colors.bg}`,
        material: cls(`${colors.bg}`, darkClasses('dark:bg-opacity-40')),
      },
    },
    inner: {
      ios: cls(
        'w-full h-full bg-white rounded-full block duration-300 transform',
        darkClasses('dark:bg-opacity-0')
      ),
      notChecked: {},
      checked: {
        ios: 'scale-0',
      },
    },
    knob: {
      common: 'rounded-full absolute duration-300 transform',
      ios: 'w-7 h-7 shadow-ios-toggle left-0.5 top-0.5 bg-white',
      material: 'w-5 h-5 left-1 top-1 group-active:scale-[1.1]',
      checked: {
        ios: 'translate-x-5',
        material: cls(`bg-white translate-x-7`),
      },
      notChecked: {
        material: cls(
          'bg-black bg-opacity-40',
          darkClasses('dark:bg-white dark:bg-opacity-40')
        ),
      },
    },
    knobBg: {
      common: '',
      material: cls(
        'rounded-full absolute left-0 top-0 w-full h-full duration-300',
        colors.bg
      ),
      checked: {
        material: cls('opacity-0', darkClasses('dark:opacity-30')),
      },
      notChecked: {
        material: 'opacity-0',
      },
    },
    input: {
      common: 'hidden',
    },
  };
};
