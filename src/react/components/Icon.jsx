import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import Badge from './Badge.jsx';
import { IconClasses } from '../../shared/classes/IconClasses.js';

const Icon = (props) => {
  const {
    component = 'i',
    className,

    ios,
    material,

    badge,
    badgeColors,

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

  const themeClasses = useThemeClasses();
  const theme = useTheme();

  const c = themeClasses(IconClasses(), className);

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
      {theme === 'ios' ? ios : material}
      {typeof badge !== 'undefined' && badge !== null && (
        <Badge small className={c.badge} colors={badgeColors}>
          {badge}
        </Badge>
      )}
      {children}
    </Component>
  );
};

Icon.displayName = 'Icon';

export default Icon;
