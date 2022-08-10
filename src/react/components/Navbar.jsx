import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';
import { NavbarColors } from '../../shared/colors/NavbarColors.js';

const Navbar = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,

    bgClassName = '',
    innerClassName = '',
    leftClassName = '',
    titleClassName = '',
    subtitleClassName = '',
    rightClassName = '',
    subnavbarClassName = '',

    colors: colorsProp,
    translucent = true,
    hairlines = true,

    fontSizeIos = 'text-navbar-ios',
    fontSizeMaterial = 'text-navbar-material',

    left,
    title,
    subtitle,
    right,
    subnavbar,
    ios,
    material,
    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const attrs = {
    ...rest,
  };

  const colors = NavbarColors(colorsProp, dark);

  const c = themeClasses(
    NavbarClasses(
      {
        ...props,
        translucent,
        hairlines,
        fontSizeIos,
        fontSizeMaterial,
        bgClassName,
        innerClassName,
        leftClassName,
        titleClassName,
        subtitleClassName,
        rightClassName,
        subnavbarClassName,
      },
      colors,
      className
    ),
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <div className={c.bg} />
      <div className={c.inner}>
        {left && <div className={c.left}>{left}</div>}
        {(title || subtitle) && (
          <div className={c.title}>
            {title}
            {subtitle && <div className={c.subtitle}>{subtitle}</div>}
          </div>
        )}
        {right && <div className={c.right}>{right}</div>}
        {children}
      </div>
      {subnavbar && <div className={c.subnavbar}>{subnavbar}</div>}
    </Component>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
