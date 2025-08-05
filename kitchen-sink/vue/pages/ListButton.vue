<template>
  <k-page>
    <k-navbar title="List Button">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-list strong outline>
      <k-list-button>Button 1</k-list-button>
      <k-list-button>Button 2</k-list-button>
      <k-list-button>Button 3</k-list-button>
    </k-list>

    <k-list strong inset>
      <k-list-button>Button 1</k-list-button>
      <k-list-button>Button 2</k-list-button>
      <k-list-button>Button 3</k-list-button>
    </k-list>
    <k-list strong inset>
      <k-list-button class="k-color-brand-red"> Red Button </k-list-button>
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
