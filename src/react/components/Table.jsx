import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableClasses } from '../../shared/classes/TableClasses.js';

const Table = forwardRef((props, ref) => {
  const {
    className,

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
  const c = themeClasses(TableClasses({ ...props }));

  const attrs = {
    ...rest,
  };

  return (
    <table className={c.base} ref={elRef} {...attrs}>
      {children}
    </table>
  );
});

Table.displayName = 'Table';
export default Table;
