import { useRef, useEffect } from 'react';
import { TouchRipple } from './touch-ripple-class';

export const useTouchRipple = (elRef, needsTouchRipple) => {
  const ripple = useRef(null);
  const removeRipple = () => {
    if (ripple.current) ripple.current.remove();
    ripple.current = null;
  };

  const onPointerDown = (e) => {
    ripple.current = new TouchRipple(elRef.current, e.pageX, e.pageY);
  };
  const onPointerMove = (e) => {
    removeRipple();
  };
  const onPointerUp = (e) => {
    removeRipple();
  };

  const attachEvents = () => {
    const el = elRef.current;
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  };
  const detachEvents = () => {
    const el = elRef.current;
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
  };
  const onMounted = () => {
    if (!elRef || !elRef.current || !needsTouchRipple) return;
    attachEvents();
  };
  const onDestroy = () => {
    if (!elRef || !elRef.current || !needsTouchRipple) return;
    detachEvents();
  };

  useEffect(() => {
    onMounted();
    return () => onDestroy();
  });
};
