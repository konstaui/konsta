import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const List = (props) => {
  const {
    tag = 'ul',
    className,
    colors: colorsProp,

    inset,
    nested,

    // Theme
    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = tag;

  const attrs = {
    ...rest,
  };

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    bg: 'bg-white',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `${!nested ? 'my-8' : ''} ${colors.bg} ${
        !inset && !nested ? 'hairline-t hairline-b' : ''
      } relative`,
      ios: ``,
      material: ``,
      common: ``,
    },
    inset: {
      initial: `mx-4 overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded`,
      common: `ios:rounded-md material:rounded`,
    },
  };

  const classes = cls(
    // base
    themeClasses(c.base),

    inset && themeClasses(c.inset),

    className
  );

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default List;
