<template>
  <component :is="component" :id="id" ref="elRef" :class="c.base">
    <k-toolbar
      :outline="outline"
      :colors="{
        ...colors,
        bgMaterial: 'bg-inherit',
        bgIos: 'inherit dark:bg-ios-dark-surface-3',
      }"
    >
      <div v-if="slots.left" :class="c.left"><slot name="left" /></div>
      <div :class="c.messagebarArea">
        <textarea
          ref="areaElRef"
          type="textarea"
          :class="c.messagebarInput"
          :placeholder="placeholder"
          :name="name"
          :value="value"
          @input="onInput"
          @change="onChange"
        />
      </div>
      <div v-if="slots.right" :class="c.right"><slot name="right" /></div>
    </k-toolbar>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { MessagebarClasses } from '../../shared/classes/MessagebarClasses.js';
  import { MessagebarColors } from '../../shared/colors/MessagebarColors.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import kToolbar from './Toolbar.vue';

  export default {
    name: 'k-messagebar',
    components: {
      kToolbar,
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
      id: String,
      left: { type: String, default: undefined },
      name: { type: String, default: undefined },
      value: { type: [Number, String], default: undefined },
      placeholder: { type: String, defaullt: 'Message' },
      outline: { type: Boolean, default: false },
      rightClass: { type: String, default: '' },
      leftClass: { type: String, default: '' },
    },
    emits: ['change', 'input'],
    setup(props, ctx) {
      const elRef = ref(null);
      const areaElRef = ref(null);

      useTouchRipple(elRef, props);
      useTouchRipple(areaElRef, props);

      const colors = computed(() =>
        MessagebarColors(props.colors || {}, useDarkClasses)
      );

      const c = useThemeClasses(props, () =>
        MessagebarClasses(
          {
            ...props,
          },
          colors.value,
          ctx.attrs.class,
          useDarkClasses
        )
      );

      const onChange = (e) => {
        ctx.emit('change', e);
      };

      const onInput = (e) => {
        ctx.emit('input', e);
      };

      return {
        elRef,
        areaElRef,
        c,
        onChange,
        onInput,
        slots: ctx.slots,
      };
    },
  };
</script>
