<template>
  <twm-page>
    <twm-navbar title="List">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Simple List</twm-block-title>
    <twm-list>
      <twm-list-item title="Item 1" />
      <twm-list-item title="Item 2" />
      <twm-list-item title="Item 3" />
    </twm-list>

    <twm-block-title>Simple Links List</twm-block-title>
    <twm-list>
      <twm-list-item title="Link 1" link />
      <twm-list-item title="Link 2" link />
      <twm-list-item title="Link 3" link />
    </twm-list>

    <twm-block-title>Data list, with icons</twm-block-title>
    <twm-list>
      <twm-list-item title="Ivan Petrov" after="CEO">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item title="John Doe">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <twm-badge>5</twm-badge>
        </template>
      </twm-list-item>
      <twm-list-item title="Jenna Smith">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
    </twm-list>
    <twm-block-title>Links</twm-block-title>
    <twm-list>
      <twm-list-item link title="Ivan Petrov" after="CEO">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item link title="John Doe" after="Cleaner">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item link title="Jenna Smith">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
    </twm-list>
    <twm-block-title>Links, Header, Footer</twm-block-title>
    <twm-list>
      <twm-list-item link header="Name" title="John Doe" after="Edit">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item link header="Phone" title="+7 90 111-22-3344" after="Edit">
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item
        link
        header="Email"
        title="john@doe"
        footer="Home"
        after="Edit"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
      <twm-list-item
        link
        header="Email"
        title="john@tailwind-mobile"
        footer="Work"
        after="Edit"
      >
        <template #media>
          <demo-icon />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>Links, no icons</twm-block-title>
    <twm-list>
      <twm-list-item link title="Ivan Petrov" />
      <twm-list-item link title="John Doe" />
      <twm-list-item divider title="Divider Here" />
      <twm-list-item link title="Ivan Petrov" />
      <twm-list-item link title="Jenna Smith" />
    </twm-list>

    <twm-block-title>Grouped with sticky titles</twm-block-title>
    <twm-list>
      <twm-list-group>
        <twm-list-item
          title="A"
          group-title
          class="ios:top-11-safe material:top-14-safe"
        />
        <twm-list-item title="Aaron " />
        <twm-list-item title="Abbie" />
        <twm-list-item title="Adam" />
      </twm-list-group>
      <twm-list-group>
        <twm-list-item
          title="B"
          group-title
          class="ios:top-11-safe material:top-14-safe"
        />
        <twm-list-item title="Bailey" />
        <twm-list-item title="Barclay" />
        <twm-list-item title="Bartolo" />
      </twm-list-group>
      <twm-list-group>
        <twm-list-item
          title="C"
          group-title
          class="ios:top-11-safe material:top-14-safe"
        />
        <twm-list-item title="Caiden" />
        <twm-list-item title="Calvin" />
        <twm-list-item title="Candy" />
      </twm-list-group>
    </twm-list>

    <twm-block-title>Inset List</twm-block-title>
    <twm-list inset>
      <twm-list-item title="Item 1" />
      <twm-list-item title="Item 2" />
      <twm-list-item title="Item 3" />
    </twm-list>

    <twm-block-title class="text-2xl">Media Lists</twm-block-title>
    <twm-block>
      <p>
        Media Lists are almost the same as Data Lists, but with a more flexible
        layout for visualization of more complex data, like products, services,
        user, etc.
      </p>
    </twm-block>

    <twm-block-title>Songs</twm-block-title>
    <twm-list>
      <twm-list-item
        link
        title="Yellow Submarine"
        after="$15"
        subtitle="Beatles"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
            width="80"
            alt="demo"
          />
        </template>
      </twm-list-item>
      <twm-list-item
        link
        title="Don't Stop Me Now"
        after="$22"
        subtitle="Queen"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
            width="80"
            alt="demo"
          />
        </template>
      </twm-list-item>
      <twm-list-item
        link
        title="Billie Jean"
        after="$16"
        subtitle="Michael Jackson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img
            src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
            width="80"
            alt="demo"
          />
        </template>
      </twm-list-item>
    </twm-list>
    <twm-block-title>Mail App</twm-block-title>
    <twm-list>
      <twm-list-item
        link
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <twm-list-item
        link
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <twm-list-item
        link
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <twm-list-item
        link
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
    </twm-list>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmBadge,
    twmBlock,
    twmBlockTitle,
    twmList,
    twmListGroup,
    twmListItem,
  } from 'tailwind-mobile/vue';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'ListPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmBadge,
      twmBlock,
      twmBlockTitle,
      twmList,
      twmListGroup,
      twmListItem,
      DemoIcon,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
