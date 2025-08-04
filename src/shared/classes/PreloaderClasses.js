import { cls } from '../cls.js';

export const PreloaderClasses = (props, colors, theme) => {
  return {
    base: {
      common: cls(
        'k-preloader',
        theme === 'ios' ? 'k-ios-preloader' : 'k-material-preloader',
        `inline-block w-8 h-8`
      ),
      ios: colors.iconIos,
      material: `stroke-4 ${colors.iconMaterial}`,
    },
    inner: {
      common: `block w-full h-full`,
    },
  };
};
