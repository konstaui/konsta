import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { positionClass } from '../shared/position-class.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import Badge from './Badge.jsx';

const Icon = forwardRef((props, ref) => {
  const {
    component = 'i',
    className,

    ios,
    material,

    badge,
    badgeColors,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses();
  const theme = useTheme();

  const c = themeClasses(
    {
      base: `${positionClass('relative', className)} inline-block not-italic`,
      badge: 'absolute -right-1.5 -top-0.5',
    },
    className
  );

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {theme === 'ios' ? ios : material}
      {typeof badge !== 'undefined' && badge !== null && (
        <Badge small className={c.badge} colors={badgeColors}>
          {badge}
        </Badge>
      )}
      {children}
    </Component>
  );
});

Icon.displayName = 'Icon';

export default Icon;
