import { cls } from '../cls.js';

export const ToggleClasses = (props, colors, dark) => {
  return {
    base: {
      common: cls(
        `k-toggle cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full group`,
        dark('dark:touch-ripple-white')
      ),
      ios: 'h-7 w-16 p-0.5',
      material: 'w-13 h-8 border-2',
      notChecked: {
        ios: '',
        material: cls(colors.bgMaterial, colors.borderMaterial),
      },
      checked: {
        ios: '',
        material: cls(colors.checkedBgMaterial, colors.checkedBorderMaterial),
      },
    },

    thumbSide: {
      common: '',
      material: '',
      ios: 'absolute w-8 h-7 rounded-full top-0 duration-300 left-0',
      notChecked: cls('translate-x-8', colors.bgIos),
      checked: cls(colors.checkedBgIos),
    },
    thumbShadow: {
      common: '',
      material: '',
      ios: 'absolute w-px h-px rounded-full top-1/2 duration-300 left-0 group-active:shadow-[0_0_40px_15px_var(--color-primary)]',
      notChecked: cls('translate-x-5'),
      checked: cls('translate-x-10.5'),
    },
    thumbBg: {
      common: '',
      ios: 'w-full h-full absolute inset-0 rounded-full group-active:scale-[0.75] duration-300 ',
      material: 'contents',
      notChecked: colors.bgIos,
      checked: colors.checkedBgIos,
    },
    thumbWrap: {
      common: 'rounded-full absolute duration-300 transform',
      ios: 'w-9.5 h-6 start-0.5 top-0.5 group-active:scale-[1.3] shadow-ios-toggle group-active:shadow-ios-light-glass dark:group-active:shadow-ios-dark-glass group-active:bg-transparent',
      material: 'w-6 h-6 start-0.5 top-0.5',
      checked: {
        ios: cls(
          'translate-x-5.5 rtl:!-translate-x-5.5',
          colors.checkedThumbBgIos
        ),
        material: cls(`translate-x-5 rtl:!-translate-x-5`),
      },
      notChecked: {
        ios: colors.thumbBgIos,
      },
    },
    thumb: {
      common: '',
      ios: '',
      material:
        'w-full h-full rounded-full absolute duration-300 transform start-0 top-0 group-active:scale-[1.1]',
      checked: {
        material: cls(colors.checkedThumbBgMaterial),
      },
      notChecked: {
        material: cls('scale-[0.666]', colors.thumbBgMaterial),
      },
    },
    input: {
      common: 'sr-only',
    },
  };
};
