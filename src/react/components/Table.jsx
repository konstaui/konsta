import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableClasses } from '../../shared/classes/TableClasses.js';

const Table = (props) => {
  const {
    className,
    ios,
    material,

    children,

    ref,

    ...rest
  } = props;

  const elRef = useRef(null);

  const themeClasses = useThemeClasses({ ios, material });
  const c = themeClasses(TableClasses({ ...props }));

  const attrs = {
    ...rest,
  };

  return (
    <table
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </table>
  );
};

Table.displayName = 'Table';
export default Table;
