export const BreadcrumbsClasses = (props) => {
  const { fontSizeIos, fontSizeMaterial } = props;
  return {
    base: {
      common: `flex items-center justify-start overflow-auto whitespace-nowrap py-1 px-0 gap-3 no-scrollbar`,
      ios: fontSizeIos,
      material: fontSizeMaterial,
    },
  };
};
