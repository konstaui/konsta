import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { MessagesClasses } from '../../shared/classes/MessagesClasses.js';

const Messages = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ref,
    id,
    ios,
    material,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(MessagesClasses({ ...props }));

  const Component = component;

  const attrs = {
    ...rest,
  };
  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      id={id}
      className={c.base}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Messages.displayName = 'Messages';
export default Messages;
