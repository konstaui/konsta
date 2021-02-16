import React from 'react';
import { useTheme } from '../shared/use-theme';
import BackIcon from './icons/BackIcon';
import Link from './Link';

const NavbarBackLink = (props) => {
  const {
    component = 'a',
    className,

    text = 'Back',

    showText = 'auto',

    // Theme
    ios,
    material,

    onClick,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const attrs = {
    ...rest,
  };

  const { theme, themeClasses } = useTheme({ ios, material });

  const shouldShowText =
    (showText === 'auto' && theme === 'ios') || showText === true;

  const c = themeClasses(
    {
      base: {
        initial: 'cursor-pointer',
        material: 'min-w-12',
      },
      icon: {
        initial: 'fill-current',
      },
    },
    className
  );

  return (
    <Link
      component={component}
      className={c.base}
      navbar
      {...attrs}
      onClick={onClick}
    >
      <span className={c.icon}>
        <BackIcon theme={theme} />
      </span>
      {shouldShowText && <span>{text}</span>}
      {children}
    </Link>
  );
};

export default NavbarBackLink;
