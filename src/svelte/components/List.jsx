import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { ListClasses } from '../../shared/classes/ListClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const List = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    margin = 'my-8',
    inset,
    nested,
    menuList,

    hairlines = true,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    bg: cls(`bg-block-strong-light`, dark('dark:bg-block-strong-dark')),
    ...colorsProp,
  };

  const c = themeClasses(
    ListClasses({ ...props, margin, hairlines }, colors, className)
  );

  const classes = cls(
    c.base,

    inset && c.inset,

    menuList && c.menuList,

    className
  );

  return (
    <Component ref={elRef} className={classes} {...attrs}>
      <ul className={c.ul}>{children}</ul>
    </Component>
  );
});

List.displayName = 'List';

export default List;
