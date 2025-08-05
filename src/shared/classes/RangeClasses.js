import { cls } from '../cls.js';

export const RangeClasses = (props, colors, dark, baseClassName) => {
  return {
    base: {
      common: cls(
        'k-range block relative select-none w-full self-center touch-pan-y group/range',
        baseClassName
      ),
      ios: 'h-7',
      material: 'h-11',
    },
    trackBg: {
      common: cls('absolute top-1/2 left-0 w-full transform -translate-y-1/2'),
      ios: cls('h-1.5 rounded-full bg-black/20', dark('dark:bg-white/20')),
      material: cls('h-4 rounded-full'),
    },
    trackValue: {
      common: `absolute top-1/2 start-0 w-full transform -translate-y-1/2`,
      ios: `h-1.5 rounded-full ${colors.valueBgIos}`,
      material: `h-4 ${colors.valueBgMaterial} rounded-l-2xl rounded-r-md`,
    },

    trackEmpty: {
      common: ``,
      ios: ``,
      material: cls(
        'h-4 right-0 w-full absolute top-1/2 -translate-y-1/2 rounded-l-md rounded-r-2xl bg-md-light-secondary-container',
        dark('dark:bg-md-dark-secondary-container')
      ),
    },
    stop: {
      material: cls(
        'absolute right-1.5 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full duration-200 group-has-[input:active]/range:scale-50',
        colors.valueBgMaterial
      ),
    },

    thumbWrap: {
      common: 'pointer-events-none select-none start-0 top-1/2 absolute',
      ios: cls(
        'w-9.5 h-6 group-has-[input:active]/range:scale-[1.4] shadow-ios-thumb group-has-[input:active]/range:bg-transparent duration-300 -mt-3 rounded-full transition-(--transition-ios-range-thumb)',
        colors.thumbBgIos
      ),
      material: `w-4 h-11 transform duration-200  -mt-5.5 rounded-full transition-transform flex items-center justify-center`,
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
      material: cls(
        'w-1 h-11 rounded-full duration-300 group-has-[input:active]/range:scale-x-50',
        colors.thumbBgMaterial
      ),
    },
    input: {
      common:
        'appearance-none w-full bg-transparent cursor-pointer block focus:outline-none relative',
      ios: 'h-7',
      material: 'h-11',
    },
    inputThumb: {
      common:
        'range-thumb:opacity-0 range-thumb:appearance-none range-thumb:border-none',
      ios: 'range-thumb:w-9.5 range-thumb:h-6 range-thumb:-mt-3',
      material: `range-thumb:w-1 range-thumb:h-11 range-thumb:-mt-1.5 range-thumb:transform active:range-thumb:scale-150`,
    },

    inputTrack: {
      common: 'range-track:appearance-none range-track:h-px',
    },
  };
};
