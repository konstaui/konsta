import { ref, onMounted, onBeforeUnmount, inject } from 'vue';
import { TouchRipple } from './touch-ripple-class.js';

export const useTouchRipple = (elRef, needsTouchRipple) => {
  const context = inject('TailwindMobileContext');
  const ripple = ref(null);
  const removeRipple = () => {
    if (ripple.value) ripple.value.remove();
    ripple.value = null;
  };

  const onPointerDown = (e) => {
    ripple.value = new TouchRipple(elRef.value, e.pageX, e.pageY);
  };
  const onPointerMove = () => {
    removeRipple();
  };
  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    if (!context.value.touchRipple) return;

    const el = elRef.value;
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  };
  const detachEvents = () => {
    const el = elRef.value;
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
  };
  onMounted(() => {
    if (!elRef || !elRef.value || !needsTouchRipple) return;
    attachEvents();
  });

  onBeforeUnmount(() => {
    if (!elRef || !elRef.value || !needsTouchRipple) return;
    detachEvents();
  });
};
