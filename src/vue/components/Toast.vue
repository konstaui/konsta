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
  import { cls } from '../shared/cls.js';
  import { positionClass } from '../shared/position-class.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'twm-toast',
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
      const c = useThemeClasses(props, () => ({
        base: {
          common: cls(
            colors.value.text,
            positionClass('fixed', ctx.attrs.class),
            'z-50 transform transition-transform-opacity w-full sm:w-auto left-0 bottom-0 sm:max-w-lg',
            !props.opened && 'translate-y-full opacity-0 pointer-events-none'
          ),
          ios: cls(
            `sm:rounded-lg duration-300`,
            colors.value.bgIos,
            props.translucent && 'translucent'
          ),
          material: cls(`sm:rounded duration-200`, colors.value.bgMaterial),
          left: 'sm:left-4-safe sm:bottom-4-safe',
          right: 'sm:right-4-safe sm:bottom-4-safe sm:left-auto',
          center: 'sm:left-1/2 sm:bottom-4-safe sm:-translate-x-1/2',
        },
        content: {
          common: 'flex items-center justify-between',
          ios: 'pl-4-safe pr-4-safe pt-3 pb-3-safe sm:px-4 sm:py-3',
          material: 'px-6 py-3.5',
        },
        button: {
          common: '-my-2 shrink-0 ml-4',
          ios: '',
          material: '-mr-2',
        },
      }));

      return {
        c,
        slots: ctx.slots,
      };
    },
  };
</script>
