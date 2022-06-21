<template>
  <component :is="component" :class="c.base[style]">
    <div v-if="slots.media" :class="c.media"><slot name="media" /></div>
    <slot />
    <div v-if="deleteButton" :class="c.deleteButton" @click="onDelete">
      <delete-icon class="h-4 w-4" />
    </div>
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { ChipClasses } from '../../shared/esm/classes/ChipClasses.js';
  import { cls } from '../../shared/esm/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
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
      const style = computed(() => (props.outline ? 'outline' : 'fill'));

      const colors = computed(() => ({
        bg: cls(
          `bg-black bg-opacity-10`,
          useDarkClasses('dark:bg-white dark:bg-opacity-10')
        ),
        text: 'text-current',
        border: cls(
          `border-black border-opacity-10`,
          useDarkClasses('dark:border-white dark:border-opacity-10')
        ),
        ...(props.colors || {}),
      }));

      const c = useThemeClasses(props, () => ChipClasses(props, colors.value));

      const onDelete = () => {
        ctx.emit('delete');
      };
      return {
        c,
        slots: ctx.slots,
        style,
        onDelete,
      };
    },
  };
</script>
