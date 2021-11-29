<template>
  <k-page>
    <k-navbar title="List Button">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-list>
      <k-list-button>Button 1</k-list-button>
      <k-list-button>Button 2</k-list-button>
      <k-list-button>Button 3</k-list-button>
    </k-list>

    <k-list inset>
      <k-list-button>Button 1</k-list-button>
      <k-list-button>Button 2</k-list-button>
      <k-list-button>Button 3</k-list-button>
    </k-list>
    <k-list inset>
      <k-list-button
        :colors="{
          text: 'text-red-500',
          activeBg: 'active:bg-red-500',
          touchRipple: 'touch-ripple-red-500',
        }"
      >
        Red Button
      </k-list-button>
    </k-list>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kList,
    kListButton,
  } from 'konsta/vue';

  export default {
    name: 'ListButtonPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kList,
      kListButton,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
