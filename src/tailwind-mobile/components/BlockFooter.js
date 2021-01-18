import React from 'react';
import { classNames } from '../shared/classnames';

const BlockFooter = (props) => {
  const {
    tag = 'div',
    className,

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

  const theme = ios ? 'ios' : material ? 'material' : 'common';

  const c = {
    base: {
      initial: `px-4 mb-8 flex items-center -mt-6 text-opacity-55 text-black text-sm`,
      ios: ``,
      material: ``,
      common: ``,
    },
  };

  const classes = classNames([
    // base
    c.base.initial,
    c.base[theme],

    className,
  ]);

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default BlockFooter;
