import React, { useRef } from 'react';
import { cls } from '../../shared/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { LinkClasses } from '../../shared/classes/LinkClasses.js';
import { LinkColors } from '../../shared/colors/LinkColors.js';
import { useToolbarContext } from './ToolbarContext.jsx';
import { useNavbarContext } from './NavbarContext.jsx';

const Link = (props) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,

    iconOnly,
    linkProps = {},

    tabbarActive,

    ios,
    material,

    onClick,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;
  const { navbar } = useNavbarContext();
  const { toolbar, tabbar, tabbarLabels, tabbarIcons } = useToolbarContext();

  const rippleElRef = useRef(null);

  const Component = component;

  const attrs = {
    ...linkProps,
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const needsTouchRipple =
    theme === 'material' && (toolbar || tabbar || navbar);

  useTouchRipple(rippleElRef, needsTouchRipple);

  const colors = LinkColors(colorsProp, dark);

  // prettier-ignore
  const themeTextColor = navbar ?
    (
      theme === 'material' ? colors.navbarTextMaterial : colors.navbarTextIos
    ) :
    toolbar ? (theme === 'material' ? colors.toolbarTextMaterial : colors.toolbarTextIos) :
    (
      theme === 'material' ? colors.textMaterial : colors.textIos
    );
  const textColor =
    tabbar && !tabbarActive ? colors.tabbarInactive : themeTextColor;
  const tabbarState = tabbarActive ? 'active' : 'inactive';

  const c = themeClasses(
    LinkClasses(
      { ...props, tabbarLabels, tabbarIcons, tabbar, toolbar },
      { textColor, needsTouchRipple }
    )
  );

  const classes = cls(
    // base
    c.base,

    toolbar && c.toolbar,

    navbar && c.navbar,

    tabbar && c.tabbar[tabbarState],

    className
  );

  return (
    <Component
      ref={(el) => {
        rippleElRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={classes}
      {...attrs}
      role="link"
      tabIndex="0"
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

Link.displayName = 'Link';

export default Link;
