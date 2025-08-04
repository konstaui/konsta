import { cls } from '../cls.js';

export const PanelClasses = (props, colors) => {
  const { size, floating } = props;
  return {
    base: {
      common: cls(
        'k-panel transition-transform transform duration-400 z-40 max-w-full overflow-hidden fixed',
        floating ? 'top-safe-2 bottom-safe-2 !h-auto' : 'top-0 max-h-full',
        'w-72 h-screen'
      ),
      ios: cls(
        floating && cls('rounded-4xl', colors.floatingBgIos),
        !floating && colors.bgIos
      ),
      material: cls(
        'ease-material-in',
        floating ? colors.floatingBgMaterial : colors.bgMaterial
      ),
    },
    left: {
      common: cls(
        'no-safe-areas-right',
        floating ? 'right-full -mr-2' : 'right-full'
      ),
      material: cls(!floating ? 'rounded-r-2xl' : 'rounded-2xl'),
      opened: 'translate-x-full',
      closed: '-translate-x-2',
    },
    right: {
      common: cls(
        'no-safe-areas-left',
        floating ? 'left-full -ml-2' : 'left-full'
      ),
      material: cls(!floating ? 'rounded-l-2xl' : 'rounded-2xl'),
      opened: '-translate-x-full',
      closed: 'translate-x-2',
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black/50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
