import React from 'react';
import { cls } from '../shared/cls';
import { positionClass } from '../shared/position-class';
import { useThemeClasses } from '../shared/use-theme-classes';

const Block = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    margin = 'my-8',
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
      common: cls(
        `px-4 text-sm ${positionClass('relative', className)} z-10`,
        !nested && margin
      ),
    },
    strong: {
      common: cls(
        `py-4 ${colors.strongBg}`,
        !inset && !nested && hairlines && 'hairline-t hairline-b'
      ),
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
