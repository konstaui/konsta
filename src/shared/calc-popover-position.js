export const calcPopoverPosition = ({
  popoverEl,
  targetEl,
  angleEl,
  needsAngle,
  targetX,
  targetY,
  targetWidth = 0,
  targetHeight = 0,
  theme,
}) => {
  if (targetEl.current) {
    targetEl = targetEl.current;
  } else if (targetEl.value) {
    targetEl = targetEl.value;
  } else if (targetEl.el) {
    targetEl = targetEl.el;
  } else if (targetEl.$el) {
    targetEl = targetEl.$el;
  }

  if (typeof targetEl === 'string') {
    // eslint-disable-next-line
    targetEl = document.querySelector(targetEl);
  }

  /* eslint-disable */
  let appWidth = document.body.offsetWidth;
  let appHeight = document.body.offsetHeight;
  if (appWidth === 0) {
    appWidth = window.innerWidth;
  }
  if (appHeight === 0) {
    appHeight = window.innerHeight;
  }
  /* eslint-enable */
  const [popoverWidth, popoverHeight] = [
    popoverEl.offsetWidth,
    popoverEl.offsetHeight,
  ];
  let angleSize = 0;
  let angleLeft;
  let angleTop;
  let anglePosition = '';
  if (needsAngle) {
    angleSize = angleEl.offsetWidth / 2;
  }

  let targetOffsetLeft;
  let targetOffsetTop;
  // eslint-disable-next-line
  const targetElStyles = window.getComputedStyle(targetEl);
  let safeAreaTop =
    parseInt(targetElStyles.getPropertyValue('--k-safe-area-top'), 10) || 0;
  let safeAreaLeft =
    parseInt(targetElStyles.getPropertyValue('--k-safe-area-left'), 10) || 0;
  let safeAreaRight =
    parseInt(targetElStyles.getPropertyValue('--k-safe-area-right'), 10) || 0;
  if (Number.isNaN(safeAreaTop)) safeAreaTop = 0;
  if (Number.isNaN(safeAreaLeft)) safeAreaLeft = 0;
  if (Number.isNaN(safeAreaRight)) safeAreaRight = 0;
  if (targetEl) {
    targetWidth = targetEl.offsetWidth;
    targetHeight = targetEl.offsetHeight;

    const targetElBox = targetEl.getBoundingClientRect();
    targetOffsetLeft = targetElBox.left;
    targetOffsetTop = targetElBox.top;
  } else if (typeof targetX !== 'undefined' && targetY !== 'undefined') {
    targetOffsetLeft = targetX;
    targetOffsetTop = targetY;
  }

  let [left, top, diff] = [0, 0, 0];

  const angleMin = theme === 'ios' ? 13 : 23;

  // Top Position
  let position = 'top';

  if (popoverHeight + angleSize < targetOffsetTop - safeAreaTop) {
    // On top
    top = targetOffsetTop - popoverHeight - angleSize;
  } else if (
    popoverHeight + angleSize <
    appHeight - targetOffsetTop - targetHeight
  ) {
    // On bottom
    position = 'bottom';
    top = targetOffsetTop + targetHeight + angleSize;
  } else {
    // On middle
    position = 'middle';
    top = targetHeight / 2 + targetOffsetTop - popoverHeight / 2;
    diff = top;
    top = Math.max(5, Math.min(top, appHeight - popoverHeight - 5));
    diff -= top;
  }

  // Horizontal Position
  if (position === 'top' || position === 'bottom') {
    left = targetWidth / 2 + targetOffsetLeft - popoverWidth / 2;
    diff = left;
    left = Math.max(5, Math.min(left, appWidth - popoverWidth - 5));
    if (safeAreaLeft) {
      left = Math.max(left, safeAreaLeft);
    }
    if (safeAreaRight && left + popoverWidth > appWidth - 5 - safeAreaRight) {
      left = appWidth - 5 - safeAreaRight - popoverWidth;
    }
    if (position === 'top') {
      anglePosition = 'bottom';
    }
    if (position === 'bottom') {
      anglePosition = 'top';
    }
    diff -= left;
    angleLeft = popoverWidth / 2 - angleSize + diff;
    angleLeft = Math.max(
      Math.min(angleLeft, popoverWidth - angleSize * 2 - angleMin),
      angleMin
    );
  } else if (position === 'middle') {
    left = targetOffsetLeft - popoverWidth - angleSize;
    anglePosition = 'right';
    if (
      left < 5 ||
      left + popoverWidth + safeAreaRight > appWidth ||
      left < safeAreaLeft
    ) {
      if (left < 5) left = targetOffsetLeft + targetWidth + angleSize;
      if (left + popoverWidth + safeAreaRight > appWidth)
        left = appWidth - popoverWidth - 5 - safeAreaRight;
      if (left < safeAreaLeft) left = safeAreaLeft;
      anglePosition = 'left';
    }
    angleTop = popoverHeight / 2 - angleSize + diff;
    angleTop = Math.max(
      Math.min(angleTop, popoverHeight - angleSize * 2 - angleMin),
      angleMin
    );
  }

  const popoverVerticalPosition = position;
  const popoverHorizontalPosition = left < targetOffsetLeft ? 'left' : 'right';

  return {
    set: true,
    angleTop: typeof angleTop === 'undefined' ? undefined : `${angleTop}px`,
    angleLeft: typeof angleLeft === 'undefined' ? undefined : `${angleLeft}px`,
    anglePosition,
    popoverTop: `${top}px`,
    popoverLeft: `${left}px`,
    popoverPosition: `${popoverVerticalPosition}-${popoverHorizontalPosition}`,
  };
};
