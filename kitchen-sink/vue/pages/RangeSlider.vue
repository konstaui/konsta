<template>
  <k-page>
    <k-navbar title="Range Slider">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Volume: {{ volume }}</k-block-title>
    <k-block-header>From 0 to 100 with step 10</k-block-header>
    <k-list>
      <k-list-item inner-class="flex space-x-4">
        <template #inner>
          <span>0</span>
          <k-range
            :value="volume"
            :step="10"
            @input="(e) => (volume = parseInt(e.target.value, 10))"
          />
          <span>100</span>
        </template>
      </k-list-item>
    </k-list>

    <k-block-title>Price: ${{ price }}</k-block-title>
    <k-block-header>From 0 to 1000 with step 1</k-block-header>
    <k-list>
      <k-list-item inner-class="flex space-x-4">
        <template #inner>
          <span>$0</span>
          <k-range
            :value="price"
            :step="1"
            :min="0"
            :max="1000"
            @input="(e) => (price = parseInt(e.target.value, 10))"
          />
          <span>$1000</span>
        </template>
      </k-list-item>
    </k-list>

    <k-block-title>
      Color: rgb({{ red }}, {{ green }}, {{ blue }})
    </k-block-title>
    <k-list>
      <k-list-item>
        <template #inner>
          <k-range
            :colors="{
              valueBg: 'bg-red-500',
              thumbBgMaterial: 'range-thumb:bg-red-500',
            }"
            :value="red"
            :step="1"
            :min="0"
            :max="255"
            @input="(e) => (red = parseInt(e.target.value, 10))"
          />
        </template>
      </k-list-item>
      <k-list-item>
        <template #inner>
          <k-range
            :colors="{
              valueBg: 'bg-green-500',
              thumbBgMaterial: 'range-thumb:bg-green-500',
            }"
            :value="green"
            :step="1"
            :min="0"
            :max="255"
            @input="(e) => (green = parseInt(e.target.value, 10))"
          />
        </template>
      </k-list-item>
      <k-list-item>
        <template #inner>
          <k-range
            :colors="{
              valueBg: 'bg-blue-500',
              thumbBgMaterial: 'range-thumb:bg-blue-500',
            }"
            :value="blue"
            :step="1"
            :min="0"
            :max="255"
            @input="(e) => (blue = parseInt(e.target.value, 10))"
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
    kBlockTitle,
    kBlockHeader,
    kList,
    kListItem,
    kRange,
  } from 'konsta/vue';

  export default {
    name: 'RangeSliderPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlockTitle,
      kBlockHeader,
      kList,
      kListItem,
      kRange,
    },
    setup() {
      const volume = ref(50);
      const price = ref(150);
      const red = ref(100);
      const green = ref(50);
      const blue = ref(75);

      return {
        volume,
        price,
        red,
        green,
        blue,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
