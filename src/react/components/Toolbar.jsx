import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ToolbarClasses } from '../../shared/classes/ToolbarClasses.js';
import { ToolbarColors } from '../../shared/colors/ToolbarColors.js';

const Toolbar = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    translucent = true,

    bgClassName = '',
    innerClassName = '',

    outline,

    tabbar,
    tabbarIcons,
    tabbarLabels,

    top,

    ios,
    material,

    children,
    ...rest
  } = props;

  const highlightElRef = useRef(null);
  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const [highlightStyle, setHighlightStyle] = useState({
    transform: '',
    width: '',
  });
  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const attrs = {
    ...rest,
  };

  const colors = ToolbarColors(colorsProp, dark);

  const isOutline = typeof outline === 'undefined' ? theme === 'ios' : outline;

  const c = themeClasses(
    ToolbarClasses(
      {
        ...props,
        outline: isOutline,
        translucent,
        bgClassName,
        innerClassName,
      },
      colors,
      className
    ),
    className
  );

  const hasHighlight = theme === 'material' && tabbar && !tabbarIcons;

  useEffect(() => {
    if (hasHighlight && highlightElRef.current) {
      const linksEl = highlightElRef.current.previousElementSibling;
      const width = (1 / linksEl.children.length) * 100;
      const activeIndex = [...linksEl.children].indexOf(
        linksEl.querySelector('.k-tabbar-link-active')
      );

      setHighlightStyle({
        ...highlightStyle,
        width: `${width}%`,
        transform: `translateX(${activeIndex * 100}%)`,
      });
    }
  }, [children]);

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <div className={c.bg} />
      <div className={c.inner}>{children}</div>
      {hasHighlight && (
        <span
          className={c.highlight}
          style={highlightStyle}
          ref={highlightElRef}
        />
      )}
    </Component>
  );
});

Toolbar.displayName = 'Toolbar';

export default Toolbar;
