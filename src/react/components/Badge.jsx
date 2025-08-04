import React, { useRef } from 'react';
import { BadgeClasses } from '../../shared/classes/BadgeClasses.js';
import { BadgeColors } from '../../shared/colors/BadgeColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Badge = (props) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    small,

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

  const themeClasses = useThemeClasses({ ios, material });

  const colors = BadgeColors(colorsProp);

  const size = small ? 'sm' : 'md';

  const c = themeClasses(BadgeClasses(props, colors), className);

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base[size]}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Badge.displayName = 'Badge';

export default Badge;
