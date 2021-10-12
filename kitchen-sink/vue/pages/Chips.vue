<template>
  <twm-page>
    <twm-navbar title="Chips">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Chips With Text</twm-block-title>
    <twm-block strong>
      <twm-chip class="m-0.5">Example Chip</twm-chip>
      <twm-chip class="m-0.5">Another Chip</twm-chip>
      <twm-chip class="m-0.5">One More Chip</twm-chip>
      <twm-chip class="m-0.5">Fourth Chip</twm-chip>
      <twm-chip class="m-0.5">Last One</twm-chip>
    </twm-block>

    <twm-block-title>Outline Chips</twm-block-title>
    <twm-block strong>
      <twm-chip outline class="m-0.5"> Example Chip </twm-chip>
      <twm-chip outline class="m-0.5"> Another Chip </twm-chip>
      <twm-chip outline class="m-0.5"> One More Chip </twm-chip>
      <twm-chip outline class="m-0.5"> Fourth Chip </twm-chip>
      <twm-chip outline class="m-0.5"> Last One </twm-chip>
    </twm-block>

    <twm-block-title>Contact Chips</twm-block-title>
    <twm-block strong>
      <twm-chip class="m-0.5">
        <template #media>
          <img
            alt="avatar"
            class="h-7 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"
          />
        </template>
        Jane Doe
      </twm-chip>
      <twm-chip class="m-0.5">
        <template #media>
          <img
            alt="avatar"
            class="h-7 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-3.jpg"
          />
        </template>
        John Doe
      </twm-chip>
      <twm-chip class="m-0.5">
        <template #media>
          <img
            alt="avatar"
            class="h-7 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
        </template>
        Adam Smith
      </twm-chip>
    </twm-block>

    <twm-block-title>Deletable Chips / Tags</twm-block-title>
    <twm-block strong>
      <twm-chip class="m-0.5" delete-button @delete="onDelete">
        Example Chip
      </twm-chip>
      <twm-chip class="m-0.5" delete-button @delete="onDelete">
        <template #media>
          <img
            alt="avatar"
            class="h-7 rounded-full"
            src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"
          />
        </template>
        Adam Smith
      </twm-chip>
    </twm-block>
    <twm-block-title class="bg-b bg-b">Color Chips</twm-block-title>
    <twm-block strong>
      <twm-chip
        class="m-0.5"
        :colors="{ bg: 'bg-red-500', text: 'text-white' }"
      >
        Red Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        :colors="{ bg: 'bg-green-500', text: 'text-white' }"
      >
        Green Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        :colors="{ bg: 'bg-blue-500', text: 'text-white' }"
      >
        Blue Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        :colors="{ bg: 'bg-yellow-500', text: 'text-white' }"
      >
        Yellow Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        :colors="{ bg: 'bg-pink-500', text: 'text-white' }"
      >
        Pink Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        outline
        :colors="{ border: 'border-red-500', text: 'text-red-500' }"
      >
        Red Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        outline
        :colors="{ border: 'border-green-500', text: 'text-green-500' }"
      >
        Green Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        outline
        :colors="{ border: 'border-blue-500', text: 'text-blue-500' }"
      >
        Blue Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        outline
        :colors="{ border: 'border-yellow-500', text: 'text-yellow-500' }"
      >
        Yellow Chip
      </twm-chip>
      <twm-chip
        class="m-0.5"
        outline
        :colors="{ border: 'border-pink-500', text: 'text-pink-500' }"
      >
        Pink Chip
      </twm-chip>
    </twm-block>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmChip,
    twmBlock,
    twmBlockTitle,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'ChipsPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmChip,
      twmBlock,
      twmBlockTitle,
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
