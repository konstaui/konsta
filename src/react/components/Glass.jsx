import React, { useEffect, useRef, useContext } from 'react';
import { GlassClasses } from '../../shared/classes/GlassClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useIosHighlight } from '../../shared/use-ios-highlight.js';
import { KonstaContext } from '../shared/KonstaContext.js';

const Glass = (props) => {
  const {
    component = 'div',
    className,
    highlight = true,

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

  const theme = useTheme();

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const { iosHoverHighlight } = useContext(KonstaContext);

  const highlightData = useRef({});
  const { attachEvents, detachEvents } = useIosHighlight({
    getEl: () => elRef.current,
    enabled: highlight && theme === 'ios' && iosHoverHighlight,
    data: highlightData.current,
  });

  const c = themeClasses(GlassClasses({ ...props }, dark), className);

  useEffect(() => {
    attachEvents();
    return () => detachEvents();
  });

  return (
    <Component
      ref={(el) => {
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
        elRef.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </Component>
  );
};

Glass.displayName = 'Glass';

export default Glass;
