export const TableRowClasses = (props, colors) => {
  const { header } = props;
  return {
    base: {
      common: 'table-row align-middle border-inherit',
      ios: header ? '' : `${colors.bgIos}`,
      material: header ? '' : `${colors.bgMaterial}`,
    },
  };
};
