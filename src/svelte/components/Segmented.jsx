import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../shared/cls.js';
import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';

const Segmented = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,

    ios,
    material,

    // Style props
    raised,
    outline,
    strong,
    rounded,

    // Children
    children,

    activeButtonIndex = undefined,
    childButtonsLength = undefined,

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

  const colors = {
    border: 'border-primary',
    divide: 'divide-primary',
    ...colorsProp,
  };

  const c = themeClasses(SegmentedClasses(props, colors, dark));

  let highlightWidth;
  let highlightTranslate;

  if (strong) {
    let buttonsLength = childButtonsLength;
    let activeIndex = activeButtonIndex;
    if (
      typeof activeIndex === 'undefined' &&
      children &&
      (children.length || children.type === React.Fragment)
    ) {
      const elements =
        children.type === React.Fragment ? children.props.children : children;
      if (typeof buttonsLength === 'undefined') {
        buttonsLength = elements.length || 0;
      }
      const activeButton = elements.filter(
        (child) =>
          child.props && (child.props.active || child.props.segmentedActive)
      )[0];
      activeIndex = elements.indexOf(activeButton);
    }

    const between = '4px';
    const padding = '2px';
    highlightWidth = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
    highlightTranslate = `calc(${activeIndex} * 100% + ${activeIndex} * ${between})`;
  }

  const classes = cls(
    // base
    rounded ? c.base.rounded : c.base.square,
    raised && c.raised,
    outline && c.outline,
    strong && c.strong,

    className
  );

  return (
    <Component ref={elRef} className={classes} {...attrs}>
      {outline ? <span className={c.outlineInner}>{children}</span> : children}
      {strong && (
        <span
          className={c.strongHighlight}
          style={{
            width: highlightWidth,
            transform: `translateX(${highlightTranslate})`,
          }}
        />
      )}
    </Component>
  );
});

Segmented.displayName = 'Segmented';

export default Segmented;
