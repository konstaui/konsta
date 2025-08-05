import React, { useRef } from 'react';
import { PageClasses } from '../../shared/classes/PageClasses.js';
import { PageColors } from '../../shared/colors/PageColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Page = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = PageColors(colorsProp, dark);

  const c = themeClasses(PageClasses(props, colors, className));

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Page.displayName = 'Page';

export default Page;
