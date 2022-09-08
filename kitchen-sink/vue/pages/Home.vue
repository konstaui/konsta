<template>
  <k-page>
    <k-navbar title="Konsta UI" large transparent center-title />

    <k-block-title>Theme</k-block-title>
    <k-list strong inset>
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
    <k-list strong inset>
      <k-list-item title="Dark Mode" label>
        <template #after>
          <k-toggle
            component="div"
            :checked="darkMode"
            @change="() => toggleDarkMode()"
          />
        </template>
      </k-list-item>

      <k-list-item
        title="Color Theme"
        link
        @click="() => (colorPickerOpened = true)"
      >
        <template #after>
          <div class="w-6 h-6 rounded-full bg-primary home-color-picker" />
        </template>
      </k-list-item>
    </k-list>
    <k-popover
      :opened="colorPickerOpened"
      size="w-36"
      target=".home-color-picker"
      @backdropclick="() => (colorPickerOpened = false)"
    >
      <div class="grid grid-cols-3 py-2">
        <k-link
          touch-ripple
          class="overflow-hidden h-12"
          @click="() => setColorTheme('')"
        >
          <span class="bg-brand-primary w-6 h-6 rounded-full" />
        </k-link>
        <k-link
          touch-ripple
          class="overflow-hidden h-12"
          @click="() => setColorTheme('k-color-brand-red')"
        >
          <span class="bg-brand-red w-6 h-6 rounded-full" />
        </k-link>
        <k-link
          touch-ripple
          class="overflow-hidden h-12"
          @click="() => setColorTheme('k-color-brand-green')"
        >
          <span class="bg-brand-green w-6 h-6 rounded-full" />
        </k-link>
        <k-link
          touch-ripple
          class="overflow-hidden h-12"
          @click="() => setColorTheme('k-color-brand-yellow')"
        >
          <span class="bg-brand-yellow w-6 h-6 rounded-full" />
        </k-link>
        <k-link
          touch-ripple
          class="overflow-hidden h-12"
          @click="() => setColorTheme('k-color-brand-purple')"
        >
          <span class="bg-brand-purple w-6 h-6 rounded-full" />
        </k-link>
      </div>
    </k-popover>

    <k-block-title>Components</k-block-title>
    <k-list strong inset>
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
    kLink,
    kPopover,
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
      kLink,
      kPopover,
      DemoIcon,
    },

    setup() {
      const darkMode = ref(false);
      const colorPickerOpened = ref(false);
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
      const colorTheme = computed(() => {
        return AppContext.value.colorTheme;
      });
      const setColorTheme = (c) => {
        AppContext.value.setColorTheme(c);
      };

      return {
        darkMode,
        colorPickerOpened,
        toggleDarkMode,
        colorTheme,
        setColorTheme,
        theme,
        setTheme,
        routes: routes.filter((r) => r.path !== '/'),
      };
    },
  };
</script>
