<template>
  <twm-page>
    <twm-navbar title="Tailwind Mobile" />

    <twm-block-title>Theme</twm-block-title>
    <twm-list>
      <twm-list-item label title="iOS Theme">
        <template #media>
          <twm-radio
            @change="() => setTheme('ios')"
            component="div"
            :checked="theme === 'ios'"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Material Theme">
        <template #media>
          <twm-radio
            @change="() => setTheme('material')"
            component="div"
            :checked="theme === 'material'"
          />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-list>
      <twm-list-item title="Dark Mode">
        <template #after>
          <twm-toggle @change="() => toggleDarkMode()" :checked="darkMode" />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>Components</twm-block-title>
    <twm-list>
      <twm-list-item title="Page">
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
    useTheme,
  } from 'tailwind-mobile/vue';
  import { inject, onMounted, ref } from 'vue';

  // import { Link } from 'react-router-dom';
  // import routes from '../routes.js';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
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
    props: {
      theme: String,
      setTheme: Function,
    },
    setup(props) {
      const darkMode = ref(false);
      const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        document.documentElement.classList.toggle('dark');
      };
      onMounted(() => {
        darkMode.value = document.documentElement.classList.contains('dark');
      });

      return {
        darkMode,
        toggleDarkMode,
      };
    },
  };
</script>
