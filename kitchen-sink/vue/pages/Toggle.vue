<template>
  <twm-page>
    <twm-navbar title="Toggle">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-list>
      <twm-list-item title="Item 1">
        <template #after>
          <twm-toggle
            class="-my-1"
            :checked="checked1"
            @change="() => (checked1 = !checked1)"
          />
        </template>
      </twm-list-item>
      <twm-list-item title="Item 2">
        <template #after>
          <twm-toggle
            class="-my-1"
            :colors="{ bg: 'bg-red-500' }"
            :checked="checked2"
            @change="() => (checked2 = !checked2)"
          />
        </template>
      </twm-list-item>
      <twm-list-item title="Item 3">
        <template #after>
          <twm-toggle
            class="-my-1"
            :colors="{ bg: 'bg-green-500' }"
            :checked="checked3"
            @change="() => (checked3 = !checked3)"
          />
        </template>
      </twm-list-item>
      <twm-list-item title="Item 4">
        <template #after>
          <twm-toggle
            class="-my-1"
            :colors="{ bg: 'bg-yellow-500' }"
            :checked="checked4"
            @change="() => (checked4 = !checked4)"
          />
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
    twmList,
    twmListItem,
    twmToggle,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'TogglePage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmList,
      twmListItem,
      twmToggle,
    },
    setup() {
      const checked1 = ref(true);
      const checked2 = ref(true);
      const checked3 = ref(true);
      const checked4 = ref(true);
      return {
        checked1,
        checked2,
        checked3,
        checked4,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
