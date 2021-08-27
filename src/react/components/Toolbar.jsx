import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

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
    {
      base: {
        common: cls(
          `w-full z-20`,
          positionClass('relative', className),
          !top && 'pb-safe'
        ),
      },
      bg: {
        common: cls('absolute w-full h-full left-0 top-0', bgClassName),
        ios: cls(
          hairlines && (top ? 'hairline-b' : 'hairline-t'),
          colors.bgIos,
          translucent && 'translucent'
        ),
        material: cls(
          `shadow-md ${colors.bgMaterial}`,
          !top && 'transform rotate-180'
        ),
      },
      inner: {
        common: cls(
          `flex relative justify-between items-center w-full h-full overflow-hidden`,
          innerClassName
        ),
        ios: 'pl-2-safe pr-2-safe',
        material: !tabbar ? 'pl-2-safe pr-2-safe' : '',
        toolbar: {
          ios: 'h-11',
          material: 'h-12',
        },
        tabbarLabels: {
          ios: 'h-12.5',
          material: 'h-14',
        },
      },
    },
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
