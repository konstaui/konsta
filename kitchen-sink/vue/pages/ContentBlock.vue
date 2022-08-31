<template>
  <k-page>
    <k-navbar title="Content Block">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Block Title</k-block-title>
    <k-block>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-title>Strong Block</k-block-title>
    <k-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-title>Strong Outline Block</k-block-title>
    <k-block strong outline>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>

    <k-block-title>Strong Inset Block</k-block-title>
    <k-block strong inset>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>

    <k-block-title>Strong Inset Outline Block</k-block-title>
    <k-block strong inset outline>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-title>With Header & Footer</k-block-title>
    <k-block-header>Header</k-block-header>
    <k-block strong outline>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-footer>Footer</k-block-footer>
    <k-block-title medium>Medium Title</k-block-title>
    <k-block strong outline>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </k-block>
    <k-block-title large>Large Title</k-block-title>
    <k-block strong outline>
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
