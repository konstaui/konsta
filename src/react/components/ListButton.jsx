import React, { useRef } from 'react';
import { cls } from '../shared/cls';
import { positionClass } from '../shared/position-class';
import { useTheme } from '../shared/use-theme';
import { useThemeClasses } from '../shared/use-theme-classes';
import { useTouchRipple } from '../shared/use-touch-ripple';

const ListButton = (props) => {
  const rippleElRef = useRef(null);

  const {
    component = 'li',
    className,
    colors: colorsProp,

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

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  useTouchRipple(rippleElRef, theme === 'material');

  const colors = {
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: ``,
      button: {
        common: cls(
          positionClass('relative', className),
          `flex items-center justify-center px-4 space-x-1 active:bg-opacity-15 w-full duration-300 active:duration-0 focus:outline-none hairline-b active:hairline-transparent ${colors.text} ${colors.activeBg} ${colors.touchRipple} overflow-hidden`
        ),
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
      <ButtonComponent ref={rippleElRef} className={c.button} {...buttonAttrs}>
        {children}
      </ButtonComponent>
    </Component>
  );
};

export default ListButton;
