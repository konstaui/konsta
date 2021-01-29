import React from 'react';
import { useTheme } from '../shared/use-theme';

const Card = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    header,
    footer,

    // Theme
    ios,
    material,

    // Style
    outline,

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
    bg: 'bg-white',
    border: 'border-gray-200',
    footerText: 'text-black',
    ...colorsProp,
  };

  const style = outline ? 'outline' : 'shadow';

  const c = themeClasses(
    {
      base: {
        initial: `m-4 ${colors.bg} rounded overflow-hidden`,
        shadow: 'shadow',
        outline: `border ${colors.border}`,
      },
      header: 'border-b px-4 py-2',
      content: 'p-4 text-sm',
      footer: `border-t ${colors.footerText} text-sm text-opacity-55 px-4 py-2`,
    },
    className
  );

  return (
    <Component className={c.base[style]} {...attrs}>
      {header && <div className={c.header}>{header}</div>}
      <div className={c.content}>{children}</div>
      {footer && <div className={c.footer}>{footer}</div>}
    </Component>
  );
};

export default Card;
