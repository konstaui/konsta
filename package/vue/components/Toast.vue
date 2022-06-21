<template>
  <component :is="component" :class="c.base[position]">
    <div :class="c.content">
      <slot />
      <div v-if="slots.button" :class="c.button"><slot name="button" /></div>
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { ToastClasses } from '../../shared/esm/classes/ToastClasses.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-toast',
    props: {
      component: {
        type: String,
        default: 'div',
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
      position: { type: String, default: 'left' },
      opened: Boolean,
      translucent: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const colors = computed(() => ({
        bgIos: 'bg-toast-ios',
        bgMaterial: 'bg-toast-material',
        text: 'text-white',
        ...(props.colors || {}),
      }));
      const c = useThemeClasses(props, () =>
        ToastClasses(props, colors.value, ctx.attrs.class)
      );

      return {
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
