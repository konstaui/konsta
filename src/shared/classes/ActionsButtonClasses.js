import { cls } from '../cls.js';

export const ActionsButtonClasses = (props, colors, darkClasses) => {
  const { fontSizeIos, fontSizeMaterial, bold, hairlines } = props;
  return {
    base: {
      common: cls(
        `flex items-center w-full px-4 relative z-10 overflow-hidden`
      ),
      ios: cls(
        `h-14`,
        colors.textIos,
        colors.bgIos,
        colors.activeBgIos,
        fontSizeIos,
        hairlines && 'hairline-b',
        'first:rounded-t-xl last:rounded-b-xl justify-center',
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
