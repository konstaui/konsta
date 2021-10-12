<template>
  <twm-page>
    <twm-navbar title="Range Slider">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Volume: {{ volume }}</twm-block-title>
    <twm-block-header>From 0 to 100 with step 10</twm-block-header>
    <twm-list>
      <twm-list-item inner-class="flex space-x-4">
        <template #inner>
          <span>0</span>
          <twm-range
            :value="volume"
            :step="10"
            @input="(e) => (volume = parseInt(e.target.value, 10))"
          />
          <span>100</span>
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>Price: ${{ price }}</twm-block-title>
    <twm-block-header>From 0 to 1000 with step 1</twm-block-header>
    <twm-list>
      <twm-list-item inner-class="flex space-x-4">
        <template #inner>
          <span>$0</span>
          <twm-range
            :value="price"
            :step="1"
            :min="0"
            :max="1000"
            @input="(e) => (price = parseInt(e.target.value, 10))"
          />
          <span>$1000</span>
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>
      Color: rgb({{ red }}, {{ green }}, {{ blue }})
    </twm-block-title>
    <twm-list>
      <twm-list-item>
        <template #inner>
          <twm-range
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
      </twm-list-item>
      <twm-list-item>
        <template #inner>
          <twm-range
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
      </twm-list-item>
      <twm-list-item>
        <template #inner>
          <twm-range
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
    twmBlockTitle,
    twmBlockHeader,
    twmList,
    twmListItem,
    twmRange,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'RangeSliderPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBlockTitle,
      twmBlockHeader,
      twmList,
      twmListItem,
      twmRange,
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
