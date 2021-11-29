import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { KonstaProvider } from '../shared/KonstaProvider.jsx';
import { useAutoTheme } from '../shared/use-auto-theme.js';

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

  const classes = cls(
    currentTheme === 'ios' && `k-ios`,
    currentTheme === 'material' && 'k-material',
    'k-app w-full h-full min-h-screen',
    safeAreas && 'safe-areas',
    positionClass('relative', className),
    className
  );

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
