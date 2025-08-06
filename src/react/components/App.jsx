import React, { useRef } from 'react';
import { KonstaProvider } from '../shared/KonstaProvider.jsx';
import { useAutoTheme } from '../shared/use-auto-theme.js';
import { AppClasses } from '../../shared/classes/AppClasses.js';

const App = (props) => {
  const {
    component = 'div',
    className,

    theme = 'material',
    dark = true,
    materialTouchRipple = true,
    iosHoverHighlight = true,
    safeAreas = true,

    ref,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);

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
      materialTouchRipple={materialTouchRipple}
      iosHoverHighlight={iosHoverHighlight}
      autoThemeDetection={false}
    >
      <Component
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={classes}
        {...attrs}
      >
        {children}
      </Component>
    </KonstaProvider>
  );
};

App.displayName = 'App';

export default App;
