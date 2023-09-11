import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableClasses } from '../../shared/classes/TableClasses.js';
import { TableColors } from '../../shared/colors/TableColors.js';

const Table = forwardRef((props, ref) => {
  const {
    component = 'div',
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
  const colors = TableColors(colorsProp, dark);

  const c = themeClasses(TableClasses({ ...props }, colors));

  const attrs = {
    ...rest,
  };

  return (
    <Component className={c.base} ref={elRef} {...attrs}>
      <table className={c.table}>{children}</table>
    </Component>
  );
});

Table.displayName = 'Table';
export default Table;
