<template>
  <twm-page>
    <twm-navbar title="Content Block">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </twm-block>
    <twm-block-title>Block Title</twm-block-title>
    <twm-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </twm-block>
    <twm-block-title>With Header & Footer</twm-block-title>
    <twm-block-header>Header</twm-block-header>
    <twm-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </twm-block>
    <twm-block-footer>Footer</twm-block-footer>
    <twm-block-title class="text-2xl">Medium Title</twm-block-title>
    <twm-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </twm-block>
    <twm-block-title class="text-3xl">Large Title</twm-block-title>
    <twm-block strong>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </twm-block>

    <twm-block-title>Inset Block</twm-block-title>
    <twm-block strong inset>
      <p>
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
        Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
        mollis, vulputate turpis vel, sagittis felis.
      </p>
    </twm-block>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBlock,
    twmBlockFooter,
    twmBlockHeader,
    twmBlockTitle,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'ContentBlockPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlock,
      twmBlockFooter,
      twmBlockHeader,
      twmBlockTitle,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
