import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Link = (props) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,

    // Toolbar/navbar link
    navbar,
    toolbar,

    tabbar,
    tabbarActive,

    // Theme
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

  const { theme, themeClasses } = useTheme({ ios, material });

  const colors = {
    text: 'text-primary',
    tabbarInactive: 'text-black',
    ...colorsProp,
  };

  const textColor =
    tabbar && !tabbarActive ? colors.tabbarInactive : colors.text;
  const tabbarState = tabbarActive ? 'active' : 'inactive';

  const c = themeClasses({
    base: {
      initial: `${textColor} inline-flex space-x-1 justify-center items-center cursor-pointer select-none`,
      notTabbar: {
        ios: `active:opacity-30 duration-300 active:duration-0`,
        material: `active:opacity-55`,
      },
    },
    tabbar: {
      initial: 'w-full h-full relative duration-300',
      material: 'uppercase font-medium text-sm',
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
      initial: 'h-full max-h-12',
      material: 'px-3',
    },
    navbar: {
      initial: 'h-full max-h-12',
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
    <Component className={classes} {...attrs} onClick={onClick}>
      {theme == 'material' && tabbar && (
        <span className={c.tabbarHighlight[tabbarState]} />
      )}
      {children}
    </Component>
  );
};

export default Link;
