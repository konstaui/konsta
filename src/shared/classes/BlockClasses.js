import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const BlockClasses = (props, colors, classes) => {
  const { inset, nested, margin, hairlines } = props;
  return {
    base: {
      common: cls(
        `text-sm z-10`,
        positionClass('relative', classes),
        inset && 'px-4',
        !inset && 'pl-4-safe pr-4-safe',
        !nested && margin
      ),
    },
    strong: {
      common: cls(
        `py-4`,
        !inset && !nested && hairlines && 'hairline-t hairline-b'
      ),
      ios: colors.strongBgIos,
      material: colors.strongBgMaterial,
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded-2xl`,
    },
  };
};
