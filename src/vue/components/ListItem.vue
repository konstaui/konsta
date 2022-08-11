<template>
  <component :is="component" v-if="divider || groupTitle" :class="c.divider">
    {{ title }}
    <slot name="title" />
    <slot />
  </component>
  <component :is="component" v-else :class="c.base">
    <component
      :is="ItemContentComponent"
      ref="rippleElRef"
      :class="itemContentClasses"
      v-bind="linkPropsComputed"
    >
      <div v-if="media || slots.media" :class="c.media">
        {{ media }}<slot name="media" />
      </div>
      <div :class="c.inner">
        <div v-if="header || slots.header" :class="c.header">
          {{ header }}<slot name="header" />
        </div>
        <div
          v-if="title || after || slots.title || slots.after"
          :class="c.titleWrap"
        >
          <div v-if="title || slots.title" :class="titleClasses">
            {{ title }}<slot name="title" />
          </div>
          <div v-if="after || slots.after" :class="c.after">
            {{ after }}<slot name="after" />
          </div>
          <chevron-icon
            v-if="isLink && chevron && !menuListItem"
            :class="c.chevron"
          />
        </div>
        <div v-if="subtitle || slots.subtitle" :class="c.subtitle">
          {{ subtitle }}<slot name="subtitle" />
        </div>
        <div v-if="text || slots.text" :class="c.text">
          {{ text }}<slot name="text" />
        </div>
        <div v-if="footer || slots.footer" :class="c.footer">
          {{ footer }}<slot name="footer" />
        </div>
        <slot name="inner" />
      </div>
      <slot name="content" />
    </component>
    <slot />
  </component>
</template>
<script>
  import { ref, computed } from 'vue';
  import { useTheme } from '../shared/use-theme.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import ChevronIcon from './icons/ChevronIcon.vue';
  import { useDarkClasses } from '../shared/use-dark-classes.js';
  import { ListItemClasses } from '../../shared/classes/ListItemClasses.js';
  import { ListItemColors } from '../../shared/colors/ListItemColors.js';

  export default {
    name: 'k-list-item',
    components: {
      ChevronIcon,
    },
    props: {
      component: {
        type: String,
        default: 'li',
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
      mediaClass: { type: String, default: '' },
      innerClass: { type: String, default: '' },
      contentClass: { type: String, default: '' },
      titleWrapClass: { type: String, default: '' },
      titleFontSizeIos: { type: String, default: 'text-[17px]' },
      titleFontSizeMaterial: {
        type: String,
        default: 'text-[16px]',
      },

      // Content props
      title: { type: String, default: undefined },
      subtitle: { type: String, default: undefined },
      text: { type: String, default: undefined },
      after: { type: String, default: undefined },
      media: { type: String, default: undefined },
      header: { type: String, default: undefined },
      footer: { type: String, default: undefined },

      menuListItem: { type: Boolean, default: false },
      menuListItemActive: { type: Boolean, default: false },

      hairlines: { type: Boolean, default: true },

      // Enable divider
      divider: { type: Boolean, default: false },
      groupTitle: { type: Boolean, default: false },

      // Title
      strongTitle: { type: [String, Boolean], default: 'auto' },

      // Label props
      label: { type: Boolean, default: false },

      // Link props
      chevron: { type: Boolean, default: true },
      href: { type: [Boolean, String], default: undefined },
      target: { type: String, default: undefined },

      link: { type: Boolean, default: undefined },
      linkComponent: { type: String, default: 'a' },
      linkProps: { type: Object, default: () => ({}) },

      touchRipple: { type: Boolean, default: true },
    },
    setup(props, ctx) {
      const rippleElRef = ref(null);

      const colors = computed(() =>
        ListItemColors(props.colors || {}, useDarkClasses)
      );

      const isMenuListItemActive = computed(
        () => props.menuListItem && props.menuListItemActive
      );

      const textColor = computed(() =>
        isMenuListItemActive.value
          ? colors.value.menuListItemText
          : colors.value.text
      );

      const isLink = computed(
        () =>
          !!props.href || props.href === '' || props.menuListItem || props.link
      );
      const isLabel = computed(() => !!props.label);

      const theme = useTheme(props);

      const needsTouchRipple = computed(
        () =>
          theme.value === 'material' &&
          (isLabel.value || isLink.value) &&
          props.touchRipple
      );
      useTouchRipple(rippleElRef, props, () => isLabel.value || isLink.value);

      const hrefComputed = computed(() =>
        props.href === true ||
        props.href === false ||
        typeof props.href === 'undefined'
          ? undefined
          : props.href || ''
      );
      const ItemContentComponent = computed(() =>
        isLink.value ? props.linkComponent : isLabel.value ? 'label' : 'div'
      );
      const linkPropsComputed = computed(() =>
        isLink.value
          ? {
              href: hrefComputed.value,
              target: props.target,
              ...(props.linkProps || {}),
            }
          : {}
      );

      const autoStrongTitle = computed(
        () =>
          props.strongTitle === 'auto' &&
          (props.title || ctx.slots.title) &&
          (props.subtitle || ctx.slots.subtitle || props.text || ctx.slots.text)
      );

      const c = useThemeClasses(props, () =>
        ListItemClasses(props, colors.value, {
          theme: theme.value,
          textColor: textColor.value,
          needsTouchRipple: needsTouchRipple.value,
          isMenuListItemActive: isMenuListItemActive.value,
          darkClasses: useDarkClasses,
          autoStrongTitle: autoStrongTitle.value,
        })
      );

      const itemContentClasses = computed(() =>
        isLink.value || isLabel.value
          ? c.value.itemContent.link
          : c.value.itemContent.default
      );

      const titleClasses = computed(() =>
        props.menuListItem
          ? c.value.title.menuListItem
          : props.strongTitle === true || autoStrongTitle.value
          ? c.value.title.strong
          : c.value.title.default
      );

      return {
        rippleElRef,
        ItemContentComponent,
        isLink,
        c,
        linkPropsComputed,
        itemContentClasses,
        titleClasses,
        slots: ctx.slots,
      };
    },
  };
</script>
