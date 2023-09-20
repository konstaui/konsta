import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';

const TableBody = forwardRef((props, ref) => {
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

  const c = themeClasses(TableBodyClasses({ ...props }));

  const attrs = {
    ...rest,
  };

  return (
    <tbody className={c.base} ref={elRef} {...attrs}>
      {children}
    </tbody>
  );
});

TableBody.displayName = 'TableBody';
export default TableBody;
