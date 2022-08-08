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
      material: 'w-13 h-8 border-2',
      notChecked: {
        ios: cls(
          'bg-black bg-opacity-10',
          darkClasses('dark:bg-white dark:bg-opacity-20')
        ),
        material: cls(
          `bg-black bg-opacity-10 border-black border-opacity-20`,
          darkClasses(
            'dark:bg-white dark:bg-opacity-20 dark:border-white dark:border-opacity-20'
          )
        ),
      },
      checked: {
        ios: `${colors.bg}`,
        material: cls(
          colors.bg,
          'border-black border-opacity-0',
          darkClasses('dark:bg-opacity-40 dark:border-opacity-0')
        ),
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
      material: 'w-6 h-6 left-0.5 top-0.5 group-active:scale-[1.1]',
      checked: {
        ios: 'translate-x-5',
        material: cls(`bg-white translate-x-5`, darkClasses(colors.darkBg)),
      },
      notChecked: {
        material: cls(
          'bg-black bg-opacity-40 scale-[0.666]',
          darkClasses('dark:bg-white dark:bg-opacity-40')
        ),
      },
    },
    input: {
      common: 'hidden',
    },
  };
};
