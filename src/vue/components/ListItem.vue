<template>
  <component :is="component" v-if="groupTitle" :class="c.groupTitle">
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
            v-if="isLink && hasChevron && !menuListItem"
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
  import { computed, inject, ref } from 'vue';
  import { useContext } from '../shared/use-context.js';
  import { useTheme } from '../shared/use-theme.js';
  import { themeClasses } from '../shared/use-theme-classes.js';
  import { useTouchRipple } from '../shared/use-touch-ripple.js';
  import ChevronIcon from './icons/ChevronIcon.vue';
  import { darkClasses } from '../shared/use-dark-classes.js';
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

      dividers: {
        type: Boolean,
        default: undefined,
      },
      contacts: {
        type: Boolean,
        default: undefined,
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

      groupTitle: { type: Boolean, default: false },

      // Title
      strongTitle: { type: [String, Boolean], default: 'auto' },

      // Label props
      label: { type: Boolean, default: false },

      // Link props
      chevron: { type: Boolean, default: undefined },
      chevronIos: { type: Boolean, default: true },
      chevronMaterial: { type: Boolean, default: true },
      href: { type: [Boolean, String], default: undefined },
      target: { type: String, default: undefined },

      link: { type: Boolean, default: undefined },
      linkComponent: { type: String, default: 'a' },
      linkProps: { type: Object, default: () => ({}) },
    },
    setup(props, ctx) {
      const context = useContext();
      const useDarkClasses = darkClasses(context);
      const useThemeClasses = themeClasses(context);
      const rippleElRef = ref(null);
      const theme = useTheme(props, context);

      const colors = computed(() =>
        ListItemColors(props.colors || {}, useDarkClasses)
      );

      const isMenuListItemActive = computed(
        () => props.menuListItem && props.menuListItemActive
      );

      const hasChevron = computed(() =>
        typeof props.chevron === 'undefined'
          ? theme.value === 'ios'
            ? props.chevronIos
            : props.chevronMaterial
          : props.chevron
      );

      const textColor = computed(
        () =>
          colors.value[
            `${
              isMenuListItemActive.value
                ? 'menuListItemActiveText'
                : props.menuListItem
                  ? 'menuListItemText'
                  : 'text'
            }${theme.value === 'ios' ? 'Ios' : 'Material'}`
          ]
      );

      const isLink = computed(
        () =>
          !!props.href || props.href === '' || props.menuListItem || props.link
      );
      const isLabel = computed(() => !!props.label);

      const needsTouchRipple = computed(
        () => theme.value === 'material' && (isLabel.value || isLink.value)
      );

      useTouchRipple(rippleElRef, props, {
        addCondition: () => isLabel.value || isLink.value,
        context,
      });

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

      const isMediaItem = computed(
        () =>
          (props.title || ctx.slots.title) &&
          (props.subtitle || ctx.slots.subtitle || props.text || ctx.slots.text)
      );

      const autoStrongTitle = computed(
        () => props.strongTitle === 'auto' && isMediaItem.value
      );

      const ListContext = inject('ListContext', {
        value: { dividers: false, nested: false },
      });

      const c = useThemeClasses(props, () =>
        ListItemClasses(
          {
            ...props,
            dividers:
              typeof props.dividers === 'undefined'
                ? ListContext.value.dividers
                : props.dividers,
            contacts:
              typeof props.contacts === 'undefined' ? '' : props.contacts,
          },
          colors.value,
          {
            isMediaItem: isMediaItem.value,
            theme: theme.value,
            textColor: textColor.value,
            needsTouchRipple: needsTouchRipple.value,
            isMenuListItemActive: isMenuListItemActive.value,
            darkClasses: useDarkClasses,
            autoStrongTitle: autoStrongTitle.value,
            nested: ListContext.value.nested,
          },
          ctx.attrs.class
        )
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
        hasChevron,
        linkPropsComputed,
        itemContentClasses,
        titleClasses,
        slots: ctx.slots,
      };
    },
  };
</script>
