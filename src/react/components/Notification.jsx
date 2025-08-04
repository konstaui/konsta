import React, { useRef } from 'react';
import { NotificationsClasses } from '../../shared/classes/NotificationsClasses.js';
import { NotificationsColors } from '../../shared/colors/NotificationsColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useTheme } from '../shared/use-theme.js';
import DeleteIcon from './icons/DeleteIcon.jsx';
import Glass from './Glass.jsx';

const Notification = (props) => {
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

    onClose,

    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();
  const colors = NotificationsColors(colorsProp, dark);

  const c = themeClasses(NotificationsClasses({ ...props }, colors), className);

  if (theme === 'ios')
    return (
      <Glass
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        component={component}
        className={c.base}
        {...attrs}
      >
        {icon && <div className={c.icon}>{icon}</div>}
        <div className={c.content}>
          <div className={c.header}>
            {title && <div className={c.title}>{title}</div>}
            {titleRightText && (
              <div className={c.titleRightText}>{titleRightText}</div>
            )}
            {button && (
              <div
                className={c.button}
                role="button"
                tabIndex="0"
                onClick={onClose}
              >
                <DeleteIcon theme={theme} className={c.deleteIcon} />
              </div>
            )}
          </div>
          {subtitle && <div className={c.subtitle}>{subtitle}</div>}
          {text && <div className={c.text}>{text}</div>}
          {children}
        </div>
      </Glass>
    );
  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      <div className={c.header}>
        {icon && <div className={c.icon}>{icon}</div>}
        <div className={c.contentWrapper}>
          <div className={c.contentTitle}>
            {title && <div className={c.title}>{title}</div>}
            {titleRightText && (
              <div className={c.titleRightText}>{titleRightText}</div>
            )}
          </div>
          <div className={c.content}>
            {subtitle && <div className={c.subtitle}>{subtitle}</div>}
            {text && <div className={c.text}>{text}</div>}
            {children}
          </div>
        </div>
        {button && (
          <div
            className={c.button}
            role="button"
            tabIndex="0"
            onClick={onClose}
          >
            <DeleteIcon theme={theme} className={c.deleteIcon} />
          </div>
        )}
      </div>
    </Component>
  );
};

Notification.displayName = 'Notification';

export default Notification;
