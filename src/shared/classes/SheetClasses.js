import { cls } from '../cls.js';

export const SheetClasses = (props, colors) => {
  return {
    base: {
      common: cls(
        'left-0 top-full transition-transform duration-400 z-40 overflow-hidden fixed'
      ),
      ios: '',
      material: `rounded-t-2xl ease-material-in ${colors.bgIos}`,
      opened: `-translate-y-full ${colors.bgMaterial}`,
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
