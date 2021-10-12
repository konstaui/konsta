<template>
  <twm-page>
    <twm-navbar title="Buttons">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Default Buttons</twm-block-title>
    <twm-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button>Button</twm-button>
        <twm-button
          :colors="{
            text: 'text-red-500',
            border: 'border-red-500',
            bg: 'bg-red-500',
            activeBg: 'active:bg-red-500',
            activeBgDark: 'active:bg-red-600',
          }"
        >
          Button
        </twm-button>
        <twm-button>Button</twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button outline>Outline</twm-button>
        <twm-button
          :colors="{
            text: 'text-red-500',
            border: 'border-red-500',
            bg: 'bg-red-500',
            activeBg: 'active:bg-red-500',
            activeBgDark: 'active:bg-red-600',
            touchRipple: 'touch-ripple-red-500',
          }"
          outline
        >
          Outline
        </twm-button>
        <twm-button outline>Outline</twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button clear>Clear</twm-button>
        <twm-button
          :colors="{
            text: 'text-red-500',
            border: 'border-red-500',
            bg: 'bg-red-500',
            activeBg: 'active:bg-red-500',
            activeBgDark: 'active:bg-red-600',
            touchRipple: 'touch-ripple-red-500',
          }"
          clear
        >
          Clear
        </twm-button>
        <twm-button clear>Clear</twm-button>
      </div>
    </twm-block>

    <twm-block-title>Rounded Buttons</twm-block-title>
    <twm-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button rounded>Button</twm-button>
        <twm-button rounded>Button</twm-button>
        <twm-button rounded>Button</twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button rounded outline> Outline </twm-button>
        <twm-button rounded outline> Outline </twm-button>
        <twm-button rounded outline> Outline </twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button rounded clear> Clear </twm-button>
        <twm-button rounded clear> Clear </twm-button>
        <twm-button rounded clear> Clear </twm-button>
      </div>
    </twm-block>

    <twm-block-title>Large Buttons</twm-block-title>
    <twm-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button large>Button</twm-button>
        <twm-button large>Button</twm-button>
        <twm-button large rounded> Button </twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button large outline> Outline </twm-button>
        <twm-button large outline> Outline </twm-button>
        <twm-button large rounded outline> Outline </twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button large clear> Clear </twm-button>
        <twm-button large clear> Clear </twm-button>
        <twm-button large rounded clear> Clear </twm-button>
      </div>
    </twm-block>

    <twm-block-title>Small Buttons</twm-block-title>
    <twm-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button small>Button</twm-button>
        <twm-button small>Button</twm-button>
        <twm-button small rounded> Button </twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button small outline> Outline </twm-button>
        <twm-button small outline> Outline </twm-button>
        <twm-button small rounded outline> Outline </twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button small clear> Clear </twm-button>
        <twm-button small clear> Clear </twm-button>
        <twm-button small rounded clear> Clear </twm-button>
      </div>
    </twm-block>

    <twm-block-title>Raised Buttons</twm-block-title>
    <twm-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button raised>Button</twm-button>
        <twm-button raised>Button</twm-button>
        <twm-button raised rounded> Button </twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button raised outline> Outline </twm-button>
        <twm-button raised outline> Outline </twm-button>
        <twm-button raised rounded outline> Outline </twm-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <twm-button raised clear> Clear </twm-button>
        <twm-button raised clear> Clear </twm-button>
        <twm-button raised rounded clear> Clear </twm-button>
      </div>
    </twm-block>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmButton,
    twmBlock,
    twmBlockTitle,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'ButtonsPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmButton,
      twmBlock,
      twmBlockTitle,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
