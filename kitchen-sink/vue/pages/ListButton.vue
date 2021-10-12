<template>
  <twm-page>
    <twm-navbar title="List Button">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-list>
      <twm-list-button>Button 1</twm-list-button>
      <twm-list-button>Button 2</twm-list-button>
      <twm-list-button>Button 3</twm-list-button>
    </twm-list>

    <twm-list inset>
      <twm-list-button>Button 1</twm-list-button>
      <twm-list-button>Button 2</twm-list-button>
      <twm-list-button>Button 3</twm-list-button>
    </twm-list>
    <twm-list inset>
      <twm-list-button
        :colors="{
          text: 'text-red-500',
          activeBg: 'active:bg-red-500',
          touchRipple: 'touch-ripple-red-500',
        }"
      >
        Red Button
      </twm-list-button>
    </twm-list>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmList,
    twmListButton,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'ListButtonPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmList,
      twmListButton,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
