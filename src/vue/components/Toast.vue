<template>
  <component :is="component" :class="c.base[position]">
    <k-glass :class="c.inner">
      <div :class="c.content">
        <slot />
        <div v-if="slots.button" :class="c.button"><slot name="button" /></div>
      </div>
    </k-glass>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { ToastClasses } from '../../shared/classes/ToastClasses.js';
  import { ToastColors } from '../../shared/colors/ToastColors.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import kGlass from './Glass.vue';

  export default {
    name: 'k-toast',
    components: {
      kGlass,
    },
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
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const colors = computed(() =>
        ToastColors(props.colors || {}, useDarkClasses)
      );
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
