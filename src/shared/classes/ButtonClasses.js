import { cls } from '../cls.js';

export const ButtonClasses = (props, colors, darkClasses) => {
  const { inline, segmented, segmentedStrong, segmentedActive, disabled } =
    props;
  return {
    base: {
      common: cls(
        'k-button flex text-center justify-center items-center appearance-none py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10 relative',
        inline ? 'inline-flex' : 'w-full flex',
        disabled && 'pointer-events-none',
        segmentedStrong && segmentedActive && 'k-segmented-strong-button-active'
      ),
      ios: `duration-100 font-medium px-2`,
      material: `duration-300 font-medium px-4`,

      square: {
        ios:
          segmented && !segmentedStrong
            ? 'first:rounded-s last:rounded-e'
            : 'rounded',
        material:
          segmented && !segmentedStrong
            ? 'first:rounded-lg-s last:rounded-lg-e'
            : 'rounded-lg',
      },

      rounded: segmented && !segmentedStrong ? '' : 'rounded-full',
    },
    style: {
      fill: {
        common: cls(disabled && cls(colors.disabledBg, colors.disabledText)),
        ios: cls(
          disabled
            ? cls(colors.disabledBg, colors.disabledText)
            : `${colors.fillTextIos} ${colors.fillBgIos}`
        ),
        material: cls(
          disabled
            ? cls(colors.disabledBg, colors.disabledText)
            : cls(
                colors.fillTextMaterial,
                colors.fillBgMaterial,
                colors.fillTouchRipple
              )
        ),
      },
      outline: {
        common: cls(
          disabled
            ? cls(colors.disabledText, colors.disabledBorder)
            : colors.touchRipple
        ),
        ios: cls(
          !segmented && 'border-2',
          !disabled && !segmented && colors.outlineBorderIos,
          !disabled && cls(colors.textIos, colors.outlineBgIos)
        ),
        material: cls(
          !segmented && 'border',
          !disabled && !segmented && colors.outlineBorderMaterial,
          !disabled && cls(colors.textMaterial, colors.outlineBgMaterial)
        ),
      },
      clear: {
        common: cls(disabled ? colors.disabledText : colors.touchRipple),
        ios: !disabled && cls(colors.textIos, colors.clearBgIos),
        material: !disabled && cls(colors.textMaterial, colors.clearBgMaterial),
      },
      tonal: {
        common: disabled
          ? cls(colors.disabledBg, colors.disabledText)
          : cls(colors.touchRipple),
        ios: !disabled && cls(colors.tonalTextIos, colors.tonalBgIos),
        material:
          !disabled && cls(colors.tonalTextMaterial, colors.tonalBgMaterial),
      },
      segmentedStrong: cls(
        'active:bg-black/10',
        darkClasses('dark:active:bg-white/5 dark:touch-ripple-white')
      ),
      segmentedStrongActive: {
        ios: cls('duration-200', colors.segmentedStrongTextIos),
        material: cls('duration-0', colors.segmentedStrongTextMaterial),
      },
    },
    size: {
      small: {
        ios: `text-sm h-7`,
        material: `text-sm h-8`,
      },
      medium: {
        common: 'text-sm',
        ios: `h-8.5 text-[15px]`,
        material: `h-10`,
      },
      large: {
        ios: `h-12 text-[17px] font-semibold`,
        material: `h-12`,
      },
    },
    raised: `shadow active:shadow-lg`,
  };
};
