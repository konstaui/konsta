import React from 'react';
import { classNames } from '../shared/class-names';
import { useTheme } from '../shared/use-theme';

const Toolbar = (props) => {
  const {
    tag = 'div',
    className,
    colors: colorsProp,
    position = 'relative',

    top,
    // Theme
    ios,
    material,
    children,
    ...rest
  } = props;

  const Component = tag;

  const theme = useTheme({ ios, material });

  const attrs = {
    ...rest,
  };

  const colors = {
    bg: theme === 'ios' ? 'bg-gray-100' : 'bg-white',
    iosBg: 'ios:bg-gray-100',
    materialBg: 'material:bg-white',
    ...colorsProp,
  };

  const c = {
    base: {
      initial: `w-full ${position} z-50`,
      ios: 'h-11',
      material: 'h-12',
      common: 'ios:h-11 material:h-12',
    },
    bg: {
      initial: 'absolute w-full h-full left-0 top-0',
      ios: `${top ? 'hairline-b' : 'hairline-t'} ${colors.bg}`,
      material: `shadow-md ${colors.bg} ${!top ? 'transform rotate-180' : ''}`,
      common: `${top ? 'ios:hairline-b' : 'ios:hairline-t'} ${
        colors.iosBg
      } material:shadow-md ${colors.materialBg} ${
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
