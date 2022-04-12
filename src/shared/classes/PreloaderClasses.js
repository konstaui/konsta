import { cls } from '../cls.js';

export const PreloaderClasses = (props, colors, theme) => {
  const { size } = props;
  return {
    base: {
      common: cls(
        theme === 'ios' ? 'k-ios-preloader' : 'k-material-preloader',
        `inline-block ${size} ${colors.icon}`
      ),
      material: `stroke-4`,
    },
    inner: {
      common: `block w-full h-full`,
    },
  };
};
