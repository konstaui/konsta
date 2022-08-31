<template>
  <k-page>
    <k-navbar title="Stepper">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Shape and size</k-block-title>
    <k-block strong-ios outline-ios class="text-center space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="block text-xs mb-1">Default</div>
          <k-stepper :value="value" @plus="increase" @minus="decrease" />
        </div>
        <div>
          <div class="block text-xs mb-1">Round</div>
          <k-stepper
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
          <k-stepper
            :value="value"
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Rounded Outline</div>
          <k-stepper
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
          <k-stepper :value="value" small @plus="increase" @minus="decrease" />
        </div>
        <div>
          <div class="block text-xs mb-1">Small Round</div>
          <k-stepper
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
          <k-stepper
            :value="value"
            small
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Small Outline</div>
          <k-stepper
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
          <k-stepper :value="value" large @plus="increase" @minus="decrease" />
        </div>
        <div>
          <div class="block text-xs mb-1">Large Round</div>
          <k-stepper
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
          <k-stepper
            :value="value"
            large
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Large Rounded Outline</div>
          <k-stepper
            :value="value"
            large
            rounded
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>
    </k-block>

    <k-block-title>Raised</k-block-title>
    <k-block strong-ios outline-ios class="text-center space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="block text-xs mb-1">Default</div>
          <k-stepper :value="value" raised @plus="increase" @minus="decrease" />
        </div>
        <div>
          <div class="block text-xs mb-1">Round</div>
          <k-stepper
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
          <k-stepper
            :value="value"
            raised
            outline
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Round Outline</div>
          <k-stepper
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
          <k-stepper
            :value="value"
            raised
            small
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Small Round</div>
          <k-stepper
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
          <k-stepper
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
          <k-stepper
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
          <k-stepper
            :value="value"
            raised
            large
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <div class="block text-xs mb-1">Large Round</div>
          <k-stepper
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
          <k-stepper
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
          <k-stepper
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
    </k-block>
    <k-block-title>With Text Input</k-block-title>
    <k-block strong-ios outline-ios class="text-center space-y-4">
      <div>
        <k-stepper
          :value="inputValue"
          input
          @input="onInputInput"
          @blur="onInputBlur"
          @plus="increaseInput"
          @minus="decreaseInput"
        />
      </div>
      <div>
        <k-stepper
          :value="inputValue"
          outline
          input
          @input="onInputInput"
          @blur="onInputBlur"
          @plus="increaseInput"
          @minus="decreaseInput"
        />
      </div>
    </k-block>
    <k-block-title>Only Buttons</k-block-title>
    <k-list strong-ios outline-ios>
      <k-list-item :title="`Value is ${value}`">
        <template #after>
          <k-stepper
            :value="value"
            buttons-only
            @plus="increase"
            @minus="decrease"
          />
        </template>
      </k-list-item>
      <k-list-item :title="`Value is ${value}`">
        <template #after>
          <k-stepper
            :value="value"
            outline
            buttons-only
            @plus="increase"
            @minus="decrease"
          />
        </template>
      </k-list-item>
      <k-list-item :title="`Value is ${value}`">
        <template #after>
          <k-stepper
            :value="value"
            raised
            outline
            buttons-only
            @plus="increase"
            @minus="decrease"
          />
        </template>
      </k-list-item>
    </k-list>

    <k-block-title>Colors</k-block-title>
    <k-block strong-ios outline-ios class="text-center space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <k-stepper
            :value="value"
            class="k-color-brand-red"
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <k-stepper
            :value="value"
            rounded
            class="k-color-brand-green"
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <k-stepper
            :value="value"
            class="k-color-brand-yellow"
            @plus="increase"
            @minus="decrease"
          />
        </div>
        <div>
          <k-stepper
            :value="value"
            rounded
            class="k-color-brand-purple"
            @plus="increase"
            @minus="decrease"
          />
        </div>
      </div>
    </k-block>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kStepper,
    kBlock,
    kBlockTitle,
    kList,
    kListItem,
  } from 'konsta/vue';
  import { ref } from '@vue/reactivity';

  export default {
    name: 'StepperPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kStepper,
      kBlock,
      kBlockTitle,
      kList,
      kListItem,
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
