import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { LinkClasses } from '../../shared/classes/LinkClasses.js';
import { LinkColors } from '../../shared/colors/LinkColors.js';

const Link = forwardRef((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,

    // Toolbar/navbar link
    navbar,
    toolbar,

    iconOnly,

    tabbar,
    tabbarActive,

    touchRipple = true,
    ios,
    material,

    onClick,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: rippleElRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const needsTouchRipple =
    theme === 'material' && (toolbar || tabbar || navbar) && touchRipple;

  useTouchRipple(rippleElRef, needsTouchRipple);

  const colors = LinkColors(colorsProp, dark);

  const themeTextColor =
    theme === 'material' ? colors.textMaterial : colors.textIos;
  const textColor =
    tabbar && !tabbarActive ? colors.tabbarInactive : themeTextColor;
  const tabbarState = tabbarActive ? 'active' : 'inactive';

  const c = themeClasses(
    LinkClasses(props, { textColor, needsTouchRipple }, className)
  );

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
});

Link.displayName = 'Link';

export default Link;
