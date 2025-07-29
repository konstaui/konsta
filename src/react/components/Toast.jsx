import React, { useRef } from 'react';
import { ToastClasses } from '../../shared/classes/ToastClasses.js';
import { ToastColors } from '../../shared/colors/ToastColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const Toast = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,
    button,
    ref,
    position = 'left',
    opened,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = ToastColors(colorsProp, dark);

  const c = themeClasses(
    ToastClasses({ ...props, translucent }, colors, className),
    className
  );

  return (
    <Component ref={elRef} className={c.base[position]} {...attrs}>
      <div className={c.content}>
        {children}
        {button && <div className={c.button}>{button}</div>}
      </div>
    </Component>
  );
};

Toast.displayName = 'Toast';

export default Toast;
