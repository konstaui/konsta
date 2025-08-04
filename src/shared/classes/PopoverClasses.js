import { cls } from '../cls.js';

export const PopoverClasses = (props, colors, dark) => {
  const { angleClassName, angleClass } = props;
  return {
    base: {
      common: cls(
        'k-popover transition-(--transition-transform-opacity) z-40 w-60 no-safe-areas fixed translate-3d transform-gpu duration-400'
      ),
      ios: '',
      material: 'ease-material-in',
      opened: {
        common: '',
        ios: 'ease-[cubic-bezier(0,1,0.2,1.05)]',
      },
      closed: {
        common: 'pointer-events-none',
        ios: 'scale-0',
        material: 'scale-x-90 scale-y-75 opacity-0',
      },
    },
    inner: {
      common: cls('overflow-hidden relative'),
      ios: cls('rounded-4xl duration-600', colors.bgIos),
      material: cls('rounded-[1.75rem]', colors.bgMaterial),
      opened: {
        common: '',
        ios: 'ease-[cubic-bezier(0,1,0.2,1.05)]',
        material: '',
      },
      closed: {
        common: '',
        ios: '-translate-y-20 opacity-0',
        material: '',
      },
    },
    angleWrap: {
      common: cls(angleClassName || angleClass || '', 'pointer-events-none'),
      ios: cls('absolute w-6.5 h-6.5 z-50 overflow-hidden'),
      material: cls('absolute w-6.5 h-6.5 z-50 overflow-hidden'),
      bottom: 'top-full',
      top: 'bottom-full',
      left: 'right-full',
      right: 'left-full',
    },
    angleArrow: {
      common: cls('absolute rounded w-full h-full transform rotate-45'),
      ios: cls(
        'bg-ios-light-glass backdrop-blur-lg',
        dark('dark:bg-ios-dark-glass')
      ),
      material: colors.bgMaterial,
      bottom: '-top-4.75',
      top: 'top-4.75',
      left: 'left-4.75',
      right: '-left-4.75',
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black/50 duration-300',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
