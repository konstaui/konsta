import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';

const TableBody = (props) => {
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

  const c = themeClasses(TableBodyClasses({ ...props }));

  const attrs = {
    ...rest,
  };

  return (
    <tbody
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </tbody>
  );
};

TableBody.displayName = 'TableBody';
export default TableBody;
