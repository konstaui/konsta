import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Block = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    strong,
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

  const Component = component;

  const attrs = {
    ...rest,
  };

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    strongBg: 'bg-white',
    ...colorsProp,
  };

  const c = themeClasses({
    base: {
      initial: `px-4 ${!nested ? 'my-8' : ''} text-sm relative`,
    },
    strong: {
      initial: `py-4 ${colors.strongBg} ${
        !inset && !nested ? 'hairline-t hairline-b' : ''
      }`,
    },
    inset: {
      initial: `mx-4 overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded`,
      common: ``,
    },
  });

  const classes = cls(
    // base
    c.base,

    // strong
    strong && c.strong,

    // inset
    inset && c.inset,

    className
  );

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default Block;
