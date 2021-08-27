/* eslint-disable no-restricted-globals */
import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { cls } from '../shared/cls.js';
import { positionClass } from '../shared/position-class.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { calcPopoverPosition } from '../shared/calc-popover-position.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';

const Popover = forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    size = 'w-64',
    opened,
    backdrop = true,
    onBackdropClick,
    target,
    targetX,
    targetY,
    targetWidth,
    targetHeight,

    ios,
    material,

    // Children
    children,

    // Rest
    style = {},
    ...rest
  } = props;

  const elRef = useRef(null);
  const angleElRef = useRef(null);
  const [positions, setPositions] = useState({
    set: false,
    angleTop: 0,
    angleLeft: 0,
    anglePosition: 'bottom',
    popoverTop: 0,
    popoverLeft: 0,
    popoverPosition: 'top-left',
  });

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = {
    bg: cls('bg-popover-light', dark('dark:bg-popover-dark')),
    ...colorsProp,
  };

  const c = themeClasses(
    {
      base: {
        common: cls(
          'transition-transform-opacity duration-300 z-40 no-safe-areas',
          colors.bg,
          positionClass('fixed', className),
          size
        ),
        ios: 'rounded-xl',
        material: 'rounded shadow-lg',
        opened: '',
        closed: {
          common: 'opacity-0 pointer-events-none',
          ios: '',
          material: 'scale-x-90 scale-y-75',
        },
      },
      inner: {
        common: 'overflow-hidden relative',
        ios: 'rounded-xl',
        material: 'rounded',
      },
      angleWrap: {
        common: '',
        ios: 'absolute w-6.5 h-6.5 z-50 overflow-hidden',
        bottom: 'top-full',
        top: 'bottom-full',
        left: 'right-full',
        right: 'left-full',
      },
      angleArrow: {
        common: cls(
          colors.bg,
          'absolute rounded w-full h-full transform rotate-45'
        ),
        bottom: '-top-4.75',
        top: 'top-4.75',
        left: 'left-4.75',
        right: '-left-4.75',
      },
      backdrop: {
        common:
          'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-300',
        opened: '',
        closed: 'opacity-0 pointer-events-none',
      },
    },
    className
  );

  const setPopover = () => {
    if (!target || !elRef.current || !opened) return;
    setPositions(
      calcPopoverPosition({
        popoverEl: elRef.current,
        targetEl: target,
        angleEl: angleElRef.current,
        theme,
      })
    );
  };

  const attachEvents = () => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', setPopover);
  };

  const detachEvents = () => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('resize', setPopover);
  };

  useEffect(() => {
    attachEvents();
    return () => detachEvents();
  });

  useEffect(() => {
    setPopover();
  }, [opened]);

  const popoverStyle = positions.set
    ? {
        ...(style || {}),
        left: positions.popoverLeft,
        top: positions.popoverTop,
      }
    : style;

  const angleStyle = positions.set
    ? {
        left: positions.angleLeft,
        top: positions.angleTop,
      }
    : undefined;

  const originClasses = {
    'top-right': 'origin-bottom-left',
    'top-left': 'origin-bottom-right',
    'middle-left': 'origin-right',
    'middle-right': 'origin-left',
    'bottom-right': 'origin-top-left',
    'bottom-left': 'origin-top-right',
  };
  const classes = cls(
    c.base[state],
    theme === 'material' && originClasses[positions.popoverPosition]
  );

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}

      <Component
        ref={elRef}
        className={classes}
        style={popoverStyle}
        {...attrs}
      >
        {theme === 'ios' && (
          <div
            ref={angleElRef}
            style={angleStyle}
            className={c.angleWrap[positions.anglePosition]}
          >
            <div className={c.angleArrow[positions.anglePosition]} />
          </div>
        )}
        <div className={c.inner}>{children}</div>
      </Component>
    </>
  );
});

Popover.displayName = 'Popover';

export default Popover;
