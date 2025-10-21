import { effect } from '@angular/core';
import { TouchRipple } from '../../shared/touch-ripple-class.js';
import { injectKonstaContext } from './konsta-context.js';

type Getter<T> = () => T | null | undefined;

export interface TouchRippleOptions {
  element: Getter<HTMLElement>;
  eventsElement?: Getter<HTMLElement>;
  needsRipple?: Getter<boolean>;
}

export const useTouchRipple = (options: TouchRippleOptions) => {
  const ctx = injectKonstaContext();

  effect((onCleanup) => {
    const el = options.element();
    const eventsEl = options.eventsElement?.() ?? el;
    const needsRipple = options.needsRipple?.() ?? true;

    if (
      !el ||
      !eventsEl ||
      !needsRipple ||
      !ctx.materialTouchRipple() ||
      typeof window === 'undefined'
    ) {
      return;
    }

    let ripple: TouchRipple | null = null;

    const removeRipple = () => {
      ripple?.remove();
      ripple = null;
    };

    const onPointerDown = (event: PointerEvent) => {
      ripple = new TouchRipple(el, event.pageX, event.pageY);
    };
    const onPointerMove = () => removeRipple();
    const onPointerUp = () => removeRipple();

    eventsEl.addEventListener('pointerdown', onPointerDown);
    eventsEl.addEventListener('pointermove', onPointerMove);
    eventsEl.addEventListener('pointerup', onPointerUp);
    eventsEl.addEventListener('pointercancel', onPointerUp);
    eventsEl.addEventListener('contextmenu', onPointerUp);

    onCleanup(() => {
      removeRipple();
      eventsEl.removeEventListener('pointerdown', onPointerDown);
      eventsEl.removeEventListener('pointermove', onPointerMove);
      eventsEl.removeEventListener('pointerup', onPointerUp);
      eventsEl.removeEventListener('pointercancel', onPointerUp);
      eventsEl.removeEventListener('contextmenu', onPointerUp);
    });
  });
};
