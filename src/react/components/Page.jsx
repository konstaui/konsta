import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { PageClasses } from '../../shared/classes/PageClasses.js';
import { PageColors } from '../../shared/colors/PageColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Page = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = PageColors(colorsProp, dark);

  const c = themeClasses(PageClasses(props, colors, className), className);

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

Page.displayName = 'Page';

export default Page;
