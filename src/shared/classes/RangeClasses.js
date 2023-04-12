import { cls } from '../cls.js';

export const RangeClasses = (props, colors, darkClasses) => {
  return {
    base: {
      common: 'block relative select-none w-full self-center touch-pan-y',
      ios: 'h-7',
      material: 'h-5',
    },
    trackBg: {
      common: cls(
        'absolute top-1/2 left-0 w-full transform -translate-y-1/2 bg-black bg-opacity-20',
        darkClasses('dark:bg-white dark:bg-opacity-20')
      ),
      ios: 'h-1 rounded-full',
      material: 'h-0.5',
    },
    trackValue: {
      common: `absolute top-1/2 start-0 w-full transform -translate-y-1/2`,
      ios: `h-1 rounded-full ${colors.valueBgIos}`,
      material: `h-0.5 ${colors.valueBgMaterial}`,
    },
    input: {
      common:
        'appearance-none w-full bg-transparent cursor-pointer block focus:outline-none relative',
      ios: 'h-7',
      material: 'h-5',
    },

    inputThumb: {
      common:
        'range-thumb:relative range-thumb:appearance-none range-thumb:rounded-full range-thumb:border-none',
      ios: `range-thumb:w-7 range-thumb:h-7 range-thumb:-mt-3.5 ${colors.thumbBgIos} range-thumb:shadow-ios-toggle`,
      material: `range-thumb:w-3 range-thumb:h-3 ${colors.thumbBgMaterial} range-thumb:-mt-1.5 range-thumb:transform range-thumb:duration-200 active:range-thumb:scale-150`,
    },
    inputTrack: {
      common: 'range-track:appearance-none range-track:h-px',
    },
  };
};
