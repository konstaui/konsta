import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsLabelClasses } from '../../shared/classes/ActionsLabelClasses.js';

const ActionsLabel = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    fontSizeIos = 'text-sm',
    fontSizeMaterial = 'text-base',

    hairlines = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: rippleElRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    bg: cls('bg-white', dark('dark:bg-neutral-800')),
    activeBg: cls('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    text: cls(
      'text-black text-opacity-55',
      dark('dark:text-white dark:text-opacity-55')
    ),
    ...colorsProp,
  };

  const c = themeClasses(
    ActionsLabelClasses(
      { fontSizeIos, fontSizeMaterial, hairlines, ...props },
      colors
    ),
    className
  );

  return (
    <Component ref={rippleElRef} className={c.base} {...attrs}>
      {children}
    </Component>
  );
});

ActionsLabel.displayName = 'ActionsLabel';

export default ActionsLabel;
