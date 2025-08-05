<template>
  <component
    :is="component"
    ref="elRef"
    :class="c.base"
    @blur-capture="onGlobalBlur"
    @focus-capture="onGlobalFocus"
  >
    <k-glass :class="c.inner">
      <span :class="c.searchIconWrap">
        <SearchIcon :theme="theme" :class="c.searchIcon" />
      </span>
      <input
        :id="inputId"
        ref="searchElRef"
        :class="cls(c.input)"
        :style="inputStyle"
        type="text"
        name="search"
        :placeholder="placeholder"
        :value="value"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <button
        v-if="value && clearButton"
        :class="c.clearButton"
        type="button"
        @click="onClear"
      >
        <DeleteIcon :theme="theme" :class="c.deleteIcon" />
      </button>
    </k-glass>
    <template v-if="disableButton">
      <k-glass
        v-if="theme === 'ios'"
        component="button"
        type="button"
        :style="{
          marginRight: isEnabled ? 0 : `-${48 + 16}px`,
          marginLeft: isEnabled ? '16px' : 0,
        }"
        :class="c.cancelButton"
        @click="handleDisableButton"
        @pointerdown.prevent
      >
        <SearchDisableIcon />
      </k-glass>
      <BackIcon
        v-else
        :class="cls(c.cancelButton)"
        :theme="theme"
        @click="handleDisableButton"
        @pointerdown.prevent
      />
    </template>
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { cls } from '../../shared/cls.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { darkClasses } from '../shared/use-dark-classes.js';
  import { SearchbarClasses } from '../../shared/classes/SearchbarClasses.js';
  import { SearchbarColors } from '../../shared/colors/SearchbarColors.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import DeleteIcon from './icons/DeleteIcon.vue';
  import SearchIcon from './icons/SearchIcon.vue';
  import SearchDisableIcon from './icons/SearchDisableIcon.vue';
  import BackIcon from './icons/BackIcon.vue';
  import kGlass from './Glass.vue';

  export default {
    name: 'k-searchbar',
    components: { DeleteIcon, BackIcon, SearchIcon, kGlass, SearchDisableIcon },
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
      placeholder: {
        type: String,
        default: 'Search',
      },
      value: [String, Number],
      inputId: String,
      inputStyle: [String, Object],
      disableButton: {
        type: Boolean,
        default: false,
      },
      clearButton: {
        type: Boolean,
        default: true,
      },
    },
    emits: [
      'change',
      'input',
      'focus',
      'blur',
      'clear',
      'blur-capture',
      'focus-capture',
      'disable',
    ],
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const elRef = ref(null);
      const searchElRef = ref(null);
      const disableTimeout = ref(null);
      const isEnabled = ref(false);
      const theme = useTheme(props, context);

      useTouchRipple(elRef, props, { context });

      const colors = computed(() =>
        SearchbarColors(props.colors || {}, useDarkClasses)
      );

      const handleChange = (e) => {
        ctx.emit('change', e);
      };

      const handleInput = (e) => {
        ctx.emit('input', e);
      };

      const onClear = (e) => {
        ctx.emit('clear', e);
      };

      const handleFocus = (e) => {
        isEnabled.value = true;
        ctx.emit('focus', e);
      };

      const handleBlur = (e) => {
        ctx.emit('blur', e);
      };

      const onGlobalBlur = () => {
        const { value } = props;
        if (!value) {
          disableTimeout.value = setTimeout(() => {
            isEnabled.value = false;
          });
        }
      };

      const onGlobalFocus = () => {
        clearTimeout(disableTimeout.value);
      };

      const handleDisableButton = (e) => {
        e.preventDefault();
        isEnabled.value = false;
        if (searchElRef.value) {
          searchElRef.value.blur();
        }
        ctx.emit('disable', e);
        if (onClear) onClear();
      };

      const c = useThemeClasses(props, () =>
        SearchbarClasses({ ...props }, colors.value, {
          isEnabled: isEnabled.value,
          darkClasses: useDarkClasses,
        })
      );

      return {
        elRef,
        searchElRef,
        onGlobalBlur,
        onGlobalFocus,
        handleInput,
        handleChange,
        handleFocus,
        handleBlur,
        onClear,
        handleDisableButton,
        isEnabled,
        c,
        theme,
        cls,
      };
    },
  };
</script>
