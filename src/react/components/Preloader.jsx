import React from 'react';
import { useTheme } from '../shared/use-theme';

import PreloaderIOS from './icons/PreloaderIOS';
import PreloaderMaterial from './icons/PreloaderMaterial';

const Preloader = (props) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,

    size = 'w-8 h-8',

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

  const { theme, themeClasses } = useTheme({ ios, material });

  const colors = {
    text: 'text-primary',
    ...colorsProp,
  };

  const SVGComponent = theme === 'ios' ? PreloaderIOS : PreloaderMaterial;

  const c = themeClasses(
    {
      base: {
        common: `${
          theme === 'ios' ? 'ios-preloader' : 'material-preloader'
        } inline-block ${size} ${colors.text}`,
        material: `stroke-4`,
      },
      inner: {
        common: `block w-full h-full`,
      },
    },
    className
  );

  return (
    <Component className={c.base} {...attrs}>
      <span className={c.inner}>
        <SVGComponent className="w-full h-full" />
      </span>
      {children}
    </Component>
  );
};

export default Preloader;
