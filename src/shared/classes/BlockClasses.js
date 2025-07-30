import { cls } from '../cls.js';

export const BlockClasses = (props, colors) => {
  const { inset, nested, margin, padding, strong, outline } = props;
  return {
    base: {
      common: cls(
        `text-sm z-10 relative`,
        !inset && !nested && outline && 'hairline-t hairline-b',
        inset && outline && 'border',
        inset && 'px-4',
        !inset && 'pl-safe-4 pr-safe-4',
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
      common: `ml-safe-4 mr-safe-4 overflow-hidden`,
      ios: `rounded-3xl`,
      material: `rounded-2xl`,
    },
  };
};
