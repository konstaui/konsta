import { cls } from '../cls.js';

export const CheckboxClasses = (props, colors, darkClasses) => {
  return {
    base: cls(
      `k-checkbox cursor-pointer inline-flex align-middle relative`,
      darkClasses('dark:touch-ripple-white')
    ),
    iconWrap: {
      common: cls(`flex items-center justify-center text-white`),
      ios: 'w-5.5 h-5.5 rounded-full border',
      material: cls(
        'w-4.5 h-4.5 rounded-sm border-2',
        darkClasses('dark:text-black')
      ),
      notChecked: {
        ios: colors.borderIos,
        material: colors.borderMaterial,
      },
      checked: {
        ios: `${colors.bgCheckedIos} ${colors.borderCheckedIos}`,
        material: `${colors.bgCheckedMaterial} ${colors.borderCheckedMaterial}`,
      },
    },
    icon: {
      notChecked: 'opacity-0',
      checked: 'opacity-100',
    },
    indeterminateIcon: {
      common: cls(`bg-white w-3/4`),
      ios: 'h-0.5 rounded-full',
      material: cls('h-0.5', darkClasses('dark:bg-black')),
    },
    input: 'hidden',
  };
};
