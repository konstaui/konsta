import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagesClasses } from '../../shared/classes/MessagesClasses.js';
import { MessagesColors } from '../../shared/colors/MessagesColors.js';

const MessagesTitle = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    id,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = MessagesColors(colorsProp, dark);
  const c = themeClasses(
    MessagesClasses({ ...props }, colors, {
      darkClasses: dark,
    })
  );

  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component id={id} className={c.messagesTitle} ref={elRef} {...attrs}>
      {children}
    </Component>
  );
});

MessagesTitle.displayName = 'MessagesTitle';
export default MessagesTitle;
