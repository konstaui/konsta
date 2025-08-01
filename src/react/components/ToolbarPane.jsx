import React, { useRef } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ToolbarPaneClasses } from '../../shared/classes/ToolbarPaneClasses.js';
import Glass from './Glass.jsx';
import { useToolbarContext } from './ToolbarContext.jsx';

const ToolbarPane = (props) => {
  const {
    component = 'div',
    className,

    ref,
    ios,
    material,

    children,
    ...rest
  } = props;

  const elRef = useRef(null);

  const themeClasses = useThemeClasses({ ios, material });

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const { tabbar } = useToolbarContext();

  const c = themeClasses(
    ToolbarPaneClasses({
      ...props,
      tabbar,
    }),
    className
  );
  if (theme === 'material') return children;

  return (
    <Glass
      component={component}
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={c.base}
      {...attrs}
    >
      {children}
    </Glass>
  );
};

ToolbarPane.displayName = 'ToolbarPane';

export default ToolbarPane;
