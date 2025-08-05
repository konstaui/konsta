import { cls } from '../cls.js';

export const SegmentedClasses = (props, colors, darkClasses, baseClassName) => {
  const { outline, rounded, navbar } = props;
  return {
    base: {
      common: cls(
        `k-segmented flex justify-center items-center overflow-hidden w-full`,
        baseClassName
      ),
      square: {
        ios: 'rounded',
        material: 'rounded-lg',
      },
      rounded: 'rounded-full',
    },
    raised: outline
      ? 'shadow'
      : `shadow divide-x divide-black/10 rtl:divide-x-reverse`,
    outline: {
      common: ``,
      ios: `${colors.borderIos} border-2`,
      material: `${colors.borderMaterial} border`,
    },
    outlineInner: {
      common: `-m-0.5 flex w-full justify-center items-center rtl:divide-x-reverse`,
      ios: `divide-x-2 ${colors.divideIos}`,
      material: `divide-x ${colors.divideMaterial}`,
    },
    strong: {
      common: cls('gap-1 relative'),
      ios: cls(!navbar && colors.strongBgIos, navbar ? 'p-1' : 'p-0.5'),
      material: cls('p-0.5', colors.strongBgMaterial),
    },
    strongHighlight: {
      common: cls(
        'absolute !ms-0 pointer-events-none duration-200',
        rounded && 'rounded-full',
        `shadow`,
        darkClasses('dark:touch-ripple-white')
      ),
      ios: cls(
        navbar ? 'start-1 top-1 bottom-1' : 'start-0.5 top-0.5 bottom-0.5',
        !rounded && 'rounded',
        colors.strongHighlightBgIos
      ),
      material: cls(
        'start-0.5 top-0.5 bottom-0.5',
        !rounded && 'rounded-md',
        colors.strongHighlightBgMaterial
      ),
    },
  };
};
