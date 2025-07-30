import React, { useRef } from 'react';
import { cls } from '../../shared/cls.js';
import { ListClasses } from '../../shared/classes/ListClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { ListColors } from '../../shared/colors/ListColors.js';
import { ListDividersContext } from '../shared/ListDividersContext.js';

const List = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ref,
    margin = 'my-8',
    nested,
    menuList,

    dividers,
    dividersIos = true,
    dividersMaterial = false,

    inset,
    insetIos,
    insetMaterial,
    strong,
    strongIos,
    strongMaterial,
    outline,
    outlineIos,
    outlineMaterial,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };
  const theme = useTheme();
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const hasDividers =
    typeof dividers === 'undefined'
      ? theme === 'ios'
        ? dividersIos
        : dividersMaterial
      : dividers;
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
      colors
    )
  );

  const classes = cls(
    c.base,

    isInset && c.inset,

    menuList && c.menuList,

    className
  );

  return (
    <ListDividersContext.Provider value={hasDividers}>
      <Component
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={classes}
        {...attrs}
      >
        <ul className={c.ul}>{children}</ul>
      </Component>
    </ListDividersContext.Provider>
  );
};

List.displayName = 'List';

export default List;
