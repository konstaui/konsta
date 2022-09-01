<template>
  <k-page>
    <k-navbar title="Konsta UI" large transparent center-title />

    <k-block-title>Theming</k-block-title>
    <k-block>
      <div class="grid grid-cols-3 gap-4">
        <k-card margin="" :content-wrap="false" class="overflow-hidden">
          <k-link
            component="label"
            touch-ripple
            class="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
          >
            <LogoIos class="text-[28px]" />
            <k-radio
              component="div"
              :checked="theme === 'ios'"
              @change="() => setTheme('ios')"
            />
          </k-link>
        </k-card>

        <k-card margin="" :content-wrap="false" class="overflow-hidden">
          <k-link
            component="label"
            touch-ripple
            class="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
          >
            <LogoAndroid class="text-[28px]" />
            <k-radio
              component="div"
              :checked="theme === 'material'"
              @change="() => setTheme('material')"
            />
          </k-link>
        </k-card>

        <k-card margin="" :content-wrap="false" class="overflow-hidden">
          <k-link
            component="label"
            touch-ripple
            class="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
          >
            <MoonStarsFill class="text-[28px]" />
            <k-toggle :checked="darkMode" @change="() => toggleDarkMode()" />
          </k-link>
        </k-card>
      </div>
      <k-card margin="mt-4">
        <div class="flex items-center justify-around">
          <div
            :class="`bg-brand-primary w-8 h-8 rounded-full cursor-pointer duration-200 ${
              colorTheme === '' ? '' : 'scale-75'
            }`"
            @click="() => setColorTheme('')"
          />
          <div
            :class="`bg-brand-red w-8 h-8 rounded-full cursor-pointer duration-200 ${
              colorTheme === 'k-color-brand-red' ? '' : 'scale-75'
            }`"
            @click="() => setColorTheme('k-color-brand-red')"
          />
          <div
            :class="`bg-brand-green w-8 h-8 rounded-full cursor-pointer duration-200 ${
              colorTheme === 'k-color-brand-green' ? '' : 'scale-75'
            }`"
            @click="() => setColorTheme('k-color-brand-green')"
          />
          <div
            :class="`bg-brand-yellow w-8 h-8 rounded-full cursor-pointer duration-200 ${
              colorTheme === 'k-color-brand-yellow' ? '' : 'scale-75'
            }`"
            @click="() => setColorTheme('k-color-brand-yellow')"
          />
          <div
            :class="`bg-brand-purple w-8 h-8 rounded-full cursor-pointer duration-200 ${
              colorTheme === 'k-color-brand-purple' ? '' : 'scale-75'
            }`"
            @click="() => setColorTheme('k-color-brand-purple')"
          />
        </div>
      </k-card>
    </k-block>

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
    kBlock,
    kCard,
    kLink,
  } from 'konsta/vue';
  import { LogoAndroid, LogoIos, MoonStarsFill } from 'framework7-icons/vue';

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
      kBlock,
      kCard,
      kLink,
      DemoIcon,
      LogoAndroid,
      LogoIos,
      MoonStarsFill,
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
      const colorTheme = computed(() => {
        return AppContext.value.colorTheme;
      });
      const setColorTheme = (c) => {
        AppContext.value.setColorTheme(c);
      };

      return {
        darkMode,
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
