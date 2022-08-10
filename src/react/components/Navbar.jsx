import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { NavbarClasses } from '../../shared/classes/NavbarClasses.js';

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

  const colors = {
    bgIos: cls('bg-bars-ios-light', dark('dark:bg-bars-ios-dark')),
    bgMaterial: cls('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    title: cls('text-black', dark('dark:text-white')),
    ...colorsProp,
  };

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
