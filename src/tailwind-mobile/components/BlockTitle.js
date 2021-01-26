import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const BlockTitle = (props) => {
  const {
    tag = 'div',
    className,
    withBlock = true,

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
      initial: `px-4 mt-8 flex items-center ${withBlock ? '-mb-6' : 'mb-2'}`,
      ios: `font-semibold`,
      material: `font-medium`,
      common: `ios:font-semibold material:font-medium`,
    },
  };

  const classes = cls([
    // base
    themeClasses(c.base),

    className,
  ]);

  return (
    <Component className={classes} {...attrs}>
      {children}
    </Component>
  );
};

export default BlockTitle;
