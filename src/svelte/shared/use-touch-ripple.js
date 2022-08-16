import { onMount, onDestroy } from 'svelte';
import { get } from 'svelte/store';
import { KonstaStore } from './KonstaStore.js';
import { TouchRipple } from '../../shared/touch-ripple-class.js';

export const useTouchRipple = (el, touchRipple, eventsEl) => {
  if (!eventsEl) eventsEl = el;
  const needsTouchRipple = () => {
    return (
      touchRipple &&
      get(KonstaStore).theme === 'material' &&
      get(KonstaStore).touchRipple
    );
  };

  let ripple = null;
  const removeRipple = () => {
    if (ripple) ripple.remove();
    ripple = null;
  };

  const onPointerDown = (e) => {
    ripple = new TouchRipple(el.current, e.pageX, e.pageY);
  };
  const onPointerMove = () => {
    removeRipple();
  };
  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    if (
      !eventsEl ||
      !eventsEl.current ||
      !eventsEl.current.addEventListener ||
      !needsTouchRipple() ||
      eventsEl.__touchRippleAttached__
    )
      return;

    eventsEl.__touchRippleAttached__ = true;
    eventsEl.current.addEventListener('pointerdown', onPointerDown);
    eventsEl.current.addEventListener('pointermove', onPointerMove);
    eventsEl.current.addEventListener('pointerup', onPointerUp);
    eventsEl.current.addEventListener('pointercancel', onPointerUp);
    eventsEl.current.addEventListener('contextmenu', onPointerUp);
  };
  const detachEvents = (deleteFlag) => {
    if (!eventsEl || !eventsEl.current || !eventsEl.current.addEventListener)
      return;
    if (deleteFlag) {
      delete eventsEl.__touchRippleAttached__;
    }
    eventsEl.current.removeEventListener('pointerdown', onPointerDown);
    eventsEl.current.removeEventListener('pointermove', onPointerMove);
    eventsEl.current.removeEventListener('pointerup', onPointerUp);
    eventsEl.current.removeEventListener('pointercancel', onPointerUp);
    eventsEl.current.removeEventListener('contextmenu', onPointerUp);
  };

  onMount(() => {
    attachEvents();
  });
  onDestroy(() => {
    detachEvents(true);
  });

  KonstaStore.subscribe(() => {
    if (!needsTouchRipple()) {
      detachEvents();
    } else {
      detachEvents();
      attachEvents();
    }
  });
};
