import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';

const MessagebarAttachments = forwardRef((props, ref) => {
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
  const dark = useDarkClasses();
  const colors = MessagebarColors(colorsProp, dark);

  const c = themeClasses(
    MessagebarClasses({ ...props }, colors, { darkClasses: dark })
  );

  const Component = component;

  const attrs = {
    ...rest,
  };

  return (
    <Component id={id} className={c.base} {...attrs} ref={elRef}>
      {children}
    </Component>
  );
});

MessagebarAttachments.displayName = 'MessagebarAttachments';
export default MessagebarAttachments;
