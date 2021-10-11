<template>
  <twm-list-item v-bind="listItemProps">
    <slot />
    <template #title v-if="slots.title">
      <slot name="title" />
    </template>
    <template #media v-if="slots.media">
      <slot name="media" />
    </template>
    <template #header v-if="slots.header">
      <slot name="header" />
    </template>
    <template #after v-if="slots.after">
      <slot name="after" />
    </template>
    <template #subtitle v-if="slots.subtitle">
      <slot name="subtitle" />
    </template>
    <template #text v-if="slots.text">
      <slot name="text" />
    </template>
    <template #footer v-if="slots.footer">
      <slot name="footer" />
    </template>
    <template #inner v-if="slots.inner">
      <slot name="inner" />
    </template>
    <template #content v-if="slots.content">
      <slot name="content" />
    </template>
  </twm-list-item>
</template>
<script>
  import { computed } from 'vue';
  import twmListItem from './ListItem.vue';

  export default {
    components: {
      twmListItem,
    },
    props: {
      ...twmListItem.props,
      href: { type: [String, Boolean], default: undefined },
      active: Boolean,
    },
    setup(props, ctx) {
      const listItemProps = computed(() => ({
        ...props,
        menuListItem: true,
        menuListItemActive: props.active,
        href: props.href || false,
      }));
      return {
        listItemProps,
        slots: ctx.slots,
      };
    },
  };
</script>
