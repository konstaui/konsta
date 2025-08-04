import { cls } from '../cls.js';

export const ActionsButtonClasses = (props, colors, darkClasses) => {
  const { fontSizeIos, fontSizeMaterial, bold, dividers } = props;
  return {
    base: {
      common: cls(
        `k-actions-button flex items-center w-full px-4 relative z-10 overflow-hidden select-none`,
        dividers && 'hairline-b'
      ),
      ios: cls(
        `h-14`,
        colors.textIos,
        colors.bgIos,
        colors.activeBgIos,
        fontSizeIos,
        'first:rounded-t-4xl last:rounded-b-4xl justify-center',
        bold && 'font-semibold'
      ),
      material: cls(
        `h-12`,
        colors.textMaterial,
        colors.bgMaterial,
        colors.activeBgMaterial,
        fontSizeMaterial,
        'justify-start',
        darkClasses('dark:touch-ripple-white'),
        bold && 'font-medium'
      ),
    },
  };
};
