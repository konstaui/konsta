import { cls } from '../cls.js';

export const TableRowClasses = (props, colors) => {
  const { header } = props;
  return {
    base: {
      common: 'align-middle relative',
      // hairline is set on table cells as Safari doesn't support
      // `position: relative` on table rows and row groups
      ios: header ? '' : cls(colors.bgIos, 'last:hairline-transparent'),
      material: header
        ? ''
        : cls(colors.bgMaterial, `border-t ${colors.dividerMaterial}`),
    },
  };
};
