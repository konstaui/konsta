import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagesTitleClasses } from '../../shared/classes/MessagesTitleClasses.js';
import { MessagesTitleColors } from '../../shared/colors/MessagesTitleColors.js';

const MessagesTitle = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ref,
    ios,
    material,

    id,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = MessagesTitleColors(colorsProp, dark);
  const c = themeClasses(MessagesTitleClasses({ ...props }, colors));

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

MessagesTitle.displayName = 'MessagesTitle';
export default MessagesTitle;
