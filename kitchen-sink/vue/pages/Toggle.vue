<template>
  <k-page>
    <k-navbar title="Toggle">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-list>
      <k-list-item label title="Item 1">
        <template #after>
          <k-toggle
            component="div"
            class="-my-1"
            :checked="checked1"
            @change="() => (checked1 = !checked1)"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Item 2">
        <template #after>
          <k-toggle
            component="div"
            class="-my-1"
            :colors="{
              bg: 'bg-red-500',
              darkBg: 'dark:bg-red-500',
            }"
            :checked="checked2"
            @change="() => (checked2 = !checked2)"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Item 3">
        <template #after>
          <k-toggle
            component="div"
            class="-my-1"
            :colors="{
              bg: 'bg-green-500',
              darkBg: 'dark:bg-green-500',
            }"
            :checked="checked3"
            @change="() => (checked3 = !checked3)"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Item 4">
        <template #after>
          <k-toggle
            component="div"
            class="-my-1"
            :colors="{
              bg: 'bg-yellow-500',
              darkBg: 'dark:bg-yellow-500',
            }"
            :checked="checked4"
            @change="() => (checked4 = !checked4)"
          />
        </template>
      </k-list-item>
    </k-list>
  </k-page>
</template>
<script>
  import { ref } from 'vue';
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kList,
    kListItem,
    kToggle,
  } from 'konsta/vue';

  export default {
    name: 'TogglePage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kList,
      kListItem,
      kToggle,
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
