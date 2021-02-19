import React from 'react';
import { useTheme } from '../shared/use-theme';
import Link from './Link';

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

  const { themeClasses } = useTheme({ ios, material });

  const c = themeClasses({
    content: {
      common: 'flex flex-col items-center h-full',
      ios: 'py-1',
      material: 'py-2',
    },
    icon: {
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
