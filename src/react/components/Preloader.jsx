import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import PreloaderIOS from './icons/PreloaderIOS.jsx';
import PreloaderMaterial from './icons/PreloaderMaterial.jsx';

const Preloader = forwardRef((props, ref) => {
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

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  const colors = {
    icon: 'text-primary',
    ...colorsProp,
  };

  const SVGComponent = theme === 'ios' ? PreloaderIOS : PreloaderMaterial;

  const c = themeClasses(
    {
      base: {
        common: cls(
          theme === 'ios' ? 'k-ios-preloader' : 'k-material-preloader',
          `inline-block ${size} ${colors.icon}`
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
    <Component ref={elRef} className={c.base} {...attrs}>
      <span className={c.inner}>
        <SVGComponent className="w-full h-full" />
      </span>
      {children}
    </Component>
  );
});

Preloader.displayName = 'Preloader';

export default Preloader;
