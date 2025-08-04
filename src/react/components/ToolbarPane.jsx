import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { ToolbarPaneClasses } from '../../shared/classes/ToolbarPaneClasses.js';
import Glass from './Glass.jsx';
import { useToolbarContext } from './ToolbarContext.jsx';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ToolbarPaneColors } from '../../shared/colors/ToolbarPaneColors.js';

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

  const startAnimation = () => {
    const data = highlightData.current;
    data.raf = requestAnimationFrame(() => {
      if (!data.setTransform) return;
      highlightElRef.current.style.transform = data.setTransform;
      highlightElRef.current.style.transitionTimingFunction = 'ease-out';
      highlightData.current.setTransform = null;
    });
  };

  const stopAnimation = () => {
    const data = highlightData.current;
    cancelAnimationFrame(data.raf);
  };

  const setHighlightOnTouch = (e) => {
    if (!hasTabbarLinks) return;
    const data = highlightData.current;
    const { rect, linkEls } = data;
    const { clientX, clientY } = e;
    const highlightWidth = rect.width / linkEls.length;
    const leftOffset = clientX - rect.left - highlightWidth / 2;
    const minLeft = 0;
    const maxLeft = rect.width - highlightWidth;
    const translateX = Math.max(minLeft, Math.min(leftOffset, maxLeft));
    const linkCenters = [...linkEls].map((el, index) => {
      return index * highlightWidth + highlightWidth / 2;
    });

    const closestLinkCenter = linkCenters.reduce((prev, curr) => {
      const highlightCenter = translateX + highlightWidth / 2;
      return Math.abs(curr - highlightCenter) < Math.abs(prev - highlightCenter)
        ? curr
        : prev;
    }, linkCenters[0]);
    const closestLinkIndex = linkCenters.indexOf(closestLinkCenter);
    data.newActiveIndex = closestLinkIndex;

    highlightInnerRef.current.classList.add(
      ...c.highlightInnerPressed.split(' ')
    );
    highlightThumbRef.current.classList.add(
      ...c.highlightThumbPressed.split(' ')
    );
    data.setTransform = `translateX(${translateX}px)`;
    startAnimation();
  };

  const unsetHighlightOnTouch = () => {
    if (!hasTabbarLinks) return;
    highlightInnerRef.current.classList.remove(
      ...c.highlightInnerPressed.split(' ')
    );
    highlightThumbRef.current.classList.remove(
      ...c.highlightThumbPressed.split(' ')
    );
    const { activeIndex, newActiveIndex, linkEls } = highlightData.current;
    if (activeIndex !== newActiveIndex) {
      linkEls[newActiveIndex].click();
    }

    highlightElRef.current.style.transform = `translateX(${newActiveIndex * 100}%)`;
    highlightElRef.current.style.transitionTimingFunction = '';

    setHighlightStyle({
      ...highlightStyle,
      transform: `translateX(${newActiveIndex * 100}%)`,
      transitionTimingFunction: '',
    });
  };

  useEffect(() => {
    if (hasHighlight && highlightElRef.current) {
      const linkEls = elRef.current.querySelectorAll('a, button');
      if (!linkEls.length) {
        setHasTabbarLinks(false);
        return;
      }
      setHasTabbarLinks(true);
      const activeLinkEl = elRef.current.querySelector('.k-tabbar-link-active');
      const width = (1 / linkEls.length) * 100;
      const activeIndex = [...linkEls].indexOf(activeLinkEl);
      highlightData.current.linkEls = linkEls;
      highlightData.current.activeIndex = activeIndex;
      setHighlightStyle({
        ...highlightStyle,
        width: `${width}%`,
        transform: `translateX(${activeIndex * 100}%)`,
      });
    }
  }, [children]);

  const onPointer = (e) => {
    const data = highlightData.current;
    // if (e.pointerType !== 'touch') return;

    if (e.type === 'pointerdown') {
      data.rect = elRef.current.getBoundingClientRect();
      data.touched = true;
      setHighlightOnTouch(e);
      startAnimation();
    }
    if (e.type === 'pointermove') {
      if (!data.touched) return;
      data.moved = true;
      setHighlightOnTouch(e);
    }
    if (e.type === 'pointerup') {
      if (!data.touched) return;
      data.touched = false;
      data.moved = false;
      unsetHighlightOnTouch();
      stopAnimation();
    }
  };

  useEffect(() => {
    const el = elRef.current;
    if (!el || !hasHighlight) return () => {};
    el.addEventListener('pointerdown', onPointer);
    document.addEventListener('pointermove', onPointer);
    document.addEventListener('pointerup', onPointer);
    return () => {
      el.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('pointermove', onPointer);
      document.removeEventListener('pointerup', onPointer);
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
