import React from 'react';
import { cls } from '../shared/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Card = (props) => {
  const {
    component = 'div',
    className,
    margin = 'm-4',
    colors: colorsProp,
    header,
    footer,

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

  const themeClasses = useThemeClasses({ ios, material });

  const colors = {
    bg: 'bg-block-strong-light dark:bg-block-strong-dark',
    footerText: 'text-black dark:text-white',
    ...colorsProp,
  };

  const style = outline ? 'outline' : 'shadow';

  const c = themeClasses(
    {
      base: {
        common: cls(margin, `${colors.bg} rounded overflow-hidden`),
        shadow: 'shadow',
        outline: `border border-black dark:border-white border-opacity-10 dark:border-opacity-10`,
      },
      header:
        'border-b border-black dark:border-white border-opacity-10 dark:border-opacity-10 px-4 py-2',
      content: 'p-4 text-sm',
      footer: `border-t border-black dark:border-white border-opacity-10 dark:border-opacity-10 ${colors.footerText} text-sm text-opacity-55 dark:text-opacity-55 px-4 py-2`,
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
