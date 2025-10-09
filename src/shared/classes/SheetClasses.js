import { cls } from '../cls.js';

export const SheetClasses = (props, colors, baseClassName) => {
  return {
    base: {
      common: cls(
        'k-sheet left-safe right-safe top-full transition-transform duration-400 z-40 overflow-hidden fixed [&>*]:no-safe-areas-left [&>*]:no-safe-areas-right',
        baseClassName
      ),
      ios: cls('rounded-t-4xl', colors.bgIos),
      material: `rounded-t-2xl ease-material-in ${colors.bgMaterial}`,
      opened: `-translate-y-full`,
      closed: '',
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black/50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
