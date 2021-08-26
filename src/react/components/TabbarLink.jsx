import React from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';

import Link from './Link.jsx';

const TabbarLink = (props) => {
  const {
    className,
    active,

    ios,
    material,

    icon,
    label,

    children,
    ...rest
  } = props;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses({
    content: {
      common: 'flex flex-col items-center h-full',
      ios: 'py-1',
      material: 'py-2',
    },
    icon: {
      common: 'flex items-center justify-center',
      ios: 'w-7 h-7',
      material: 'w-6 h-6',
    },
    label: {
      ios: 'text-xs font-medium',
      material: 'text-sm font-normal normal-case',
    },
  });

  return (
    <Link tabbar tabbarActive={active} className={className} {...attrs}>
      {icon && label ? (
        <span className={c.content}>
          <span className={c.icon}>{icon}</span>
          <span className={c.label}>{label}</span>
        </span>
      ) : (
        <>
          {label}
          {children}
        </>
      )}
    </Link>
  );
};

export default TabbarLink;
