import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableRowClasses } from '../../shared/classes/TableRowClasses.js';
import { TableRowColors } from '../../shared/colors/TableRowColors.js';

const TableRow = (props) => {
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

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = TableRowColors(colorsProp, dark);

  const c = themeClasses(TableRowClasses({ ...props }, colors));

  const attrs = {
    ...rest,
  };

  return (
    <tr
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </tr>
  );
};

TableRow.displayName = 'TableRow';
export default TableRow;
