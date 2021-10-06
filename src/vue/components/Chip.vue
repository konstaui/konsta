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
  import { cls } from '../shared/cls.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import DeleteIcon from './icons/DeleteIcon.vue';

  export default {
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

      const c = useThemeClasses(props, () => ({
        base: {
          common: `${colors.value.text} text-sm inline-flex items-center justify-center align-middle rounded-full px-3 py-1`,
          fill: `${colors.value.bg}`,
          outline: `border ${colors.value.border}`,
        },
        media: '-ml-3 -my-1 mr-1 select-none',
        deleteButton:
          '-mr-2 -my-1 ml-1 h-full flex items-center justify-center w-6 cursor-pointer opacity-50 active:opacity-100 select-none',
      }));

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
