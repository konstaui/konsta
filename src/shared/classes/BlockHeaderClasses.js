import { cls } from '../cls.js';

export const BlockHeaderClasses = (props, colors) => {
  const { inset } = props;
  return {
    base: {
      common: cls(
        `mt-8 flex items-center -mb-6 text-sm`,
        inset ? 'pl-8-safe pr-8-safe' : 'pl-4-safe pr-4-safe'
      ),
      ios: colors.textIos,
      material: colors.textMaterial,
    },
  };
};
