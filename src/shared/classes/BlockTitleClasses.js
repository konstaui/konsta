import { cls } from '../cls.js';

export const BlockTitleClasses = (props, colors) => {
  const { withBlock, medium, large } = props;
  return {
    base: {
      common: `pl-4-safe pr-4-safe mt-8 flex justify-between items-center ${
        withBlock ? '-mb-6' : 'mb-2'
      }`,
      ios: cls(
        `font-semibold ${colors.textIos}`,
        large && 'text-[1.5rem]',
        medium && 'text-[1.125rem]',
        !medium && !large && 'text-[1rem]'
      ),
      material: cls(
        `font-medium ${colors.textMaterial}`,
        large && 'text-[1.375rem]',
        medium && 'text-[1rem]',
        !medium && !large && 'text-[0.875rem]'
      ),
    },
  };
};
