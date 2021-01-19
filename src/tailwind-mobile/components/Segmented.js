import React from 'react';
import { classNames } from '../shared/class-names';

const Button = (props) => {
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

  let Component = tag;

  const attrs = {
    ...rest,
  };

  const theme = ios ? 'ios' : material ? 'material' : 'common';

  const colors = {
    border: 'border-primary',
    divide: 'divide-primary',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `flex justify-center items-center overflow-hidden w-full`,
    },
    shape: {
      default: 'rounded',
      rounded: 'rounded-full',
    },
    raised: outline ? 'shadow' : `shadow divide-x`,
    outline: `border-2 ${colors.border}`,
    outlineInner: `-m-0.5 flex w-full justify-center items-center divide-x-2 ${colors.divide}`,
    strong: 'p-1 bg-gray-200 space-x-1',
  };

  const classes = classNames([
    // base
    c.base.initial,
    c.base[theme],
    rounded ? c.shape.rounded : c.shape.default,
    raised && c.raised,
    outline && c.outline,
    strong && c.strong,

    className,
  ]);

  return (
    <Component className={classes} {...attrs}>
      {outline ? <span className={c.outlineInner}>{children}</span> : children}
    </Component>
  );
};

export default Button;
