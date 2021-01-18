import React from 'react';
import { classNames } from '../shared/classnames';

const Toolbar = (props) => {
  const {
    tag = 'div',
    className,
    top,
    // Theme
    ios,
    material,
    children,
    ...rest
  } = props;

  const Component = tag;

  const theme = ios ? 'ios' : material ? 'material' : 'common';

  const attrs = {
    ...rest,
  };

  const c = {
    base: {
      initial: 'w-full relative z-50',
      ios: 'h-11',
      material: 'h-12',
      common: 'ios:h-11 material:h-12',
    },
    bg: {
      initial: 'absolute w-full h-full left-0 top-0',
      ios: `hairline-t bg-gray-100 ${top ? 'transform rotate-180' : ''}`,
      material: `shadow-md bg-white ${!top ? 'transform rotate-180' : ''}`,
      common: `ios:hairline-t ios:bg-gray-100 ${
        top ? 'ios:transform ios:rotate-180' : ''
      } material:shadow-md material:bg-white ${
        !top ? 'material:transform material:rotate-180' : ''
      }`,
    },
    inner: {
      initial: 'flex relative justify-between items-center w-full h-full px-2',
      ios: '',
      material: '',
      common: '',
    },
  };

  const classes = classNames([c.base.initial, c.base[theme], className]);
  const bgClasses = classNames(c.bg.initial, c.bg[theme]);
  const innerClasses = classNames(c.inner.initial, c.inner[theme]);
  return (
    <Component className={classes} {...attrs}>
      <div className={bgClasses} />
      <div className={innerClasses}>{children}</div>
    </Component>
  );
};

export default Toolbar;
