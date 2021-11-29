<template>
  <k-page>
    <k-navbar title="Content Block">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-title>Block Title</k-block-title>
    <k-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-title>With Header & Footer</k-block-title>
    <k-block-header>Header</k-block-header>
    <k-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-footer>Footer</k-block-footer>
    <k-block-title class="text-2xl">Medium Title</k-block-title>
    <k-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-title class="text-3xl">Large Title</k-block-title>
    <k-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>

    <k-block-title>Inset Block</k-block-title>
    <k-block strong inset>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlock,
    kBlockFooter,
    kBlockHeader,
    kBlockTitle,
  } from 'konsta/vue';

  export default {
    name: 'ContentBlockPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlock,
      kBlockFooter,
      kBlockHeader,
      kBlockTitle,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
