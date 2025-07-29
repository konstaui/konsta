import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';

const ActionsGroup = (props) => {
  const {
    component = 'div',
    className,

    ios,
    material,

    dividers = true,

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

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(
    ActionsGroupClasses({ dividers, ...props }),
    className
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
      {children}
    </Component>
  );
};

ActionsGroup.displayName = 'ActionsGroup';

export default ActionsGroup;
