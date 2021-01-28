import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Block = (props) => {
  const {
    tag = 'div',
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

  const Component = tag;

  const attrs = {
    ...rest,
  };

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    strongBg: 'bg-white',
    ...colorsProp,
  };

  const c = {
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
      common: `ios:rounded-md material:rounded`,
    },
  };

  const classes = cls(
    // base
    themeClasses(c.base),

    // strong
    strong && themeClasses(c.strong),

    // inset
    inset && themeClasses(c.inset),

    className
  );

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default Block;
