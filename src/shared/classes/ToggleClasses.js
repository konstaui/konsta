import { cls } from '../cls.js';

export const ToggleClasses = (props, colors, dark, baseClassName) => {
  return {
    base: {
      common: cls(
        `k-toggle cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full group`,
        dark('dark:touch-ripple-white'),
        baseClassName
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
      ios: 'absolute w-7 h-7 rounded-full top-0 duration-300 left-0',
      notChecked: cls('translate-x-8', colors.bgIos),
      checked: cls(colors.checkedBgIos),
    },
    thumbShadow: {
      common: '',
      material: '',
      ios: cls(
        'absolute w-px h-px rounded-full top-1/2 duration-300 opacity-0 group-active:opacity-100 left-0 shadow-[0_0_40px_10px] shadow-primary/75',
        dark('dark:shadow-[0_0_40px_15px] dark:shadow-primary')
      ),
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
      ios: cls(
        'w-9.5 h-6 start-0.5 top-0.5 group-active:scale-[1.4] shadow-ios-thumb group-active:bg-transparent',
        colors.thumbBgIos
      ),
      material: 'w-6 h-6 start-0.5 top-0.5',
      checked: {
        ios: cls('translate-x-5.5 rtl:!-translate-x-5.5'),
        material: cls(`translate-x-5 rtl:!-translate-x-5`),
      },
      notChecked: {
        // ios: colors.thumbBgIos,
      },
    },
    thumb: {
      common: 'w-full h-full rounded-full absolute duration-300 start-0 top-0 ',
      ios: cls(
        'opacity-0 group-active:opacity-100 shadow-ios-light-glass-thumb',
        dark('dark:bg-white/10 dark:shadow-ios-dark-glass-thumb')
      ),
      material: 'transform group-active:scale-[1.1]',
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
