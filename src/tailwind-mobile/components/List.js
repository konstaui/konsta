import React from 'react';
import { classNames } from '../shared/classnames';

const List = (props) => {
  const {
    tag = 'ul',
    className,

    inset,

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
      initial: `my-8 bg-white ${
        !inset ? 'hairline-t hairline-b' : ''
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

  const classes = classNames([
    // base
    c.base.initial,
    c.base[theme],

    inset && c.inset.initial,
    inset && c.inset[theme],

    className,
  ]);

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default List;
