import React, { useRef } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ActionsGroupClasses } from '../../shared/classes/ActionsGroupClasses.js';
import Glass from './Glass.jsx';
import { ActionsGroupColors } from '../../shared/colors/ActionsGroupColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const ActionsGroup = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

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
  const dark = useDarkClasses({ ios, material });

  const colors = ActionsGroupColors(colorsProp, dark);

  const c = themeClasses(
    ActionsGroupClasses({ dividers, ...props }, colors),
    className
  );

  return (
    <Glass
      component={Component}
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </Glass>
  );
};

ActionsGroup.displayName = 'ActionsGroup';

export default ActionsGroup;
