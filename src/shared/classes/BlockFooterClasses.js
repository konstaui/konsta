import { cls } from '../cls.js';

export const BlockFooterClasses = (props, colors) => {
  const { inset } = props;
  return {
    base: {
      common: cls(
        `k-block-footer mb-8 flex items-center -mt-6 text-sm`,
        inset ? 'pl-safe-8 pr-safe-8' : 'pl-safe-4 pr-safe-4'
      ),
      ios: colors.textIos,
      material: colors.textMaterial,
    },
  };
};
