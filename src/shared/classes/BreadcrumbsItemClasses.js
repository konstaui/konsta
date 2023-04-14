import { cls } from '../cls.js';

export const BreadcrumbsItemClasses = (props, colors) => {
  const { active } = props;
  return {
    base: {
      common: cls(`flex items-center overflow-hidden`),
      ios: cls(
        colors.textIos,
        colors.bgIos,
        active ? colors.textActiveIos : colors.textIos,
        active && 'font-semibold'
      ),
      material: cls(
        `font-medium px-2 py-1 rounded-lg`,
        colors.bgMaterial,
        active ? colors.textActiveMaterial : colors.textMaterial
      ),
    },
  };
};
