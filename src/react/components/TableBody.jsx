import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableBodyClasses } from '../../shared/classes/TableBodyClasses.js';
import { TableBodyColors } from '../../shared/colors/TableBodyColors.js';

const TableBody = forwardRef((props, ref) => {
  const {
    component = 'tbody',
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
  const colors = TableBodyColors(colorsProp, dark);

  const c = themeClasses(TableBodyClasses({ ...props }, colors));

  const attrs = {
    ...rest,
  };

  return (
    <Component className={c.base} ref={elRef} {...attrs}>
      {children}
    </Component>
  );
});

TableBody.displayName = 'TableBody';
export default TableBody;
