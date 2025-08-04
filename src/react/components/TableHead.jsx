import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';

const TableHead = (props) => {
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
  const c = themeClasses(TableHeadClasses({ ...props }));

  const attrs = {
    ...rest,
  };

  return (
    <thead
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </thead>
  );
};

TableHead.displayName = 'TableHead';
export default TableHead;
