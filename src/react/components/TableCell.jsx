import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableCellClasses } from '../../shared/classes/TableCellClasses.js';
import { TableCellColors } from '../../shared/colors/TableCellColors.js';

const TableCell = (props) => {
  const {
    className,
    colors: colorsProp,
    header,

    ios,
    material,

    children,

    ref,

    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = header ? 'th' : 'td';

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = TableCellColors(colorsProp, dark);

  const c = themeClasses(TableCellClasses({ ...props }, colors, className));

  const attrs = {
    ...rest,
  };

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </Component>
  );
};

TableCell.displayName = 'TableCell';
export default TableCell;
