import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { TouchRipple } from '../../shared/touch-ripple-class.js';

export const useTouchRipple = (
  elRef,
  props,
  { addCondition, eventsElRef, context } = {}
) => {
  if (!eventsElRef) eventsElRef = elRef;
  const ripple = ref(null);
  let eventsAttached = false;

  const getEl = (reference) => {
    if (!reference || !reference.value) return null;
    let el = reference.value;
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
      context.value.materialTouchRipple &&
      (addCondition ? addCondition() : true)
    );
  };
  const removeRipple = () => {
    if (ripple.value) ripple.value.remove();
    ripple.value = null;
  };

  const onPointerDown = (e) => {
    ripple.value = new TouchRipple(getEl(elRef), e.pageX, e.pageY);
  };
  const onPointerMove = () => {
    removeRipple();
  };
  const onPointerUp = () => {
    removeRipple();
  };

  const attachEvents = () => {
    if (!context.value.materialTouchRipple || eventsAttached) return;
    eventsAttached = true;
    const el = getEl(eventsElRef);
    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointercancel', onPointerUp);
    el.addEventListener('contextmenu', onPointerUp);
  };
  const detachEvents = () => {
    eventsAttached = false;
    const el = getEl(eventsElRef);
    el.removeEventListener('pointerdown', onPointerDown);
    el.removeEventListener('pointermove', onPointerMove);
    el.removeEventListener('pointerup', onPointerUp);
    el.removeEventListener('pointercancel', onPointerUp);
    el.removeEventListener('contextmenu', onPointerUp);
  };

  watch(
    () => needsTouchRipple(),
    (newV) => {
      if (newV) attachEvents();
      else detachEvents();
    }
  );

  onMounted(() => {
    if (!getEl(eventsElRef) || !needsTouchRipple()) return;
    attachEvents();
  });

  onBeforeUnmount(() => {
    if (!getEl(eventsElRef) || !needsTouchRipple()) return;
    detachEvents();
  });
};
