import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

import PreloaderIOS from './icons/PreloaderIOS.jsx';
import PreloaderMaterial from './icons/PreloaderMaterial.jsx';
import { PreloaderClasses } from '../../shared/classes/PreloaderClasses.js';
import { PreloaderColors } from '../../shared/colors/PreloaderColors.js';

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
  const dark = useDarkClasses();
  const colors = PreloaderColors(colorsProp, dark);

  const SVGComponent = theme === 'ios' ? PreloaderIOS : PreloaderMaterial;

  const c = themeClasses(
    PreloaderClasses({ ...props, size }, colors, theme),
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
