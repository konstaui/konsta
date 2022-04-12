import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ToolbarClasses } from '../../shared/classes/ToolbarClasses.js';

const Toolbar = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,

    bgClassName = '',
    innerClassName = '',

    hairlines = true,

    tabbar,
    tabbarLabels,

    top,

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
    bgMaterial: cls(
      'bg-bars-material-light',
      dark('dark:bg-bars-material-dark')
    ),
    ...colorsProp,
  };

  const c = themeClasses(
    ToolbarClasses(
      { ...props, hairlines, translucent, bgClassName, innerClassName },
      colors,
      className
    ),
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <div className={c.bg} />
      <div
        className={c.inner[tabbar && tabbarLabels ? 'tabbarLabels' : 'toolbar']}
      >
        {children}
      </div>
    </Component>
  );
});

Toolbar.displayName = 'Toolbar';

export default Toolbar;
