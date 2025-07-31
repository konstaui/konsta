import { cls } from '../cls.js';

export const RangeClasses = (props, colors, dark) => {
  return {
    base: {
      common:
        'block relative select-none w-full self-center touch-pan-y group/range',
      ios: 'h-7',
      material: 'h-5',
    },
    trackBg: {
      common: cls(
        'absolute top-1/2 left-0 w-full transform -translate-y-1/2 bg-black/20',
        dark('dark:bg-white/20')
      ),
      ios: 'h-1.5 rounded-full',
      material: 'h-0.5',
    },
    trackValue: {
      common: `absolute top-1/2 start-0 w-full transform -translate-y-1/2`,
      ios: `h-1.5 rounded-full ${colors.valueBgIos}`,
      material: `h-0.5 ${colors.valueBgMaterial}`,
    },
    input: {
      common:
        'appearance-none w-full bg-transparent cursor-pointer block focus:outline-none relative',
      ios: 'h-7',
      material: 'h-5',
    },

    thumbWrap: {
      common: 'pointer-events-none select-none start-0 top-1/2 absolute',
      ios: cls(
        'w-9.5 h-6 group-has-[input:active]/range:scale-[1.4] shadow-ios-toggle group-has-[input:active]/range:bg-transparent duration-300 -mt-3 rounded-full transition-(--transition-ios-range-thumb)',
        colors.thumbBgIos
      ),
      material: `w-3 h-3 transform duration-200 group-has-[input:active]/range:scale-150  -mt-1.5 ${colors.thumbBgMaterial} rounded-full transition-transform`,
    },
    thumbShadow: {
      common: '',
      ios: cls(
        'absolute w-px h-px rounded-full left-1/2 top-1/2 duration-300 opacity-0 group-has-[input:active]/range:opacity-100 shadow-[0_0_40px_10px] shadow-primary/75',
        dark('dark:shadow-[0_0_40px_15px] dark:shadow-primary/50')
      ),
    },
    thumb: {
      ios: cls(
        'w-full h-full rounded-full absolute duration-300 start-0 top-0 opacity-0 group-has-[input:active]/range:opacity-100 shadow-ios-light-glass-thumb',
        dark('dark:bg-white/10 dark:shadow-ios-dark-glass-thumb')
      ),
      material: '',
    },
    inputThumb: {
      common:
        'range-thumb:opacity-0 range-thumb:appearance-none range-thumb:border-none',
      ios: 'range-thumb:w-9.5 range-thumb:h-6 range-thumb:-mt-3',
      material: `range-thumb:w-3 range-thumb:h-3 range-thumb:-mt-1.5 range-thumb:transform active:range-thumb:scale-150`,
    },

    inputTrack: {
      common: 'range-track:appearance-none range-track:h-px',
    },
  };
};
