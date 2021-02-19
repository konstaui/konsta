import React from 'react';
import { useTheme } from '../shared/use-theme';

const ListButton = (props) => {
  const {
    component = 'li',
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

    linkComponent = 'a',
    linkProps = {},

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
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: `${!hairline ? 'no-hairlines ' : ''}`,
      button: {
        common: `relative flex items-center justify-center px-4 space-x-1 active:bg-opacity-15 w-full duration-300 active:duration-0 focus:outline-none ${
          hairline ? 'hairline-b active-no-hairline' : ''
        } ${colors.text} ${colors.activeBg}`,
        ios: 'h-11',
        material: 'h-12',
      },
    },
    className
  );

  const isLink = !!href || href === '';
  const hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = { href: hrefComputed, target, type, value, ...linkProps };

  const ButtonComponent = isLink ? linkComponent : 'button';

  return (
    <Component className={c.base} {...attrs}>
      <ButtonComponent className={c.button} {...buttonAttrs}>
        {children}
      </ButtonComponent>
    </Component>
  );
};

export default ListButton;
