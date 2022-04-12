import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { KonstaProvider } from '../shared/KonstaProvider.jsx';
import { useAutoTheme } from '../shared/use-auto-theme.js';
import { AppClasses } from '../../shared/classes/AppClasses.js';

const App = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,

    theme = 'material',
    dark = true,
    touchRipple = true,
    safeAreas = true,

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

  const currentTheme = useAutoTheme(theme);

  const classes = AppClasses({ ...props, safeAreas }, currentTheme, className);

  return (
    <KonstaProvider
      theme={currentTheme}
      dark={dark}
      touchRipple={touchRipple}
      autoThemeDetection={false}
    >
      <Component ref={elRef} className={classes} {...attrs}>
        {children}
      </Component>
    </KonstaProvider>
  );
});

App.displayName = 'App';

export default App;
