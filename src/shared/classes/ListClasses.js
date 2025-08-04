import { cls } from '../cls.js';

export const ListClasses = (props, colors) => {
  const { nested, inset, strong, outline } = props;
  return {
    base: {
      common: cls(
        'k-list',
        !nested && 'my-8',
        !inset && !nested && outline && 'hairline-t hairline-b',
        inset && outline && 'border',
        'z-10 relative'
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
      common: `ml-safe-4 mr-safe-4 overflow-hidden`,
      ios: `rounded-3xl`,
      material: `rounded-2xl`,
    },
    menuList: {
      common: 'py-1',
    },
  };
};
