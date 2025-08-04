import { cls } from '../cls.js';

export const StepperClasses = (props, colors) => {
  const { buttonsOnly, size } = props;

  return {
    base: `k-stepper ${colors.text} inline-flex items-stretch`,
    raised: 'shadow',
    size: {
      small: {
        ios: `h-7`,
        material: `h-8`,
      },
      medium: {
        ios: `h-8.5`,
        material: `h-10`,
      },
      large: {
        ios: `h-12`,
        material: `h-12`,
      },
    },
    shape: {
      square: { ios: 'rounded', material: 'rounded-lg' },
      rounded: 'rounded-full',
    },
    button: {
      common:
        'relative flex items-center justify-center w-10 cursor-pointer overflow-hidden z-10 select-none',
      ios: 'duration-100',
    },
    buttonLeftShape: {
      square: {
        ios: 'rounded-s',
        material: 'rounded-s-lg',
      },
      rounded: 'rounded-s-full',
    },
    buttonRightShape: {
      square: {
        ios: 'rounded-e',
        material: 'rounded-e-lg',
      },
      rounded: 'rounded-e-full',
    },
    buttonStyle: {
      fill: {
        common: cls(
          colors.fillTouchRipple,
          buttonsOnly &&
            'first:border-r border-black/10 rtl:first:border-l rtl:first:border-r-0'
        ),
        ios: cls(colors.fillBgIos, colors.fillTextIos),
        material: cls(colors.fillBgMaterial, colors.fillTextMaterial),
      },
      outline: {
        common: cls(
          colors.touchRipple,
          buttonsOnly && 'first:border-r-0 rtl:last:border-r-0'
        ),
        ios: cls(
          'border-2',
          colors.textIos,
          colors.outlineBgIos,
          colors.outlineBorderIos,
          buttonsOnly && 'rtl:first:border-r-2'
        ),
        material: cls(
          'border',
          colors.textMaterial,
          colors.outlineBgMaterial,
          colors.outlineBorderMaterial,
          buttonsOnly && 'rtl:first:border-r'
        ),
      },

      clear: {
        common: `${colors.touchRipple} last:border-l rtl:last:border-l-0 rtl:first:border-l border-black/10`,
        ios: cls(colors.textIos, colors.clearBgIos),
        material: cls(colors.textMaterial, colors.clearBgMaterial),
      },
    },
    input: {
      common: 'focus:outline-none text-center appearance-none bg-transparent',
    },
    value: {
      common: `w-11 flex items-center justify-center font-medium`,
      ios: cls(
        `text-[15px] ${colors.textIos}`,
        props.small && 'text-sm',
        props.large && 'text-[17px]'
      ),
      material: `text-sm ${colors.textMaterial}`,
      fill: {
        common: ``,
        ios: `border-t-2 border-b-2 ${colors.outlineBorderIos}`,
        material: `border-t border-b ${colors.outlineBorderMaterial}`,
      },
      outline: {
        common: ``,
        ios: `border-t-2 border-b-2 ${colors.outlineBorderIos}`,
        material: `border-t border-b ${colors.outlineBorderMaterial}`,
      },
      clear: 'border-l border-black/10',
    },
    hBar: 'w-4 h-0.5 bg-current block',
    vBar: 'w-0.5 h-4 bg-current block absolute inset-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2',
  };
};
