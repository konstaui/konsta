import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableCellClasses } from '../../shared/classes/TableCellClasses.js';
import { TableCellColors } from '../../shared/colors/TableCellColors.js';

const TableCell = forwardRef((props, ref) => {
  const {
    className,
    colors: colorsProp,

    header,

    ios,
    material,

    children,

    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = header ? 'th' : 'td';

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = TableCellColors(colorsProp, dark);

  const c = themeClasses(TableCellClasses({ ...props }, colors, className));

  const attrs = {
    ...rest,
  };

  return (
    <Component className={c.base} ref={elRef} {...attrs}>
      {children}
    </Component>
  );
});

TableCell.displayName = 'TableCell';
export default TableCell;
