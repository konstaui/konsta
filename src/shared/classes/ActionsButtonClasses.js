import { cls } from '../cls.js';

export const ActionsButtonClasses = (props, colors, darkClasses) => {
  const { fontSizeIos, fontSizeMaterial, bold, hairlines } = props;
  return {
    base: {
      common: cls(
        colors.text,
        `flex items-center w-full px-4 relative z-10 overflow-hidden`,
        bold && 'font-semibold'
      ),
      ios: cls(
        `h-14`,
        colors.bgIos,
        colors.activeBgIos,
        fontSizeIos,
        hairlines && 'hairline-b',
        'first:rounded-t-xl last:rounded-b-xl justify-center'
      ),
      material: cls(
        `h-12`,
        colors.bgMaterial,
        colors.activeBgMaterial,
        fontSizeMaterial,
        'justify-start',
        darkClasses('dark:touch-ripple-white')
      ),
    },
  };
};
