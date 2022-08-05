import { cls } from '../cls.js';

export const SegmentedClasses = (props, colors, darkClasses) => {
  const { outline, rounded } = props;
  return {
    base: {
      common: `flex justify-center items-center overflow-hidden w-full`,
      square: 'rounded',
      rounded: 'rounded-full',
    },
    raised: outline
      ? 'shadow'
      : `shadow divide-x divide-black divide-opacity-10`,
    outline: {
      common: `${colors.border}`,
      ios: 'border-2',
      material: 'border',
    },
    outlineInner: {
      common: `-m-0.5 flex w-full justify-center items-center ${colors.divide}`,
      ios: 'divide-x-2',
      material: 'divide-x',
    },
    strong: cls(
      'p-0.5 bg-black bg-opacity-5 space-x-1 relative',
      darkClasses('dark:bg-white dark:bg-opacity-10')
    ),
    strongHighlight: cls(
      'absolute left-0.5 top-0.5 bottom-0.5 !ml-0 pointer-events-none duration-200',
      rounded ? 'rounded-full' : 'rounded',
      `bg-white shadow`,
      darkClasses('dark:bg-opacity-15 dark:touch-ripple-white')
    ),
  };
};
