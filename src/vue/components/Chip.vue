<template>
  <component :is="component" :class="c.base[style]">
    <div v-if="slots.media" :class="c.media"><slot name="media" /></div>
    <slot />
    <div
      v-if="deleteButton"
      :class="c.deleteButton"
      role="button"
      tabindex="0"
      @click="onDelete"
    >
      <delete-icon :theme="theme" class="h-4 w-4" />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { ChipClasses } from '../../shared/classes/ChipClasses.js';
  import { ChipColors } from '../../shared/colors/ChipColors.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import DeleteIcon from './icons/DeleteIcon.vue';

  export default {
    name: 'k-chip',
    components: {
      DeleteIcon,
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
      deleteButton: {
        type: Boolean,
        default: false,
      },
      outline: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['delete'],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const style = computed(() => (props.outline ? 'outline' : 'fill'));
      const theme = useTheme({}, context);

      const colors = computed(() =>
        ChipColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () => ChipClasses(props, colors.value));

      const onDelete = () => {
        ctx.emit('delete');
      };
      return {
        c,
        slots: ctx.slots,
        style,
        theme,
        onDelete,
      };
    },
  };
</script>
