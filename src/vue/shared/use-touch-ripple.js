import { ref, onMounted, onBeforeUnmount, inject, watch } from 'vue';
import { TouchRipple } from './touch-ripple-class.js';

export const useTouchRipple = (elRef, props, addCondition) => {
  const context = inject('KonstaContext');
  const ripple = ref(null);
  let eventsAttached = false;

  const getEl = () => {
    if (!elRef || !elRef.value) return null;
    let el = elRef.value;
    if (el.$el) el = el.$el;
    return el;
  };

  const theme = () => {
    let value = context.value.theme || 'ios';
    if (props.ios) value = 'ios';
    if (props.material) value = 'material';
    return value;
  };
  const needsTouchRipple = () => {
    return (
      theme() === 'material' &&
      props.touchRipple &&
      (addCondition ? addCondition() : true)
    );
  };
  const removeRipple = () => {
    if (ripple.value) ripple.value.remove();
    ripple.value = null;
  };

  const onPointerDown = (e) => {
    ripple.value = new TouchRipple(getEl(), e.pageX, e.pageY);
  };
  const onPointerMove = () => {
    removeRipple();
  };
  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    if (!context.value.touchRipple || eventsAttached) return;
    eventsAttached = true;
    const el = getEl();
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  };
  const detachEvents = () => {
    eventsAttached = false;
    const el = getEl();
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
  };

  watch(
    () => needsTouchRipple(),
    (newV) => {
      if (newV) attachEvents();
      else detachEvents();
    }
  );

  onMounted(() => {
    if (!getEl() || !needsTouchRipple()) return;
    attachEvents();
  });

  onBeforeUnmount(() => {
    if (!getEl() || !needsTouchRipple()) return;
    detachEvents();
  });
};
