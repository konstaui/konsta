import { onMount, onDestroy } from 'svelte';
import { KonstaStore } from './KonstaStore.svelte.js';
import { TouchRipple } from '../../shared/touch-ripple-class.js';

export const useTouchRipple = (
  getEl = () => null,
  getTouchRipple,
  getEventsEl
) => {
  if (!getEventsEl) getEventsEl = getEl;
  const needsTouchRipple = () => {
    return (
      getTouchRipple() &&
      KonstaStore.theme === 'material' &&
      KonstaStore.materialTouchRipple
    );
  };

  let ripple = null;
  const removeRipple = () => {
    if (ripple) ripple.remove();
    ripple = null;
  };

  const onPointerDown = (e) => {
    ripple = new TouchRipple(getEl(), e.pageX, e.pageY);
  };
  const onPointerMove = () => {
    removeRipple();
  };
  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    const eventsEl = getEventsEl();
    if (
      !eventsEl ||
      !eventsEl.addEventListener ||
      !needsTouchRipple() ||
      eventsEl.__touchRippleAttached__
    )
      return;
    eventsEl.__touchRippleAttached__ = true;
    eventsEl.addEventListener('pointerdown', onPointerDown);
    eventsEl.addEventListener('pointermove', onPointerMove);
    eventsEl.addEventListener('pointerup', onPointerUp);
    eventsEl.addEventListener('pointercancel', onPointerUp);
    eventsEl.addEventListener('contextmenu', onPointerUp);
  };
  const detachEvents = (deleteFlag) => {
    const eventsEl = getEventsEl();
    if (!eventsEl || !eventsEl.addEventListener) return;
    if (deleteFlag) {
      delete eventsEl.__touchRippleAttached__;
    }
    eventsEl.removeEventListener('pointerdown', onPointerDown);
    eventsEl.removeEventListener('pointermove', onPointerMove);
    eventsEl.removeEventListener('pointerup', onPointerUp);
    eventsEl.removeEventListener('pointercancel', onPointerUp);
    eventsEl.removeEventListener('contextmenu', onPointerUp);
  };

  $effect(() => {
    if (needsTouchRipple()) {
      attachEvents();
    } else {
      detachEvents(true);
    }
  });
  $effect.pre(() => {
    if (!needsTouchRipple()) {
      detachEvents(true);
    }
  });
  onDestroy(() => {
    detachEvents(true);
  });
};
