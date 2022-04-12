import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ListClasses = (props, colors, classes) => {
  const { nested, margin, inset, hairlines } = props;
  return {
    base: {
      common: cls(
        !nested && margin,
        colors.bg,
        !inset && !nested && hairlines && 'hairline-t hairline-b',
        positionClass('relative', classes),
        'z-10'
      ),
    },
    ul: {
      common: cls(inset && 'no-safe-areas', 'last-child-hairline-b-none'),
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded`,
    },
    menuList: {
      common: 'py-1',
    },
  };
};
