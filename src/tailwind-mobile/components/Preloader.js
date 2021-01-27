import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

import PreloaderIOS from './icons/PreloaderIOS';
import PreloaderMaterial from './icons/PreloaderMaterial';

const Preloader = (props) => {
  const {
    tag = 'span',
    className,
    colors: colorsProp,

    size = 'w-8 h-8',

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

  const { theme, themeClasses } = useTheme({ ios, material });

  const colors = {
    text: 'text-primary',
    ...colorsProp,
  };

  const SVGComponent = theme === 'ios' ? PreloaderIOS : PreloaderMaterial;

  const c = {
    base: {
      initial: `${theme}-preloader inline-block ${size} ${colors.text}`,
      ios: `fill-current`,
      material: `stroke-current stroke-4`,
    },
    inner: {
      initial: `block w-full h-full`,
      ios: '',
      material: '',
    },
  };

  const classes = cls(
    // base
    themeClasses(c.base),

    className
  );
  const innerClasses = themeClasses(c.inner);

  return (
    <Component className={classes} {...attrs}>
      <span className={innerClasses}>
        <SVGComponent className="w-full h-full" />
      </span>
      {children}
    </Component>
  );
};

export default Preloader;
