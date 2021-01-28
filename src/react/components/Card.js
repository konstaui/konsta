import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Card = (props) => {
  const {
    tag = 'div',
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

  const Component = tag;

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

  const c = {
    base: {
      initial: `m-4 ${colors.bg} rounded overflow-hidden`,
      shadow: 'shadow',
      outline: `border ${colors.border}`,
    },
    header: 'border-b px-4 py-2',
    content: 'p-4 text-sm',
    footer: `border-t ${colors.footerText} text-sm text-opacity-55 px-4 py-2`,
  };

  const classes = cls(
    // base
    themeClasses(c.base, style),

    className
  );

  const headerClasses = cls([c.header]);
  const contentClasses = cls([c.content]);
  const footerClasses = cls([c.footer]);

  return (
    <Component className={classes} {...attrs}>
      {header && <div className={headerClasses}>{header}</div>}
      <div className={contentClasses}>{children}</div>
      {footer && <div className={footerClasses}>{footer}</div>}
    </Component>
  );
};

export default Card;
