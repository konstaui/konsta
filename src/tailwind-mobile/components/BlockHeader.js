import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const BlockHeader = (props) => {
  const {
    tag = 'div',
    className,

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

  const { themeClasses } = useTheme({ ios, material });

  const c = {
    base: {
      initial: `px-4 mt-8 flex items-center -mb-6 text-opacity-55 text-black text-sm`,
    },
  };

  const classes = cls(
    // base
    themeClasses(c.base),

    className
  );

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default BlockHeader;
