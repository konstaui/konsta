/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';
import { cls } from '../../shared/cls.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { calcPopoverPosition } from '../../shared/calc-popover-position.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { PopoverClasses } from '../../shared/classes/PopoverClasses.js';
import { PopoverColors } from '../../shared/colors/PopoverColors.js';
import Glass from './Glass.jsx';

const Popover = (props) => {
  const {
    component = 'div',
    className,
    angle = false,
    angleClassName = '',
    colors: colorsProp,
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

    ref,

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

  const state = opened ? 'opened' : 'closed';

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });
  const dark = useDarkClasses();

  const colors = PopoverColors(colorsProp, dark);

  const c = themeClasses(
    PopoverClasses({ ...props, angleClassName }, colors, dark),
    className
  );

  const setPopover = () => {
    if (!target || !elRef.current || !opened) return;
    setPositions(
      calcPopoverPosition({
        popoverEl: elRef.current,
        targetEl: target,
        angleEl: angleElRef.current,
        needsAngle: angle,
        targetX,
        targetY,
        targetHeight,
        targetWidth,
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

  const classes = cls(c.base[state], originClasses[positions.popoverPosition]);

  return (
    <>
      {backdrop && (
        <div className={c.backdrop[state]} onClick={onBackdropClick} />
      )}

      <Component
        ref={(el) => {
          elRef.current = el;
          if (ref && typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={classes}
        style={popoverStyle}
        {...attrs}
      >
        {angle && (
          <div
            ref={angleElRef}
            style={angleStyle}
            className={c.angleWrap[positions.anglePosition]}
          >
            <div className={c.angleArrow[positions.anglePosition]} />
          </div>
        )}
        <Glass className={c.inner[state]}>{children}</Glass>
      </Component>
    </>
  );
};

Popover.displayName = 'Popover';

export default Popover;
