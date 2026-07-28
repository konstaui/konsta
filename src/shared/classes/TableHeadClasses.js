export const TableHeadClasses = () => {
  return {
    base: {
      common: 'align-middle relative',
      // hairline is set on table cells as Safari doesn't support
      // `position: relative` on table rows and row groups
      ios: '',
      material: '',
    },
  };
};
