import { cls } from '../cls.js';

export const TableRowClasses = (props, colors) => {
  const { header } = props;
  return {
    base: {
      common: 'align-middle relative',
      ios: header
        ? ''
        : cls(colors.bgIos, 'hairline-b last:hairline-transparent'),
      material: header
        ? ''
        : cls(colors.bgMaterial, `border-t ${colors.dividerMaterial}`),
    },
  };
};
