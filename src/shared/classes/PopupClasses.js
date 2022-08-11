import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const PopupClasses = (props, colors, classes) => {
  const { size } = props;
  return {
    base: {
      common: cls(
        'left-1/2 top-1/2 transition-transform transform -translate-x-1/2 z-40 max-w-full max-h-full overflow-hidden md:no-safe-areas',
        colors.bg,
        positionClass('fixed', classes),
        size
      ),
      ios: 'duration-400 md:rounded-lg',
      material: 'duration-400 md:rounded-[1.75rem]',
      opened: '-translate-y-1/2',
      closed: 'translate-y-full',
    },
    backdrop: {
      common:
        'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
