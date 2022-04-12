import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const SheetClasses = (props, colors, classes) => {
  return {
    base: {
      common: cls(
        'left-0 top-full transition-transform duration-400 z-40 overflow-hidden',
        colors.bg,
        positionClass('fixed', classes)
      ),
      ios: '',
      material: 'shadow-2xl',
      opened: '-translate-y-full',
      closed: '',
    },
    backdrop: {
      common:
        'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
