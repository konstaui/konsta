import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableRowClasses } from '../../shared/classes/TableRowClasses.js';
import { TableRowColors } from '../../shared/colors/TableRowColors.js';

const TableRow = forwardRef((props, ref) => {
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

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = TableRowColors(colorsProp, dark);

  const c = themeClasses(TableRowClasses({ ...props }, colors));

  const attrs = {
    ...rest,
  };

  return (
    <tr className={c.base} ref={elRef} {...attrs}>
      {children}
    </tr>
  );
});

TableRow.displayName = 'TableRow';
export default TableRow;
