import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const List = (props) => {
  const {
    component = 'ul',
    className,
    colors: colorsProp,

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

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    bg: 'bg-white',
    ...colorsProp,
  };

  const c = themeClasses({
    base: {
      common: `${!nested ? 'my-8' : ''} ${colors.bg} ${
        !inset && !nested && hairlines ? 'hairline-t hairline-b' : ''
      } relative last-child:hairline-b-none`,
      ios: ``,
      material: ``,
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
