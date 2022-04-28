<template>
  <k-page>
    <k-navbar title="Breadcrumbs">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block strong>
      <p>
        Breadcrumbs allow users to keep track and maintain awareness of their
        locations within the app or website. They should be used for large sites
        and apps with hierarchically arranged pages.
      </p>
    </k-block>

    <k-block-title>Basic</k-block-title>
    <k-block strong>
      <k-breadcrumbs>
        <k-breadcrumbs-item>
          <k-link :colors="{ text: 'text-inherit' }">Home</k-link>
        </k-breadcrumbs-item>
        <k-breadcrumbs-separator />
        <k-breadcrumbs-item>
          <k-link :colors="{ text: 'text-inherit' }">Catalog</k-link>
        </k-breadcrumbs-item>
        <k-breadcrumbs-separator />
        <k-breadcrumbs-item active>Phones</k-breadcrumbs-item>
      </k-breadcrumbs>
    </k-block>

    <k-block-title>Scrollable</k-block-title>
    <k-block-header
      >Breadcrumbs will be scrollable if they don't fit the
      screen</k-block-header
    >
    <k-block strong>
      <k-breadcrumbs>
        <k-breadcrumbs-item>
          <k-link :colors="{ text: 'text-inherit' }">Home</k-link>
        </k-breadcrumbs-item>
        <k-breadcrumbs-separator />
        <k-breadcrumbs-item>
          <k-link :colors="{ text: 'text-inherit' }">Catalog</k-link>
        </k-breadcrumbs-item>
        <k-breadcrumbs-separator />
        <k-breadcrumbs-item>
          <k-link :colors="{ text: 'text-inherit' }">Phones</k-link>
        </k-breadcrumbs-item>
        <k-breadcrumbs-separator />
        <k-breadcrumbs-item>
          <k-link :colors="{ text: 'text-inherit' }">Apple</k-link>
        </k-breadcrumbs-item>
        <k-breadcrumbs-separator />
        <k-breadcrumbs-item active>iPhone 12</k-breadcrumbs-item>
      </k-breadcrumbs>
    </k-block>

    <k-block-title>Collapsed</k-block-title>
    <k-block strong>
      <k-breadcrumbs>
        <k-breadcrumbs-item>
          <k-link :colors="{ text: 'text-inherit' }">Home</k-link>
        </k-breadcrumbs-item>
        <k-breadcrumbs-separator />
        <k-breadcrumbs-collapsed
          ref="popoverTargetRef"
          @click="() => (popoverOpened = true)"
        />

        <k-breadcrumbs-separator />
        <k-breadcrumbs-item active>iPhone 12</k-breadcrumbs-item>
      </k-breadcrumbs>
    </k-block>
    <k-popover
      :opened="popoverOpened"
      :target="popoverTargetRef"
      style="width: 120px"
      @backdropclick="() => (popoverOpened = false)"
    >
      <k-list nested :hairlines="false" :colors="{ bg: 'bg-transparent' }">
        <k-list-item
          link
          title="Catalog"
          @click="() => (popoverOpened = false)"
        />
        <k-list-item
          link
          title="Phones"
          @click="() => (popoverOpened = false)"
        />
        <k-list-item
          link
          title="Apple"
          @click="() => (popoverOpened = false)"
        />
      </k-list>
    </k-popover>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kLink,
    kBlock,
    kBlockTitle,
    kBlockHeader,
    kBreadcrumbs,
    kBreadcrumbsItem,
    kBreadcrumbsSeparator,
    kBreadcrumbsCollapsed,
    kPopover,
    kList,
    kListItem,
  } from 'konsta/vue';

  export default {
    name: 'BreadcrumbsPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kLink,
      kBlock,
      kBlockTitle,
      kBlockHeader,
      kBreadcrumbs,
      kBreadcrumbsItem,
      kBreadcrumbsSeparator,
      kBreadcrumbsCollapsed,
      kPopover,
      kList,
      kListItem,
    },
    setup() {
      const popoverOpened = ref(false);
      const popoverTargetRef = ref(null);
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
        popoverOpened,
        popoverTargetRef,
      };
    },
  };
</script>
