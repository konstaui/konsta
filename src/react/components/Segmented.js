import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Segmented = (props) => {
  const {
    tag = 'div',
    className,
    colors: colorsProp,

    // Theme
    ios,
    material,

    // Style props
    raised,
    outline,
    strong,
    rounded,

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
    border: 'border-primary',
    divide: 'divide-primary',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `flex justify-center items-center overflow-hidden w-full`,
      default: 'rounded',
      rounded: 'rounded-full',
    },
    raised: outline ? 'shadow' : `shadow divide-x`,
    outline: `border-2 ${colors.border}`,
    outlineInner: `-m-0.5 flex w-full justify-center items-center divide-x-2 ${colors.divide}`,
    strong: 'p-1 bg-gray-200 space-x-1',
  };

  const classes = cls(
    // base
    themeClasses(c.base, rounded ? 'rounded' : 'default'),
    raised && c.raised,
    outline && c.outline,
    strong && c.strong,

    className
  );

  return (
    <Component className={classes} {...attrs}>
      {outline ? <span className={c.outlineInner}>{children}</span> : children}
    </Component>
  );
};

export default Segmented;
