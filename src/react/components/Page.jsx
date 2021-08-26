import React from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Page = (props) => {
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

  const themeClasses = useThemeClasses({ ios, material });

  const c = themeClasses(
    {
      base: {
        ios: 'bg-page-ios-light dark:bg-page-ios-dark',
        material: 'bg-page-material-light dark:bg-page-material-dark',
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

export default Page;
