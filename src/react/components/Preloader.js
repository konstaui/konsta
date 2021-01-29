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

    // Theme
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
        initial: `${
          theme === 'ios' ? 'ios-preloader' : 'material-preloader'
        } inline-block ${size} ${colors.text}`,
        ios: `fill-current`,
        material: `stroke-current stroke-4`,
      },
      inner: {
        initial: `block w-full h-full`,
        ios: '',
        material: '',
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
