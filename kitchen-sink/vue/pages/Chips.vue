<template>
  <k-page>
    <k-navbar title="Chips">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Chips With Text</k-block-title>
    <k-block strong-ios outline-ios>
      <k-chip class="m-0.5">Example Chip</k-chip>
      <k-chip class="m-0.5">Another Chip</k-chip>
      <k-chip class="m-0.5">One More Chip</k-chip>
      <k-chip class="m-0.5">Fourth Chip</k-chip>
      <k-chip class="m-0.5">Last One</k-chip>
    </k-block>

    <k-block-title>Outline Chips</k-block-title>
    <k-block strong-ios outline-ios>
      <k-chip outline class="m-0.5"> Example Chip </k-chip>
      <k-chip outline class="m-0.5"> Another Chip </k-chip>
      <k-chip outline class="m-0.5"> One More Chip </k-chip>
      <k-chip outline class="m-0.5"> Fourth Chip </k-chip>
      <k-chip outline class="m-0.5"> Last One </k-chip>
    </k-block>

    <k-block-title>Contact Chips</k-block-title>
    <k-block strong-ios outline-ios>
      <k-chip class="m-0.5">
        <template #media>
          <img
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"
          />
        </template>
        Jane Doe
      </k-chip>
      <k-chip class="m-0.5">
        <template #media>
          <img
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-3.jpg"
          />
        </template>
        John Doe
      </k-chip>
      <k-chip class="m-0.5">
        <template #media>
          <img
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
        </template>
        Adam Smith
      </k-chip>
    </k-block>

    <k-block-title>Deletable Chips / Tags</k-block-title>
    <k-block strong-ios outline-ios>
      <k-chip class="m-0.5" delete-button @delete="onDelete">
        Example Chip
      </k-chip>
      <k-chip class="m-0.5" delete-button @delete="onDelete">
        <template #media>
          <img
            alt="avatar"
            class="ios:h-7 material:h-6 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
        </template>
        Adam Smith
      </k-chip>
    </k-block>
    <k-block-title class="bg-b bg-b">Color Chips</k-block-title>
    <k-block strong-ios outline-ios>
      <k-chip
        class="m-0.5"
        :colors="{ fillBg: 'bg-red-500', fillText: 'text-white' }"
      >
        Red Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        :colors="{ fillBg: 'bg-green-500', fillText: 'text-white' }"
      >
        Green Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        :colors="{ fillBg: 'bg-blue-500', fillText: 'text-white' }"
      >
        Blue Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        :colors="{ fillBg: 'bg-yellow-500', fillText: 'text-white' }"
      >
        Yellow Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        :colors="{ fillBg: 'bg-pink-500', fillText: 'text-white' }"
      >
        Pink Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        outline
        :colors="{
          outlineBorder: 'border-red-500',
          outlineText: 'text-red-500',
        }"
      >
        Red Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        outline
        :colors="{
          outlineBorder: 'border-green-500',
          outlineText: 'text-green-500',
        }"
      >
        Green Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        outline
        :colors="{
          outlineBorder: 'border-blue-500',
          outlineText: 'text-blue-500',
        }"
      >
        Blue Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        outline
        :colors="{
          outlineBorder: 'border-yellow-500',
          outlineText: 'text-yellow-500',
        }"
      >
        Yellow Chip
      </k-chip>
      <k-chip
        class="m-0.5"
        outline
        :colors="{
          outlineBorder: 'border-pink-500',
          outlineText: 'text-pink-500',
        }"
      >
        Pink Chip
      </k-chip>
    </k-block>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kChip,
    kBlock,
    kBlockTitle,
  } from 'konsta/vue';

  export default {
    name: 'ChipsPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kChip,
      kBlock,
      kBlockTitle,
    },
    setup() {
      const onDelete = () => {
        console.log('Delete Chip');
      };
      return {
        onDelete,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
