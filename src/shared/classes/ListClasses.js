import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const ListClasses = (props, colors, classes) => {
  const { nested, margin, inset, strong, outline } = props;
  return {
    base: {
      common: cls(
        !nested && margin,
        !inset && !nested && outline && 'hairline-t hairline-b',
        inset && outline && 'border',
        positionClass('relative', classes),
        'z-10'
      ),
      ios: cls(
        strong && colors.strongBgIos,
        inset && outline && colors.outlineIos
      ),
      material: cls(
        strong && colors.strongBgMaterial,
        inset && outline && colors.outlineMaterial
      ),
    },
    ul: {
      common: cls(inset && 'no-safe-areas', 'last-child-hairline-b-none'),
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded-2xl`,
    },
    menuList: {
      common: 'py-1',
    },
  };
};
