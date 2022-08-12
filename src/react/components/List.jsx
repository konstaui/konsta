import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { ListClasses } from '../../shared/classes/ListClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { ListColors } from '../../shared/colors/ListColors.js';

const List = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    margin = 'my-8',
    nested,
    menuList,

    inset,
    insetIos,
    insetMaterial,
    strong,
    strongIos,
    strongMaterial,
    outline,
    outlineIos,
    outlineMaterial,

    // hairlines = true,

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
  const theme = useTheme();
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const isStrong =
    typeof strong === 'undefined'
      ? theme === 'ios'
        ? strongIos
        : strongMaterial
      : strong;

  const isOutline =
    typeof outline === 'undefined'
      ? theme === 'ios'
        ? outlineIos
        : outlineMaterial
      : outline;
  const isInset =
    typeof inset === 'undefined'
      ? theme === 'ios'
        ? insetIos
        : insetMaterial
      : inset;

  const colors = ListColors(colorsProp, dark);

  const c = themeClasses(
    ListClasses(
      {
        ...props,
        margin,
        inset: isInset,
        strong: isStrong,
        outline: isOutline,
      },
      colors,
      className
    )
  );

  const classes = cls(
    c.base,

    isInset && c.inset,

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
