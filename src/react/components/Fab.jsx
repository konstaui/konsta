import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { FabClasses } from '../../shared/classes/FabClasses.js';
import { FabColors } from '../../shared/colors/FabColors.js';

const Fab = (props) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    ref,
    href,
    text,
    textPosition = 'after',
    icon,

    ios,
    material,

    touchRipple = true,

    // Children
    children,

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

  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);

  const colors = FabColors(colorsProp, dark);

  const c = themeClasses(FabClasses(props, colors), className);

  return (
    <Component
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
    </Component>
  );
};

Fab.displayName = 'Fab';

export default Fab;
