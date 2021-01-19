import React from 'react';
import { classNames } from '../shared/class-names';
import { useTheme } from '../shared/use-theme';

const ListButton = (props) => {
  const {
    tag = 'li',
    className,
    colors: colorsProp,

    // Hairlines
    hairline = true,

    // Link props
    href,
    target,

    // Button props
    type,
    value,

    // Theme
    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = tag;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });

  const colors = {
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    ...colorsProp,
  };

  const c = {
    base: `${hairline ? 'last:no-hairlines ' : ''}`,
    button: {
      initial: `relative ${
        hairline ? 'hairline-b active-no-hairline' : ''
      } flex items-center justify-center px-4 space-x-1 ${colors.text} ${
        colors.activeBg
      } active:bg-opacity-15 w-full duration-300 active:duration-0`,
      ios: 'h-11',
      material: 'h-12',
      common: 'ios:h-11 material:h-12',
    },
  };

  const classes = classNames([c.base, className]);

  const buttonClasses = classNames([c.button.initial, c.button[theme]]);

  const isLink = !!href || href === '';
  const hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = { href: hrefComputed, target, type, value };

  const ButtonComponent = isLink ? 'a' : 'button';

  return (
    <Component className={classes} {...attrs}>
      <ButtonComponent className={buttonClasses} {...buttonAttrs}>
        {children}
      </ButtonComponent>
    </Component>
  );
};

export default ListButton;
