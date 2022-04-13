import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import Badge from './Badge.jsx';
import { IconClasses } from '../../shared/classes/IconClasses.js';

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

  const c = themeClasses(IconClasses(props, className), className);

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
