import React from 'react';
import { classNames } from '../shared/classnames';

const BlockTitle = (props) => {
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
      initial: `px-4 mt-8 flex items-center -mb-6`,
      ios: `font-semibold`,
      material: `font-medium`,
      common: `ios:font-semibold material:font-medium`,
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

export default BlockTitle;
