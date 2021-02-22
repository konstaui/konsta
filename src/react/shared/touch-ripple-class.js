export class TouchRipple {
  constructor(el, x, y) {
    const ripple = this;

    if (!el) return undefined;
    ripple.el = el;

    const { left, top, width, height } = el.getBoundingClientRect();
    const center = {
      x: x - left,
      y: y - top,
    };
    let diameter = Math.max((height ** 2 + width ** 2) ** 0.5, 48);

    // TODO: inset elements
    let isInset = false;
    // const insetElements = app.params.touch.touchRippleInsetElements || '';
    // if (insetElements && $el.is(insetElements)) {
    //   isInset = true;
    // }
    if (isInset) {
      diameter = Math.max(Math.min(width, height), 48);
    }

    /* eslint-disable no-restricted-globals */
    const isOverflowHidden =
      typeof window !== 'undefined' &&
      window.getComputedStyle(el, null).getPropertyValue('overflow');

    /* eslint-enable no-restricted-globals */
    if (!isInset && isOverflowHidden) {
      const distanceFromCenter =
        ((center.x - width / 2) ** 2 + (center.y - height / 2) ** 2) ** 0.5;
      const scale = (diameter / 2 + distanceFromCenter) / (diameter / 2);
      ripple.rippleTransform = `translate3d(0px, 0px, 0) scale(${scale})`;
    } else {
      // prettier-ignore
      ripple.rippleTransform = `translate3d(${-center.x + width / 2}px, ${-center.y + height / 2}px, 0) scale(1)`;
    }
    if (isInset) {
      el.classList.add('ripple-inset');
    }

    // eslint-disable-next-line
    ripple.rippleWaveEl = document.createElement('div');
    ripple.rippleWaveEl.classList.add('ripple-wave');
    ripple.rippleWaveEl.style = `
      width: ${diameter}px;
      height: ${diameter}px;
      margin-top:-${diameter / 2}px;
      margin-left:-${diameter / 2}px;
      left:${center.x}px;
      top:${center.y}px; --ripple-transform: ${ripple.rippleTransform}`;

    el.insertAdjacentElement('afterbegin', ripple.rippleWaveEl);

    const animationEnd = () => {
      ripple.rippleWaveEl.removeEventListener('animationend', animationEnd);
      if (!ripple.rippleWaveEl) return;
      if (ripple.rippleWaveEl.classList.contains('ripple-wave-out')) return;
      ripple.rippleWaveEl.classList.add('ripple-wave-in');
      if (ripple.shouldBeRemoved) {
        ripple.out();
      }
    };
    ripple.rippleWaveEl.addEventListener('animationend', animationEnd);

    return ripple;
  }

  destroy() {
    let ripple = this;
    if (ripple.rippleWaveEl) {
      ripple.el.removeChild(ripple.rippleWaveEl);
    }
    Object.keys(ripple).forEach((key) => {
      ripple[key] = null;
      delete ripple[key];
    });
    ripple = null;
  }

  out() {
    const ripple = this;
    const { rippleWaveEl } = this;
    clearTimeout(ripple.removeTimeout);
    rippleWaveEl.classList.add('ripple-wave-out');

    ripple.removeTimeout = setTimeout(() => {
      ripple.destroy();
    }, 300);
    const animationEnd = () => {
      ripple.rippleWaveEl.removeEventListener('animationend', animationEnd);
      clearTimeout(ripple.removeTimeout);
      ripple.destroy();
    };
    ripple.rippleWaveEl.addEventListener('animationend', animationEnd);
  }

  remove() {
    const ripple = this;
    if (ripple.shouldBeRemoved) return;
    ripple.removeTimeout = setTimeout(() => {
      ripple.destroy();
    }, 400);
    ripple.shouldBeRemoved = true;
    if (ripple.rippleWaveEl.classList.contains('ripple-wave-in')) {
      ripple.out();
    }
  }
}
