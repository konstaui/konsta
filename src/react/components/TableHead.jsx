import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';

const TableHead = forwardRef((props, ref) => {
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
  const c = themeClasses(TableHeadClasses({ ...props }));

  const attrs = {
    ...rest,
  };

  return (
    <thead className={c.base} ref={elRef} {...attrs}>
      {children}
    </thead>
  );
});

TableHead.displayName = 'TableHead';
export default TableHead;
