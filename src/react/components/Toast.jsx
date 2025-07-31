import React, { useRef } from 'react';
import { ToastClasses } from '../../shared/classes/ToastClasses.js';
import { ToastColors } from '../../shared/colors/ToastColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import Glass from './Glass.jsx';

const Toast = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
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

  const attrs = {
    ...rest,
  };

  const Component = component;

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = ToastColors(colorsProp, dark);

  const c = themeClasses(ToastClasses({ ...props }, colors, dark), className);

  return (
    <Component ref={elRef} className={c.base[position]} {...attrs}>
      <Glass className={c.inner}>
        <div className={c.content}>
          {children}
          {button && <div className={c.button}>{button}</div>}
        </div>
      </Glass>
    </Component>
  );
};

Toast.displayName = 'Toast';

export default Toast;
