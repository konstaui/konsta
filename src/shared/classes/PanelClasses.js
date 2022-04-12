import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const PanelClasses = (props, colors, classes) => {
  const { size } = props;
  return {
    base: {
      common: cls(
        'top-0 transition-transform transform duration-400 z-40 max-w-full max-h-full overflow-hidden',
        colors.bg,
        positionClass('fixed', classes),
        size
      ),
      ios: '',
      material: 'shadow-2xl',
    },
    left: {
      common: cls('no-safe-areas-right left-0'),
      opened: 'translate-x-0',
      closed: '-translate-x-full',
    },
    right: {
      common: cls('no-safe-areas-left left-full'),
      opened: '-translate-x-full',
      closed: 'translate-x-0',
    },
    backdrop: {
      common:
        'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
