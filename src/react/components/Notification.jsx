import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { NotificationsClasses } from '../../shared/classes/NotificationsClasses.js';
import { NotificationsColors } from '../../shared/colors/NotificationsColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useTheme } from '../shared/use-theme.js';
import DeleteIcon from './icons/DeleteIcon.jsx';

const Notification = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    button,
    icon,
    title,
    titleRightText,
    subtitle,
    text,

    opened,
    iconSize,

    onClick,

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

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = NotificationsColors(colorsProp, dark);

  const c = themeClasses(
    NotificationsClasses({ ...props }, colors, className),
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
        {button && (
          <div className={c.button} onClick={onClick}>
            <DeleteIcon theme={theme} className={c.deleteIcon} />
          </div>
        )}
      </div>
      <div className={c.content}>
        {subtitle && <div className={c.subtitle}>{subtitle}</div>}
        {text && <div className={c.text}>{text}</div>}
        {children}
      </div>
    </Component>
  );
});

Notification.displayName = 'Notification';

export default Notification;
