import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { MessagesClasses } from '../../shared/classes/MessagesClasses.js';

const Messages = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    id,
    ios,
    material,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(MessagesClasses({ ...props }));

  const Component = component;

  const attrs = {
    ...rest,
  };
  return (
    <Component id={id} className={c.base} ref={elRef} {...attrs}>
      {children}
    </Component>
  );
});

Messages.displayName = 'Messages';
export default Messages;
