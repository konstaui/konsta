import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const nextTick = (fn) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn);
  });
};

export const useHoverable = ({
  elRef = {},
  zIndex = 10,
  opacity = 1,
  offset = 1,
  enabled = true,
}) => {
  const data = useRef({});

  const removeHoverHighlight = () => {
    const el = elRef.current;
    if (el && data.current.elScale) {
      data.current.elScale = false;
      el.style.scale = '';

      const onTransitionEnd = () => {
        el.style.transitionDuration = '';
        el.style.transitionTimingFunction = '';
        el.removeEventListener('transitionend', onTransitionEnd);
      };
      el.addEventListener('transitionend', onTransitionEnd);
    }

    if (data.current.lightElWrap) {
      const lightElWrap = data.current.lightElWrap;
      if (lightElWrap.style.opacity === '0') {
        lightElWrap.remove();
      } else {
        lightElWrap.addEventListener('transitionend', () => {
          lightElWrap.remove();
        });
        lightElWrap.style.opacity = 0;
      }
    }
  };

  const setLightPosition = (e) => {
    if (data.current.lightEl) {
      const { x, y } = e;
      const offsetX = x - data.current.rect.x;
      const offsetY = y - data.current.rect.y;
      data.current.lightEl.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    }
  };

  const onPointerEnter = (e) => {
    if (!enabled) return;
    const d = data.current;

    const el = elRef.current;

    d.rect = el.getBoundingClientRect();
    const lightElWrap = document.createElement('span');
    lightElWrap.className = clsx('rounded-[inherit]');
    lightElWrap.style = `left: ${offset}px; top: ${offset}px; right: ${offset}px; bottom: ${offset}px;transition-duration: 300ms; opacity: 0; position: absolute; overflow: hidden; pointer-events: none`;
    const lightEl = document.createElement('span');
    const { width, height } = d.rect;
    const radius = (width ** 2 + height ** 2) ** 0.5;
    lightEl.style.position = `absolute`;
    lightEl.style.zIndex = zIndex;
    lightEl.style.width = `${radius * 2}px`;
    lightEl.style.left = `${-radius}px`;
    lightEl.style.height = `${radius * 2}px`;
    lightEl.style.top = `${-radius}px`;
    lightEl.style.borderRadius = `50%`;
    const lightColor = 'var(--color-ios-hover-highlight)';

    lightEl.style.backgroundImage = `radial-gradient(circle at center, color-mix(in oklab, ${lightColor} ${opacity * 100}%, transparent), transparent 50%)`;

    lightEl.style.pointerEvents = 'none';
    d.lightEl = lightEl;
    d.lightElWrap = lightElWrap;
    setLightPosition(e);
    lightElWrap.append(lightEl);
    el.append(lightElWrap);
    if (e.pointerType !== 'mouse') {
      if (e.pointerType !== 'mouse') {
        d.elScale = true;
        let scale = 1.25;
        if (d.rect.width > 60 || d.rect.height > 60) {
          scale = 1.05;
        }
        el.style.scale = scale;
        el.style.transitionDuration = '300ms';
        el.style.transitionTimingFunction = 'ease-in-out';
      }
    }
    nextTick(() => {
      lightElWrap.style.opacity = 1;
    });
  };

  const onPointerMove = (e) => {
    if (!enabled) return;
    setLightPosition(e);
  };
  const onPointerLeave = (e) => {
    removeHoverHighlight();
  };
  useEffect(() => {
    const el = elRef.current;
    el.addEventListener('pointerenter', onPointerEnter);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', onPointerLeave);
    return () => {
      el.removeEventListener('pointerenter', onPointerEnter);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onPointerLeave);
    };
  });

  return {
    removeHoverHighlight,
  };
};
