import React, { useRef, useEffect, useState } from 'react';
import { cls } from '../../shared/cls.js';
import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';
import { getThemeSpecificProps } from '../shared/get-theme-specific-props.js';
import { useTheme } from '../shared/use-theme.js';
import { SegmentedContext } from './SegmentedContext.jsx';
import { useNavbarContext } from './NavbarContext.jsx';
import Glass from './Glass.jsx';

const Segmented = (props) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,

    // Style props
    raised,
    raisedIos,
    raisedMaterial,
    outline,
    outlineIos,
    outlineMaterial,
    strong,
    strongIos,
    strongMaterial,
    rounded,
    roundedIos,
    roundedMaterial,

    // Children
    children,

    ref,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);
  const highlightElRef = useRef(null);

  const [highlightStyle, setHighlightStyle] = useState({
    transform: '',
    width: '',
  });

  const attrs = {
    ...rest,
  };
  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = SegmentedColors(colorsProp, dark);

  const themeProps = getThemeSpecificProps(
    theme,
    {
      outline,
      rounded,
      strong,
      raised,
    },
    props
  );
  const { navbar } = useNavbarContext();

  const c = themeClasses(
    SegmentedClasses({ ...props, ...themeProps, navbar }, colors, dark)
  );

  const Component = theme === 'ios' && navbar ? Glass : component;

  const classes = cls(
    // base
    themeProps.rounded ? c.base.rounded : c.base.square,
    themeProps.raised && c.raised,
    themeProps.outline && c.outline,
    themeProps.strong && c.strong,

    className
  );

  useEffect(() => {
    if (themeProps.strong && highlightElRef.current) {
      const buttonsEl = highlightElRef.current.parentElement;
      const buttonsLength = buttonsEl.children.length - 1;
      const activeIndex = [...buttonsEl.children].indexOf(
        buttonsEl.querySelector('.k-segmented-strong-button-active')
      );

      const between = '4px';
      const padding = theme === 'ios' && navbar ? '4px' : '2px';

      setHighlightStyle({
        ...highlightStyle,
        width: `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`,
        transform: `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`,
      });
    }
  }, [children]);

  return (
    <Component
      ref={(el) => {
        elRef.current = el;
        if (ref && typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={classes}
      {...attrs}
    >
      <SegmentedContext.Provider
        value={{
          strong: themeProps.strong,
          outline: themeProps.outline,
          rounded: themeProps.rounded,
          raised: themeProps.raised,
        }}
      >
        {themeProps.outline ? (
          <span className={c.outlineInner}>{children}</span>
        ) : (
          children
        )}
        {themeProps.strong && (
          <span
            ref={highlightElRef}
            className={c.strongHighlight}
            style={highlightStyle}
          />
        )}
      </SegmentedContext.Provider>
    </Component>
  );
};

Segmented.displayName = 'Segmented';

export default Segmented;
