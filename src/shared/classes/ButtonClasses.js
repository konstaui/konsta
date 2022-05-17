import { positionClass } from '../position-class.js';
import { cls } from '../cls.js';

export const ButtonClasses = (props, colors, classes, darkClasses) => {
  const { inline, segmented, segmentedStrong, disabled } = props;
  return {
    base: {
      common: cls(
        'uppercase flex text-center justify-center items-center appearance-none px-2 py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10',
        inline ? 'inline-flex' : 'w-full flex',
        positionClass('relative', classes),
        disabled && 'pointer-events-none'
      ),
      ios: `duration-100 font-semibold`,
      material: `duration-300 font-medium tracking-wider`,

      square:
        segmented && !segmentedStrong
          ? 'first:rounded-l last:rounded-r'
          : 'rounded',
      rounded: segmented && !segmentedStrong ? '' : 'rounded-full',
    },
    style: {
      fill: cls(
        disabled
          ? cls(colors.disabledBg, colors.disabledText)
          : `text-white ${colors.bg} ${colors.activeBgDark} touch-ripple-white`
      ),
      outline: cls(
        !segmented && `border-2`,
        disabled
          ? cls(colors.disabledText, colors.disabledBorder)
          : cls(
              !segmented && `${colors.border}`,
              colors.text,
              colors.activeBg,
              'active:bg-opacity-15',
              colors.touchRipple
            )
      ),
      clear: cls(
        disabled
          ? colors.disabledText
          : `${colors.text} ${colors.activeBg} active:bg-opacity-15 ${colors.touchRipple}`
      ),
      segmentedStrong: cls(
        `active:bg-black active:bg-opacity-10`,
        darkClasses(
          'dark:active:bg-white dark:active:bg-opacity-5 dark:touch-ripple-white'
        )
      ),
      segmentedStrongActive: 'duration-0',
    },
    size: {
      small: {
        ios: `text-xs h-7`,
        material: `text-sm h-7`,
      },
      medium: {
        common: 'text-sm',
        ios: `h-7`,
        material: `h-9`,
      },
      large: {
        ios: `h-11`,
        material: `h-12`,
      },
    },
    raised: `shadow active:shadow-lg`,
  };
};
