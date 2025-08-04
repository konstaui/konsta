export const BreadcrumbsClasses = (props) => {
  const { fontSizeIos, fontSizeMaterial } = props;
  return {
    base: {
      common: `k-breadcrumbs flex items-center justify-start overflow-auto whitespace-nowrap py-1 px-0 gap-3 no-scrollbar`,
      ios: fontSizeIos,
      material: fontSizeMaterial,
    },
  };
};
