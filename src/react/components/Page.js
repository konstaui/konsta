import React from 'react';
import { useTheme } from '../shared/use-theme';

const Page = (props) => {
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
        initial: '',
        ios: 'bg-page-ios',
        material: 'bg-page-material',
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
