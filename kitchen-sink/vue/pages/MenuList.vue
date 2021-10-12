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
    <twm-menu-list>
      <twm-menu-list-item
        title="Home"
        :active="selected === 'home'"
        @click="() => (selected = 'home')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-menu-list-item>
      <twm-menu-list-item
        title="Profile"
        :active="selected === 'profile'"
        @click="() => (selected = 'profile')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-menu-list-item>
      <twm-menu-list-item
        title="Settings"
        :active="selected === 'settings'"
        @click="() => (selected = 'settings')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-menu-list-item>
    </twm-menu-list>

    <twm-menu-list>
      <twm-menu-list-item
        title="Home"
        subtitle="Home subtitle"
        :active="selectedMedia === 'home'"
        @click="() => (selectedMedia = 'home')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-menu-list-item>
      <twm-menu-list-item
        title="Profile"
        subtitle="Profile subtitle"
        :active="selectedMedia === 'profile'"
        @click="() => (selectedMedia = 'profile')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-menu-list-item>
      <twm-menu-list-item
        title="Settings"
        subtitle="Settings subtitle"
        :active="selectedMedia === 'settings'"
        @click="() => (selectedMedia = 'settings')"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-menu-list-item>
    </twm-menu-list>
  </twm-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBlock,
    twmMenuList,
    twmMenuListItem,
  } from 'tailwind-mobile/vue';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'MenuListPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlock,
      twmMenuList,
      twmMenuListItem,
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
