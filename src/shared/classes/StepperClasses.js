import { cls } from '../cls.js';

export const StepperClasses = (props, colors) => {
  const { buttonsOnly } = props;

  return {
    base: `${colors.text} inline-flex items-stretch`,
    raised: 'shadow',
    size: {
      small: 'h-7',
      medium: {
        ios: `h-7`,
        material: `h-9`,
      },
      large: {
        ios: `h-11`,
        material: `h-12`,
      },
    },
    shape: {
      square: 'rounded',
      rounded: 'rounded-full',
    },
    button: {
      common:
        'relative flex items-center justify-center w-10 cursor-pointer overflow-hidden z-10 select-none',
    },
    buttonLeftShape: {
      square: 'rounded-l',
      rounded: 'rounded-l-full',
    },
    buttonRightShape: {
      square: 'rounded-r',
      rounded: 'rounded-r-full',
    },
    buttonStyle: {
      fill: cls(
        'text-white',
        colors.bg,
        colors.activeBgDark,
        'touch-ripple-white',
        buttonsOnly && 'first:border-r border-black border-opacity-10'
      ),
      outline: cls(
        'border-2',
        colors.border,
        colors.text,
        colors.touchRipple,
        colors.activeBg,
        'active:bg-opacity-15',
        buttonsOnly && 'first:border-r-0'
      ),

      clear: `${colors.text} ${colors.activeBg} ${colors.touchRipple} active:bg-opacity-15 last:border-l border-black border-opacity-10`,
    },
    input: {
      common: 'focus:outline-none text-center appearance-none bg-transparent',
    },
    value: {
      common: `w-11 flex items-center justify-center ${colors.text} font-medium`,
      ios: 'text-base',
      material: 'text-sm',
      fill: `border-t-2 border-b-2 ${colors.border} ${colors.text}`,
      outline: `border-t-2 border-b-2 ${colors.border} ${colors.text}`,
      clear: 'border-l border-black border-opacity-10',
    },
    hBar: 'w-4 h-0.5 bg-current block',
    vBar: 'w-0.5 h-4 bg-current block absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2',
  };
};
