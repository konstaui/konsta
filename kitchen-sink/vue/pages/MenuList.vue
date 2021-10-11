<template>
  <twm-page>
    <twm-navbar title="Menu List">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block strong>
      <p>
        Menu list unlike usual links list is designed to indicate currently
        active screen (or section) of your app. Think about it like a Tabbar but
        in a form of a list.
      </p>
    </twm-block>
    <twm-list menu-list>
      <twm-list-item
        title="Home"
        menu-list-item
        :menu-list-item-active="selected === 'home'"
        @click="() => (selected = 'home')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item
        title="Profile"
        menu-list-item
        :menu-list-item-active="selected === 'profile'"
        @click="() => (selected = 'profile')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item
        title="Settings"
        menu-list-item
        :menu-list-item-active="selected === 'settings'"
        @click="() => (selected = 'settings')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-list>
      <twm-list-item
        title="Home"
        subtitle="Home subtitle"
        menu-list-item
        :menu-list-item-active="selectedMedia === 'home'"
        @click="() => (selectedMedia = 'home')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item
        title="Profile"
        subtitle="Profile subtitle"
        menu-list-item
        :menu-list-item-active="selectedMedia === 'profile'"
        @click="() => (selectedMedia = 'profile')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item
        title="Settings"
        subtitle="Settings subtitle"
        menu-list-item
        :menu-list-item-active="selectedMedia === 'settings'"
        @click="() => (selectedMedia = 'settings')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
    </twm-list>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBlock,
    twmList,
    twmListItem,
  } from 'tailwind-mobile/vue';
  import DemoIcon from '../components/DemoIcon.vue';
  export default {
    name: 'MenuListPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlock,
      twmList,
      twmListItem,
      DemoIcon,
    },
    setup() {
      const selected = ref('home');
      const selectedMedia = ref('home');
      return {
        selected,
        selectedMedia,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
