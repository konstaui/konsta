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

  import { PanelClasses } from '../../shared/classes/PanelClasses.js';

  import { PanelColors } from '../../shared/colors/PanelColors.js';

  import { darkClasses } from '../shared/use-dark-classes.js';

  import { themeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-panel',
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
      size: { type: String, default: 'w-72 h-screen' },
      side: { type: String, default: 'left' },
      opened: Boolean,
      floating: { type: Boolean, default: false },
      backdrop: { type: Boolean, default: true },
    },
    emits: ['backdropclick'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const state = computed(() => (props.opened ? 'opened' : 'closed'));
      const colors = computed(() =>
        PanelColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        PanelClasses(props, colors.value, ctx.attrs.class)
      );

      const classes = computed(() =>
        cls(c.value.base, c.value[props.side][state.value], ctx.attrs.class)
      );

      const onBackdropClick = (e) => {
        ctx.emit('backdropclick', e);
      };

      return {
        onBackdropClick,
        c,
        state,
        classes,
      };
    },
  };
</script>
