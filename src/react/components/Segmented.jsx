import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from 'react';
import { cls } from '../../shared/cls.js';
import { SegmentedClasses } from '../../shared/classes/SegmentedClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { SegmentedColors } from '../../shared/colors/SegmentedColors.js';

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

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);
  const highlightElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const [highlightStyle, setHighlightStyle] = useState({
    transform: '',
    width: '',
  });

  const Component = component;

  const attrs = {
    ...rest,
  };

  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = SegmentedColors(colorsProp, dark);

  const c = themeClasses(SegmentedClasses(props, colors, dark));

  const classes = cls(
    // base
    rounded ? c.base.rounded : c.base.square,
    raised && c.raised,
    outline && c.outline,
    strong && c.strong,

    className
  );

  useEffect(() => {
    if (strong && highlightElRef.current) {
      const buttonsEl = highlightElRef.current.parentElement;
      const buttonsLength = buttonsEl.children.length - 1;
      const activeIndex = [...buttonsEl.children].indexOf(
        buttonsEl.querySelector('.k-segmented-strong-button-active')
      );

      const between = '4px';
      const padding = '2px';

      setHighlightStyle({
        ...highlightStyle,
        width: `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`,
        transform: `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`,
      });
    }
  }, [children]);

  return (
    <Component ref={elRef} className={classes} {...attrs}>
      {outline ? <span className={c.outlineInner}>{children}</span> : children}
      {strong && (
        <span
          ref={highlightElRef}
          className={c.strongHighlight}
          style={highlightStyle}
        />
      )}
    </Component>
  );
});

Segmented.displayName = 'Segmented';

export default Segmented;
