import { cls } from '../cls.js';

export const ActionsLabelClasses = (props, colors) => {
  const { fontSizeIos, fontSizeMaterial, dividers } = props;
  return {
    base: {
      common: cls(
        `k-actions-label flex items-center w-full px-4 relative z-10 overflow-hidden ${colors.activeBg}`,
        dividers && 'hairline-b'
      ),
      ios: cls(
        `h-14`,
        colors.bgIos,
        colors.textIos,
        fontSizeIos,
        'first:rounded-t-4xl last:rounded-b-4xl justify-center'
      ),
      material: cls(
        `h-12`,
        colors.bgMaterial,
        colors.textMaterial,
        fontSizeMaterial,
        'font-medium',
        'justify-start'
      ),
    },
  };
};
