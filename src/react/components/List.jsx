import React from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const List = (props) => {
  const {
    component = 'ul',
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

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const colors = {
    bg: 'bg-block-strong-light dark:bg-block-strong-dark',
    ...colorsProp,
  };

  const c = themeClasses({
    base: {
      common: cls(
        !nested && margin,
        colors.bg,
        !inset && !nested && hairlines && 'hairline-t hairline-b',
        positionClass('relative', className),
        'last-child-hairline-b-none z-10'
      ),
    },
    inset: {
      common: `mx-4 overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded`,
    },
    menuList: {
      common: 'py-1',
    },
  });

  const classes = cls(
    c.base,

    inset && c.inset,

    menuList && c.menuList,

    className
  );

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default List;
