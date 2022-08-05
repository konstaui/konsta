export const BlockTitleClasses = (props) => {
  const { withBlock } = props;
  return {
    base: {
      common: `pl-4-safe pr-4-safe mt-8 flex justify-between items-center ${
        withBlock ? '-mb-6' : 'mb-2'
      }`,
      ios: `font-semibold`,
      material: `text-sm font-medium text-primary`,
    },
  };
};
