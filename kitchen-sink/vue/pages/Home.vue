<template>
  <k-page>
    <k-navbar title="Konsta UI" />

    <k-block-title>Theme</k-block-title>
    <k-list>
      <k-list-item label title="iOS Theme">
        <template #media>
          <k-radio
            component="div"
            :checked="theme === 'ios'"
            @change="() => setTheme('ios')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Material Theme">
        <template #media>
          <k-radio
            component="div"
            :checked="theme === 'material'"
            @change="() => setTheme('material')"
          />
        </template>
      </k-list-item>
    </k-list>

    <k-list>
      <k-list-item title="Dark Mode">
        <template #after>
          <k-toggle :checked="darkMode" @change="() => toggleDarkMode()" />
        </template>
      </k-list-item>
    </k-list>

    <k-block-title>Components</k-block-title>
    <k-list>
      <k-list-item
        v-for="route in routes"
        :key="route.path"
        :title="route.title"
        link
        :link-props="{ to: route.path }"
        link-component="router-link"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
    </k-list>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kBlockTitle,
    kList,
    kListItem,
    kRadio,
    kToggle,
  } from 'konsta/vue';
  import { inject, onMounted, ref, computed } from 'vue';

  // eslint-disable-next-line
  import routes from '../routes.js';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'HomePage',
    components: {
      kPage,
      kNavbar,
      kBlockTitle,
      kList,
      kListItem,
      kRadio,
      kToggle,
      DemoIcon,
    },

    setup() {
      const darkMode = ref(false);
      const AppContext = inject('AppContext');
      const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        document.documentElement.classList.toggle('dark');
      };
      onMounted(() => {
        darkMode.value = document.documentElement.classList.contains('dark');
      });
      const theme = computed(() => {
        return AppContext.value.theme;
      });
      const setTheme = (t) => {
        AppContext.value.setTheme(t);
      };

      return {
        darkMode,
        toggleDarkMode,
        theme,
        setTheme,
        routes: routes.filter((r) => r.path !== '/'),
      };
    },
  };
</script>
