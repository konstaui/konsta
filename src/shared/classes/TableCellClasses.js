import { cls } from '../cls.js';

export const TableCellClasses = (props, colors) => {
  const { header } = props;
  return {
    base: {
      common: 'table-cell align-middle ',
      ios: cls(
        header
          ? `text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap leading-4 h-11 bg-transparent ${colors.textIos} p-4`
          : `h-11 relative  before:absolute  before:block before:z-15 before:h-px before:w-full before:left-0 before:right-auto before:bottom-auto before:top-0 ${colors.cellBorderIos} p-4`
      ),
      material: cls(
        header
          ? `${colors.textMaterial} p-6 text-xs font-medium overflow-hidden text-ellipsis whitespace-nowrap leading-4 h-14 bg-transparent`
          : `p-6 h-12 relative  before:absolute  before:block before:z-15 before:h-px before:w-full before:left-0 before:right-auto before:bottom-auto before:top-0 ${colors.cellBorderMaterial}`
      ),
    },
  };
};
