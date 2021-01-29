import React from 'react';
import { useTheme } from '../shared/use-theme';

const BlockFooter = (props) => {
  const {
    component = 'div',
    className,

    // Theme
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

  const c = themeClasses(
    {
      base: {
        initial: `px-4 mb-8 flex items-center -mt-6 text-opacity-55 text-black text-sm`,
      },
    },
    className
  );

  return (
    <Component className={c.base} {...attrs}>
      {children}
    </Component>
  );
};

export default BlockFooter;
