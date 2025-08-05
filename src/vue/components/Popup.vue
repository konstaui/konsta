<template>
  <div v-if="backdrop" :class="c.backdrop[state]" @click="onBackdropClick" />
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { cls } from '../../shared/cls.js';
  import { PopupClasses } from '../../shared/classes/PopupClasses.js';
  import { PopupColors } from '../../shared/colors/PopupColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-popup',
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
      opened: Boolean,
      backdrop: { type: Boolean, default: true },
    },
    emits: ['backdropclick'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const state = computed(() => (props.opened ? 'opened' : 'closed'));
      const colors = computed(() =>
        PopupColors(props.colors || {}, useDarkClasses)
      );
      const c = useThemeClasses(props, () =>
        PopupClasses(props, colors.value, ctx.attrs.class)
      );

      const onBackdropClick = (e) => {
        ctx.emit('backdropclick', e);
      };

      const classes = computed(() =>
        cls(c.value.base[state.value], ctx.attrs.class)
      );

      return {
        classes,
        onBackdropClick,
        c,
        state,
      };
    },
  };
</script>
