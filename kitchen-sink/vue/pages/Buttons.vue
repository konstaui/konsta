<template>
  <k-page>
    <k-navbar title="Buttons">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Default Buttons</k-block-title>
    <k-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <k-button>Button</k-button>
        <k-button
          :colors="{
            text: 'text-red-500',
            border: 'border-red-500',
            bg: 'bg-red-500',
            activeBg: 'active:bg-red-500',
            activeBgDark: 'active:bg-red-600',
          }"
        >
          Button
        </k-button>
        <k-button>Button</k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button outline>Outline</k-button>
        <k-button
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
        </k-button>
        <k-button outline>Outline</k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button clear>Clear</k-button>
        <k-button
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
        </k-button>
        <k-button clear>Clear</k-button>
      </div>
    </k-block>

    <k-block-title>Rounded Buttons</k-block-title>
    <k-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <k-button rounded>Button</k-button>
        <k-button rounded>Button</k-button>
        <k-button rounded>Button</k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button rounded outline> Outline </k-button>
        <k-button rounded outline> Outline </k-button>
        <k-button rounded outline> Outline </k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button rounded clear> Clear </k-button>
        <k-button rounded clear> Clear </k-button>
        <k-button rounded clear> Clear </k-button>
      </div>
    </k-block>

    <k-block-title>Large Buttons</k-block-title>
    <k-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <k-button large>Button</k-button>
        <k-button large>Button</k-button>
        <k-button large rounded> Button </k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button large outline> Outline </k-button>
        <k-button large outline> Outline </k-button>
        <k-button large rounded outline> Outline </k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button large clear> Clear </k-button>
        <k-button large clear> Clear </k-button>
        <k-button large rounded clear> Clear </k-button>
      </div>
    </k-block>

    <k-block-title>Small Buttons</k-block-title>
    <k-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <k-button small>Button</k-button>
        <k-button small>Button</k-button>
        <k-button small rounded> Button </k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button small outline> Outline </k-button>
        <k-button small outline> Outline </k-button>
        <k-button small rounded outline> Outline </k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button small clear> Clear </k-button>
        <k-button small clear> Clear </k-button>
        <k-button small rounded clear> Clear </k-button>
      </div>
    </k-block>

    <k-block-title>Raised Buttons</k-block-title>
    <k-block strong class="space-y-2">
      <div class="grid grid-cols-3 gap-x-4">
        <k-button raised>Button</k-button>
        <k-button raised>Button</k-button>
        <k-button raised rounded> Button </k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button raised outline> Outline </k-button>
        <k-button raised outline> Outline </k-button>
        <k-button raised rounded outline> Outline </k-button>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <k-button raised clear> Clear </k-button>
        <k-button raised clear> Clear </k-button>
        <k-button raised rounded clear> Clear </k-button>
      </div>
    </k-block>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kButton,
    kBlock,
    kBlockTitle,
  } from 'konsta/vue';

  export default {
    name: 'ButtonsPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kButton,
      kBlock,
      kBlockTitle,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
