import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableHeadClasses } from '../../shared/classes/TableHeadClasses.js';
import { TableHeadColors } from '../../shared/colors/TableHeadColors.js';

const TableHead = forwardRef((props, ref) => {
  const {
    component = 'thead',
    className,
    colors: colorsProp,

    ios,
    material,

    children,

    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = TableHeadColors(colorsProp, dark);

  const c = themeClasses(TableHeadClasses({ ...props }, colors));

  const attrs = {
    ...rest,
  };

  return (
    <Component className={c.base} ref={elRef} {...attrs}>
      {children}
    </Component>
  );
});

TableHead.displayName = 'TableHead';
export default TableHead;
