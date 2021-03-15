import React from 'react';
import { cls } from '../shared/cls';
import { useThemeClasses } from '../shared/use-theme-classes';

const Block = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    strong,
    inset,
    nested,

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
    strongBg: 'bg-block-strong-light dark:bg-block-strong-dark',
    ...colorsProp,
  };

  const c = themeClasses({
    base: {
      common: `px-4 ${!nested ? 'my-8' : ''} text-sm relative z-10`,
    },
    strong: {
      common: `py-4 ${colors.strongBg} ${
        !inset && !nested && hairlines ? 'hairline-t hairline-b' : ''
      }`,
    },
    inset: {
      common: `mx-4 overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded`,
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
