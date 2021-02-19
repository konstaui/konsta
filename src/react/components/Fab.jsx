import React from 'react';
import { useTheme } from '../shared/use-theme';

const Fab = (props) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,

    href,
    text,
    textPosition = 'after',
    icon,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = component;

  const attrs = {
    ...rest,
  };

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    bg: 'bg-primary',
    activeBg: 'active:bg-primary-dark',
    text: 'text-white',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: `${colors.bg} ${colors.activeBg} ${colors.text} flex items-center justify-center space-x-2 rounded-full shadow-lg cursor-pointer`,
        ios: `h-12 duration-100`,
        material: `duration-300`,
        iconOnly: {
          ios: 'w-12',
          material: 'w-14 h-14',
        },
        withText: {
          common: 'px-4',
          material: 'h-12',
        },
      },
      text: {
        common: 'uppercase text-sm',
        ios: 'font-semibold',
        material: 'font-medium tracking-wider',
      },
      icon: {
        common: 'h-1em w-1em',
        ios: 'text-icon-ios',
        material: 'text-icon-material',
      },
    },
    className
  );

  return (
    <Component
      className={text ? c.base.withText : c.base.iconOnly}
      href={href}
      {...attrs}
    >
      {text && textPosition === 'before' && (
        <span className={c.text}>{text}</span>
      )}
      {icon && <span className={c.icon}>{icon}</span>}
      {text && textPosition === 'after' && (
        <span className={c.text}>{text}</span>
      )}
      {children}
    </Component>
  );
};

export default Fab;
