import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const BlockClasses = (props, colors, classes) => {
  const { inset, nested, margin, padding, strong, outline } = props;
  return {
    base: {
      common: cls(
        `text-sm z-10`,
        positionClass('relative', classes),
        !inset && !nested && outline && 'hairline-t hairline-b',
        inset && outline && 'border',
        inset && 'px-4',
        !inset && 'pl-4-safe pr-4-safe',
        !nested && margin,
        (strong || outline) && padding
      ),
      ios: cls(
        colors.textIos,
        strong && colors.strongBgIos,
        inset && outline && colors.outlineIos
      ),
      material: cls(
        colors.textMaterial,
        strong && colors.strongBgMaterial,
        inset && outline && colors.outlineMaterial
      ),
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded-2xl`,
    },
  };
};
