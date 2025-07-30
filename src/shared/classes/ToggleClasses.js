import { cls } from '../cls.js';

export const ToggleClasses = (props, colors, dark) => {
  return {
    base: {
      common: cls(
        `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full group`,
        dark('dark:touch-ripple-white')
      ),
      ios: 'h-7 w-16 p-0.5',
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

    thumbWrap: {
      common: 'rounded-full absolute duration-300 transform',
      ios: 'w-9.5 h-6 start-0.5 top-0.5',
      material: 'w-6 h-6 start-0.5 top-0.5',
      checked: {
        ios: cls('translate-x-5.5 rtl:!-translate-x-5.5'),
        material: cls(`translate-x-5 rtl:!-translate-x-5`),
      },
      notChecked: '',
    },
    thumb: {
      common:
        'w-full h-full rounded-full absolute duration-300 transform start-0 top-0',
      ios: 'shadow-ios-toggle',
      material: 'group-active:scale-[1.1]',
      checked: {
        ios: cls(colors.checkedThumbBgIos),
        material: cls(colors.checkedThumbBgMaterial),
      },
      notChecked: {
        ios: colors.thumbBgIos,
        material: cls('scale-[0.666]', colors.thumbBgMaterial),
      },
    },
    input: {
      common: 'sr-only',
    },
  };
};
