import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';

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

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  const colors = {
    text: 'text-primary',
    ...colorsProp,
  };

  const SVGComponent = theme === 'ios' ? PreloaderIOS : PreloaderMaterial;

  const c = themeClasses(
    {
      base: {
        common: cls(
          theme === 'ios' ? 'twm-ios-preloader' : 'twm-material-preloader',
          `inline-block ${size} ${colors.text}`
        ),
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
