<template>
  <twm-page>
    <twm-navbar title="Tailwind Mobile" />

    <twm-block-title>Theme</twm-block-title>
    <twm-list>
      <twm-list-item label title="iOS Theme">
        <template #media>
          <twm-radio
            component="div"
            :checked="theme === 'ios'"
            @change="() => setTheme('ios')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Material Theme">
        <template #media>
          <twm-radio
            component="div"
            :checked="theme === 'material'"
            @change="() => setTheme('material')"
          />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-list>
      <twm-list-item title="Dark Mode">
        <template #after>
          <twm-toggle :checked="darkMode" @change="() => toggleDarkMode()" />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>Components</twm-block-title>
    <twm-list>
      <twm-list-item
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
      </twm-list-item>
    </twm-list>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmBlockTitle,
    twmList,
    twmListItem,
    twmRadio,
    twmToggle,
  } from 'tailwind-mobile/vue';
  import { inject, onMounted, ref, computed } from 'vue';

  // eslint-disable-next-line
  import routes from '../routes.js';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'HomePage',
    components: {
      twmPage,
      twmNavbar,
      twmBlockTitle,
      twmList,
      twmListItem,
      twmRadio,
      twmToggle,
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
