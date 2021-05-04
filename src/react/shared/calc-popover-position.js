export const calcPopoverPosition = ({
  popoverEl,
  targetEl,
  angleEl,
  theme,
  targetX,
  targetY,
  targetWidth = 0,
  targetHeight = 0,
}) => {
  if (targetEl.current) {
    targetEl = targetEl.current;
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

  if (theme === 'ios') {
    angleSize = angleEl.offsetWidth / 2;
  } else {
    // do nothing
  }

  let targetOffsetLeft;
  let targetOffsetTop;
  let safeAreaTop = 0; // parseInt($('html').css('--f7-safe-area-top'), 10);
  let safeAreaLeft = 0; // parseInt($('html').css('--f7-safe-area-left'), 10);
  let safeAreaRight = 0; // parseInt($('html').css('--f7-safe-area-right'), 10);
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
  let popoverVerticalPosition = '';
  let popoverHorizontalPosition = '';

  // Top Position
  let position = theme === 'material' ? 'bottom' : 'top';
  if (theme === 'material') {
    if (popoverHeight < appHeight - targetOffsetTop - targetHeight) {
      // On bottom
      position = 'bottom';
      top = targetOffsetTop + targetHeight;
    } else if (popoverHeight < targetOffsetTop - safeAreaTop) {
      // On top
      top = targetOffsetTop - popoverHeight;
      position = 'top';
    } else {
      // On middle
      position = 'middle';
      top = targetHeight / 2 + targetOffsetTop - popoverHeight / 2;
    }
    top = Math.max(8, Math.min(top, appHeight - popoverHeight - 8));

    // Horizontal Position
    let hPosition;
    if (targetOffsetLeft < appWidth / 2) {
      hPosition = 'right';
      left =
        position === 'middle'
          ? targetOffsetLeft + targetWidth
          : targetOffsetLeft;
    } else {
      hPosition = 'left';
      left =
        position === 'middle'
          ? targetOffsetLeft - popoverWidth
          : targetOffsetLeft + targetWidth - popoverWidth;
    }
    left = Math.max(
      8,
      Math.min(left, appWidth - popoverWidth - 8 - safeAreaRight),
      safeAreaLeft
    );
    popoverVerticalPosition = position;
    popoverHorizontalPosition = hPosition;
  } else {
    // ios
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
        Math.min(angleLeft, popoverWidth - angleSize * 2 - 13),
        13
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
        Math.min(angleTop, popoverHeight - angleSize * 2 - 13),
        13
      );
    }
  }

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
