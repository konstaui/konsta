import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { NotificationsClasses } from '../../shared/classes/NotificationsClasses.js';
import { NotificationsColors } from '../../shared/colors/NotificationsColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const Notification = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,
    button,
    icon,
    title,
    titleRightText,
    subtitle,

    condition,
    opened,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = NotificationsColors(colorsProp, dark);

  const c = themeClasses(
    NotificationsClasses({ ...props, translucent }, colors, className),
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <div className={c.header}>
        {icon && <div className={c.icon}>{icon}</div>}
        {title && <div className={c.title}>{title}</div>}
        {titleRightText && (
          <div className={c.titleRightText}>{titleRightText}</div>
        )}
      </div>
      <div className={c.content}>
        {subtitle && <div className={c.subtitle}>{subtitle}</div>}
        {children}
        {button && <div className={c.button}>{button}</div>}
      </div>
    </Component>
  );
});

Notification.displayName = 'Notification';

export default Notification;
