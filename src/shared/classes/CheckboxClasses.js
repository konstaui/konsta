import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const CheckboxClasses = (props, colors, classes, darkClasses) => {
  return {
    base: cls(
      `cursor-pointer inline-flex align-middle`,
      positionClass('relative', classes),
      darkClasses('dark:touch-ripple-white')
    ),
    iconWrap: {
      common: cls(
        `flex items-center justify-center text-white`,
        darkClasses('dark:text-black')
      ),
      ios: 'w-5.5 h-5.5 rounded-full border',
      material: 'w-4.5 h-4.5 rounded-sm border-2',
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
      common: cls(`bg-white w-3/4`, darkClasses('dark:bg-black')),
      ios: 'h-0.5 rounded-full',
      material: 'h-0.5',
    },
    input: 'hidden',
  };
};
