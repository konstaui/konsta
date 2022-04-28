import { cls } from '../cls.js';

export const ActionsLabelClasses = (props, colors) => {
  const { fontSizeIos, fontSizeMaterial, hairlines } = props;
  return {
    base: {
      common: cls(
        colors.bg,
        colors.text,
        `flex items-center w-full px-4 relative z-10 overflow-hidden ${colors.activeBg}`
      ),
      ios: cls(
        `h-14`,
        fontSizeIos,
        hairlines && 'hairline-b',
        'first:rounded-t-xl last:rounded-b-xl justify-center'
      ),
      material: cls(`h-12`, fontSizeMaterial, 'justify-start'),
    },
  };
};
