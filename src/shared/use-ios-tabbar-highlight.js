export const useIosTabbarHighlight = (params) => {
  const {
    getEl,
    getHighlightEl,
    getHighlightInnerEl,
    getHighlightThumbEl,
    getHasHighlight,
    data = {},
    getHasTabbarLinks = () => false,
    setHasTabbarLinks = () => {},
    classes = {},
    getHighlightStyle = {},
    setHighlightStyle = () => {},
  } = params;

  const startAnimation = () => {
    data.raf = requestAnimationFrame(() => {
      if (!data.setTransform) return;
      const highlightEl = getHighlightEl();
      if (!highlightEl) return;
      highlightEl.style.transform = data.setTransform;
      highlightEl.style.transitionTimingFunction = 'ease-out';
      data.setTransform = null;
    });
  };

  const stopAnimation = () => {
    cancelAnimationFrame(data.raf);
  };

  const setHighlightOnTouch = (e) => {
    if (!getHasTabbarLinks()) return;
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

    getHighlightInnerEl().classList.add(
      ...classes.highlightInnerPressed.split(' ')
    );
    getHighlightThumbEl().classList.add(
      ...classes.highlightThumbPressed.split(' ')
    );
    data.setTransform = `translateX(${translateX}px)`;
    startAnimation();
  };

  const unsetHighlightOnTouch = () => {
    if (!getHasTabbarLinks()) return;
    cancelAnimationFrame(data.raf);
    data.setTransform = null;
    getHighlightInnerEl().classList.remove(
      ...classes.highlightInnerPressed.split(' ')
    );
    getHighlightThumbEl().classList.remove(
      ...classes.highlightThumbPressed.split(' ')
    );
    const { activeIndex, newActiveIndex, linkEls } = data;
    if (activeIndex !== newActiveIndex) {
      linkEls[newActiveIndex].click();
    }
    getHighlightEl().style.transform = `translateX(${newActiveIndex * 100}%)`;
    getHighlightEl().style.transitionTimingFunction = '';

    setHighlightStyle({
      ...getHighlightStyle(),
      transform: `translateX(${newActiveIndex * 100}%)`,
      transitionTimingFunction: '',
    });
  };

  const onPointer = (e) => {
    if (e.pointerType !== 'touch') return;
    const el = getEl();
    if (!el) return;

    if (e.type === 'pointerdown') {
      data.rect = el.getBoundingClientRect();
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

  const onUpdated = () => {
    if (getHasHighlight() && getHighlightEl()) {
      const el = getEl();
      if (!el) return;
      const linkEls = el.querySelectorAll('a, button');
      if (!linkEls.length) {
        setHasTabbarLinks(false);
        return;
      }

      setHasTabbarLinks(true);
      const activeLinkEl = getEl().querySelector('.k-tabbar-link-active');
      const width = (1 / linkEls.length) * 100;
      const activeIndex = [...linkEls].indexOf(activeLinkEl);
      data.linkEls = linkEls;
      data.activeIndex = activeIndex;
      setHighlightStyle({
        ...getHighlightStyle(),
        width: `${width}%`,
        transform: `translateX(${activeIndex * 100}%)`,
      });
    }
  };

  const attachEvents = () => {
    const el = getEl();
    if (!el || !getHasHighlight()) return;
    el.addEventListener('pointerdown', onPointer);
    document.addEventListener('pointermove', onPointer);
    document.addEventListener('pointerup', onPointer);
  };
  const detachEvents = () => {
    const el = getEl();
    if (!el || !getHasHighlight()) return;
    el.removeEventListener('pointerdown', onPointer);
    document.removeEventListener('pointermove', onPointer);
    document.removeEventListener('pointerup', onPointer);
  };

  return {
    attachEvents,
    detachEvents,
    onUpdated,
  };
};
