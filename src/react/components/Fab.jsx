import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { FabClasses } from '../../shared/classes/FabClasses.js';
import { FabColors } from '../../shared/colors/FabColors.js';
import Glass from './Glass.jsx';

const Fab = (props) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    href,
    text,
    textPosition = 'after',
    icon,

    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  useTouchRipple(rippleElRef, theme === 'material');

  const colors = FabColors(colorsProp, dark);

  const c = themeClasses(FabClasses(props, colors, dark), className);

  return (
    <Glass
      component={Component}
      className={text ? c.base.withText : c.base.iconOnly}
      href={href}
      ref={(el) => {
        rippleElRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      role="button"
      tabIndex="0"
      {...attrs}
    >
      {text && textPosition === 'before' && (
        <span className={c.text}>{text}</span>
      )}
      {icon && <span className={c.icon}>{icon}</span>}
      {text && textPosition === 'after' && (
        <span className={c.text}>{text}</span>
      )}
      {children}
    </Glass>
  );
};

Fab.displayName = 'Fab';

export default Fab;
