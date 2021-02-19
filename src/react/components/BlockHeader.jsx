import React from 'react';
import { useTheme } from '../shared/use-theme';

const BlockHeader = (props) => {
  const {
    component = 'div',
    className,

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
      base: `px-4 mt-8 flex items-center -mb-6 text-opacity-55 text-black text-sm`,
    },
    className
  );

  return (
    <Component className={c.base} {...attrs}>
      {children}
    </Component>
  );
};

export default BlockHeader;
