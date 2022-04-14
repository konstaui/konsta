import { onMount, onDestroy } from 'svelte';
import { get } from 'svelte/store';
import { KonstaStore } from './KonstaStore.js';
import { TouchRipple } from '../../shared/touch-ripple-class.js';

export const useTouchRipple = (el, touchRipple) => {
  const needsTouchRipple = () =>
    touchRipple &&
    get(KonstaStore).theme === 'material' &&
    get(KonstaStore).touchRipple;

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
    if (!el || !el.current || !needsTouchRipple()) return;
    el.current.addEventListener('pointerdown', onPointerDown);
    el.current.addEventListener('pointermove', onPointerMove);
    el.current.addEventListener('pointerup', onPointerUp);
  };
  const detachEvents = () => {
    if (!el || !el.current) return;
    el.current.removeEventListener('pointerdown', onPointerDown);
    el.current.removeEventListener('pointermove', onPointerMove);
    el.current.removeEventListener('pointerup', onPointerUp);
  };

  onMount(() => {
    attachEvents();
  });
  onDestroy(() => {
    detachEvents();
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
