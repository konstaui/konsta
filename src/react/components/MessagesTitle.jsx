import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagesTitleClasses } from '../../shared/classes/MessagesTitleClasses.js';
import { MessagesTitleColors } from '../../shared/colors/MessagesTitleColors.js';

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

  const colors = MessagesTitleColors(colorsProp, dark);
  const c = themeClasses(MessagesTitleClasses({ ...props }, colors));

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

MessagesTitle.displayName = 'MessagesTitle';
export default MessagesTitle;
