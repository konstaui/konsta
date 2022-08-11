import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ToggleClasses = (props, colors, classes, dark) => {
  return {
    base: {
      common: cls(
        positionClass('relative', classes),
        `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full group`
      ),
      ios: 'h-8 w-13 p-0.5',
      material: 'w-13 h-8 border-2',
      notChecked: {
        ios: colors.bgIos,
        material: cls(colors.bgMaterial, colors.borderMaterial),
      },
      checked: {
        ios: `${colors.checkedBgIos}`,
        material: cls(colors.checkedBgMaterial, colors.checkedBorderMaterial),
      },
    },
    inner: {
      ios: cls(
        'w-full h-full bg-white rounded-full block duration-300 transform',
        dark('dark:bg-opacity-0')
      ),
      notChecked: {},
      checked: {
        ios: 'scale-0',
      },
    },
    thumb: {
      common: 'rounded-full absolute duration-300 transform',
      ios: 'w-7 h-7 shadow-ios-toggle left-0.5 top-0.5',
      material: 'w-6 h-6 left-0.5 top-0.5 group-active:scale-[1.1]',
      checked: {
        ios: cls('translate-x-5', colors.checkedThumbBgIos),
        material: cls(`translate-x-5`, colors.checkedThumbBgMaterial),
      },
      notChecked: {
        ios: colors.thumbBgIos,
        material: cls('scale-[0.666]', colors.thumbBgMaterial),
      },
    },
    input: {
      common: 'hidden',
    },
  };
};
