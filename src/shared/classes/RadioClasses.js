import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const RadioClasses = (props, colors, classes) => {
  return {
    base: cls(
      `cursor-pointer inline-block align-middle`,
      positionClass('relative', classes)
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
        common: colors.borderChecked,
      },
    },
    icon: {
      ios: 'text-primary',
      material: `w-3/5 h-3/5 rounded-full ${colors.bgChecked}`,
      notChecked: 'opacity-0',
      checked: 'opacity-100',
    },
    indeterminateIcon: {
      common: 'bg-white w-3/4',
      ios: 'h-0.25',
      material: 'h-0.5',
    },
    input: {
      common: 'hidden',
    },
  };
};
