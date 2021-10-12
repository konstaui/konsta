<template>
  <twm-page>
    <twm-navbar title="Stepper">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Shape and size</twm-block-title>
    <twm-block strong class="text-center space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="block text-xs mb-1">Default</div>
          <twm-stepper :value="value" @plus="increase" @minus="decrease" />
        </div>
        <div>
          <div class="block text-xs mb-1">Round</div>
          <twm-stepper
            :value="value"
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Outline</div>
          <twm-stepper
            :value="value"
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Rounded Outline</div>
          <twm-stepper
            :value="value"
            outline
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Small</div>
          <twm-stepper
            :value="value"
            small
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Small Round</div>
          <twm-stepper
            :value="value"
            small
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Small Outline</div>
          <twm-stepper
            :value="value"
            small
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Small Outline</div>
          <twm-stepper
            :value="value"
            small
            rounded
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Large</div>
          <twm-stepper
            :value="value"
            large
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Large Round</div>
          <twm-stepper
            :value="value"
            large
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Large Outline</div>
          <twm-stepper
            :value="value"
            large
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Large Rounded Outline</div>
          <twm-stepper
            :value="value"
            large
            rounded
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>
    </twm-block>

    <twm-block-title>Raised</twm-block-title>
    <twm-block strong class="text-center space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="block text-xs mb-1">Default</div>
          <twm-stepper
            :value="value"
            raised
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Round</div>
          <twm-stepper
            :value="value"
            raised
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Outline</div>
          <twm-stepper
            :value="value"
            raised
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Round Outline</div>
          <twm-stepper
            :value="value"
            raised
            outline
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Small</div>
          <twm-stepper
            :value="value"
            raised
            small
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Small Round</div>
          <twm-stepper
            :value="value"
            raised
            small
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Small Outline</div>
          <twm-stepper
            :value="value"
            raised
            small
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Small Rounded Outline</div>
          <twm-stepper
            :value="value"
            raised
            small
            rounded
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Large</div>
          <twm-stepper
            :value="value"
            raised
            large
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Large Round</div>
          <twm-stepper
            :value="value"
            raised
            large
            rounded
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 margin-top">
        <div>
          <div class="block text-xs mb-1">Large Outline</div>
          <twm-stepper
            :value="value"
            raised
            large
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Large Rounded Outline</div>
          <twm-stepper
            :value="value"
            raised
            large
            rounded
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>
    </twm-block>
    <twm-block-title>With Text Input</twm-block-title>
    <twm-block strong class="text-center space-y-4">
      <div>
        <twm-stepper
          :value="inputValue"
          input
          @input="onInputInput"
          @blur="onInputBlur"
          @plus="increaseInput"
          @minus="decreaseInput"
        />
      </div>
      <div>
        <twm-stepper
          :value="inputValue"
          outline
          input
          @input="onInputInput"
          @blur="onInputBlur"
          @plus="increaseInput"
          @minus="decreaseInput"
        />
      </div>
    </twm-block>
    <twm-block-title>Only Buttons</twm-block-title>
    <twm-list>
      <twm-list-item :title="`Value is ${value}`">
        <template #after>
          <twm-stepper
            :value="value"
            buttons-only
            @plus="increase"
            @minus="decrease"
          />
        </template>
      </twm-list-item>
      <twm-list-item :title="`Value is ${value}`">
        <template #after>
          <twm-stepper
            :value="value"
            outline
            buttons-only
            @plus="increase"
            @minus="decrease"
          />
        </template>
      </twm-list-item>
      <twm-list-item :title="`Value is ${value}`">
        <template #after>
          <twm-stepper
            :value="value"
            raised
            outline
            buttons-only
            @plus="increase"
            @minus="decrease"
          />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>Colors</twm-block-title>
    <twm-block strong class="text-center space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <twm-stepper
            :value="value"
            :colors="{
              text: 'text-red-500',
              border: 'border-red-500',
              bg: 'bg-red-500',
              activeBg: 'active:bg-red-500',
              activeBgDark: 'active:bg-red-600',
            }"
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <twm-stepper
            :value="value"
            rounded
            :colors="{
              text: 'text-green-500',
              border: 'border-green-500',
              bg: 'bg-green-500',
              activeBg: 'active:bg-green-500',
              activeBgDark: 'active:bg-green-600',
            }"
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <twm-stepper
            :value="value"
            :colors="{
              text: 'text-yellow-500',
              border: 'border-yellow-500',
              bg: 'bg-yellow-500',
              activeBg: 'active:bg-yellow-500',
              activeBgDark: 'active:bg-yellow-600',
            }"
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <twm-stepper
            :value="value"
            rounded
            :colors="{
              text: 'text-pink-500',
              border: 'border-pink-500',
              bg: 'bg-pink-500',
              activeBg: 'active:bg-pink-500',
              activeBgDark: 'active:bg-pink-600',
            }"
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>
    </twm-block>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmStepper,
    twmBlock,
    twmBlockTitle,
    twmList,
    twmListItem,
  } from 'tailwind-mobile/vue';
  import { ref } from '@vue/reactivity';

  export default {
    name: 'StepperPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmStepper,
      twmBlock,
      twmBlockTitle,
      twmList,
      twmListItem,
    },
    setup() {
      const value = ref(1);
      const increase = () => {
        value.value += 1;
      };
      const decrease = () => {
        value.value = value.value - 1 < 0 ? 0 : value.value - 1;
      };
      const inputValue = ref(1);
      const increaseInput = () => {
        const v = parseInt(inputValue.value, 10);
        if (isNaN(v)) inputValue.value = 0;
        else inputValue.value = v + 1;
      };
      const decreaseInput = () => {
        const v = parseInt(inputValue, 10);
        if (isNaN(v)) inputValue.value = 0;
        inputValue.value = v - 1 < 0 ? 0 : v - 1;
      };
      const onInputInput = (e) => {
        inputValue.value = parseInt(e.target.value, 10);
      };
      const onInputBlur = () => {
        if (isNaN(parseInt(inputValue.value, 10))) inputValue.value = 0;
      };

      return {
        value,
        increase,
        decrease,
        inputValue,
        increaseInput,
        decreaseInput,
        onInputInput,
        onInputBlur,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
