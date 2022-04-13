import { onMount, onDestroy } from 'svelte';
import { KonstaStore } from './KonstaStore.js';
import { TouchRipple } from '../../shared/touch-ripple-class.js';

export const useTouchRipple = (el, needsTouchRipple) => {
  const context = $KonstaStore;

  let ripple = null;
  const removeRipple = () => {
    if (ripple) ripple.remove();
    ripple = null;
  };

  const onPointerDown = (e) => {
    ripple = new TouchRipple(el, e.pageX, e.pageY);
  };
  const onPointerMove = () => {
    removeRipple();
  };
  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    if (!context.touchRipple) return;

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  };
  const detachEvents = () => {
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
  };
  onMount(() => {
    if (!el || !el || !needsTouchRipple) return;
    attachEvents();
  });
  onDestroy(() => {
    if (!el || !el || !needsTouchRipple) return;
    detachEvents();
  });
};
