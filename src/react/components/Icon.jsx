import React from 'react';
import { positionClass } from '../shared/position-class';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';
import Badge from './Badge';

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

    // Rest
    ...rest
  } = props;

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
    <Component className={c.base} {...attrs}>
      {theme === 'ios' ? ios : material}
      {typeof badge !== 'undefined' && badge !== null && (
        <Badge sm className={c.badge} colors={badgeColors}>
          {badge}
        </Badge>
      )}
      {children}
    </Component>
  );
};

export default Icon;
