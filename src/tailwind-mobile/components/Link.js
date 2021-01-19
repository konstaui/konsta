import React from 'react';
import { classNames } from '../shared/class-names';

const Link = (props) => {
  const {
    tag = 'a',
    className,
    colors: colorsProp,

    // Toolbar/navbar link
    navbar,
    toolbar,

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

  const colors = {
    text: 'text-primary',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `${colors.text} inline-flex space-x-1 items-center cursor-pointer select-none`,
      ios: `active:opacity-30 duration-300 active:duration-0`,
      material: `active:opacity-55`,
      common: `ios-active:opacity-30 ios:duration-300 ios-active:duration-0 material-active:opacity-55`,
    },
    toolbar: {
      initial: 'h-full max-h-12',
      material: 'p-x-3',
      common: 'material:px-2',
    },
    navbar: {
      initial: 'h-full max-h-12',
      material: 'p-x-3',
      common: 'material:px-2',
    },
  };

  const classes = classNames([
    // base
    c.base.initial,
    c.base[theme],

    // toolbar
    toolbar && c.toolbar.initial,
    toolbar && c.toolbar[theme],

    // navbar
    navbar && c.navbar.initial,
    navbar && c.navbar[theme],

    className,
  ]);

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default Link;
