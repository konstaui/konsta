import { cls } from '../cls.js';

export const PopupClasses = (props, colors, baseClassName) => {
  return {
    base: {
      common: cls(
        'k-popup left-1/2 top-1/2 transition-transform transform -translate-x-1/2 z-40 max-w-full max-h-full overflow-hidden md:no-safe-areas fixed',
        colors.bg,
        'w-screen h-screen md:w-160 md:h-160',
        baseClassName
      ),
      ios: 'duration-400 md:rounded-4xl',
      material: ' md:rounded-[1.75rem]',
      opened: {
        common: '-translate-y-1/2',
        material: cls('ease-material-in-popup duration-[600ms]'),
      },
      closed: { common: 'translate-y-full', material: 'duration-400' },
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black/50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
