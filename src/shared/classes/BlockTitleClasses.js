import { cls } from '../cls.js';

export const BlockTitleClasses = (props, colors) => {
  const { withBlock, medium, large } = props;
  return {
    base: {
      common: `k-block-title pl-safe-4 pr-safe-4 mt-8 flex justify-between items-center ${
        withBlock ? '-mb-6' : 'mb-2'
      }`,
      ios: cls(
        `font-semibold ${colors.textIos}`,
        large && cls(colors.largeTextIos, 'text-[1.375rem]'),
        medium && cls(colors.mediumTextIos, 'text-[1.25rem]'),
        !medium && !large && 'text-[17px]'
      ),
      material: cls(
        `font-medium ${colors.textMaterial}`,
        large && cls(colors.largeTextMaterial, 'text-[1.375rem]'),
        medium && cls(colors.mediumTextMaterial, 'text-[1rem]'),
        !medium && !large && 'text-[0.875rem]'
      ),
    },
  };
};
