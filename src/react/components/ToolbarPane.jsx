import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ToolbarPaneClasses } from '../../shared/classes/ToolbarPaneClasses.js';
import Glass from './Glass.jsx';
import { useToolbarContext } from './ToolbarContext.jsx';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ToolbarPaneColors } from '../../shared/colors/ToolbarPaneColors.js';
import { useIosTabbarHighlight } from '../../shared/use-ios-tabbar-highlight.js';

const ToolbarPane = (props) => {
  const {
    component = 'div',
    className,

    colors: colorsProp,

    ios,
    material,

    children,

    ref,

    ...rest
  } = props;

  const elRef = useRef(null);
  const highlightElRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({
    transform: '',
    width: '',
  });
  const highlightData = useRef({});
  const highlightInnerRef = useRef(null);
  const highlightThumbRef = useRef(null);
  const [hasTabbarLinks, setHasTabbarLinks] = useState(false);
  const themeClasses = useThemeClasses({ ios, material });

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const { tabbar } = useToolbarContext();
  const hasHighlight = theme === 'ios' && tabbar;
  const dark = useDarkClasses();

  const colors = ToolbarPaneColors(colorsProp, dark);

  const c = themeClasses(
    ToolbarPaneClasses(
      {
        ...props,
        tabbar,
      },
      colors,
      dark
    ),
    className
  );
  const { attachEvents, detachEvents, onUpdated } = useIosTabbarHighlight({
    getEl: () => elRef.current,
    getHighlightEl: () => highlightElRef.current,
    getHighlightInnerEl: () => highlightInnerRef.current,
    getHighlightThumbEl: () => highlightThumbRef.current,
    getHasHighlight: () => hasHighlight,
    data: highlightData.current,
    getHasTabbarLinks: () => hasTabbarLinks,
    setHasTabbarLinks,
    classes: c,
    getHighlightStyle: () => highlightStyle,
    setHighlightStyle,
  });

  useEffect(() => {
    onUpdated();
  }, [children]);

  useEffect(() => {
    attachEvents();
    return () => {
      detachEvents();
    };
  });

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
      {hasHighlight && (
        <span
          className={c.highlight}
          style={highlightStyle}
          ref={highlightElRef}
        >
          <span ref={highlightInnerRef} className={c.highlightInner} />
          <span ref={highlightThumbRef} className={c.highlightThumb} />
        </span>
      )}
    </Glass>
  );
};

ToolbarPane.displayName = 'ToolbarPane';

export default ToolbarPane;
