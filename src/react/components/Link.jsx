import React, { useRef } from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';
import { useTouchRipple } from '../shared/use-touch-ripple';

const Link = (props) => {
  const rippleElRef = useRef(null);

  const {
    component = 'a',
    className,
    colors: colorsProp,

    // Toolbar/navbar link
    navbar,
    toolbar,

    tabbar,
    tabbarActive,

    ios,
    material,

    onClick,

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

  const needsTouchRipple =
    theme === 'material' && (toolbar || tabbar || navbar);

  useTouchRipple(rippleElRef, needsTouchRipple);

  const colors = {
    text: 'text-primary',
    tabbarInactive: 'text-black dark:text-white dark:text-opacity-55',
    ...colorsProp,
  };

  const textColor =
    tabbar && !tabbarActive ? colors.tabbarInactive : colors.text;
  const tabbarState = tabbarActive ? 'active' : 'inactive';

  const c = themeClasses({
    base: {
      common: `${textColor} inline-flex space-x-1 justify-center items-center cursor-pointer select-none${
        needsTouchRipple ? ' touch-ripple-primary relative z-10' : ''
      }`,
      notTabbar: {
        ios: `active:opacity-30 duration-300 active:duration-0`,
        material: needsTouchRipple ? '' : `active:opacity-55`,
      },
    },
    tabbar: {
      common: 'w-full h-full relative duration-300',
      material: 'uppercase font-medium text-sm overflow-hidden z-10',
      active: {},
      inactive: {
        ios: 'text-opacity-40',
        material: 'text-opacity-55',
      },
    },
    tabbarHighlight: {
      material: 'absolute left-0 top-0 w-full h-0.5 bg-primary duration-300',
      active: 'opacity-100',
      inactive: 'opacity-0',
    },
    toolbar: {
      common: 'h-full max-h-12',
      material: 'px-3',
    },
    navbar: {
      common: 'h-full max-h-12',
      material: 'px-3',
    },
  });

  const classes = cls(
    // base
    c.base[tabbar ? 'default' : 'notTabbar'],

    toolbar && c.toolbar,

    navbar && c.navbar,

    tabbar && c.tabbar[tabbarState],

    className
  );

  return (
    <Component
      ref={rippleElRef}
      className={classes}
      {...attrs}
      onClick={onClick}
    >
      {theme === 'material' && tabbar && (
        <span className={c.tabbarHighlight[tabbarState]} />
      )}
      {children}
    </Component>
  );
};

export default Link;
