import { cls } from '../cls.js';

export const RadioClasses = (props, colors, darkClasses, baseClassName) => {
  return {
    base: cls(
      `k-radio cursor-pointer inline-flex align-middle relative`,
      darkClasses('dark:touch-ripple-white'),
      baseClassName
    ),
    iconWrap: {
      common: 'flex items-center justify-center rounded-full',
      ios: 'w-5.5 h-5.5 border',
      material: 'w-5 h-5 border-2',
      notChecked: {
        ios: colors.borderIos,
        material: colors.borderMaterial,
      },
      checked: {
        ios: colors.borderCheckedIos,
        material: colors.borderCheckedMaterial,
      },
    },
    icon: {
      ios: 'text-primary',
      material: `w-3 h-3 rounded-full ${colors.bgCheckedMaterial}`,
      notChecked: 'opacity-0',
      checked: 'opacity-100',
    },
    indeterminateIcon: {
      common: 'bg-white w-3/4',
      ios: 'h-0.25',
      material: 'h-0.5',
    },
    input: {
      common: 'sr-only',
    },
  };
};
