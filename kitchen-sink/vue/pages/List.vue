<template>
  <k-page>
    <k-navbar title="List">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Simple List</k-block-title>
    <k-list>
      <k-list-item title="Item 1" />
      <k-list-item title="Item 2" />
      <k-list-item title="Item 3" />
    </k-list>

    <k-block-title>Simple Links List</k-block-title>
    <k-list>
      <k-list-item title="Link 1" link />
      <k-list-item title="Link 2" link />
      <k-list-item title="Link 3" link />
    </k-list>

    <k-block-title>Data list, with icons</k-block-title>
    <k-list>
      <k-list-item title="Ivan Petrov" after="CEO">
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
      <k-list-item title="John Doe">
        <template #media>
          <demo-icon />
        </template>
        <template #after>
          <k-badge>5</k-badge>
        </template>
      </k-list-item>
      <k-list-item title="Jenna Smith">
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
    </k-list>
    <k-block-title>Links</k-block-title>
    <k-list>
      <k-list-item link title="Ivan Petrov" after="CEO">
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
      <k-list-item link title="John Doe" after="Cleaner">
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
      <k-list-item link title="Jenna Smith">
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
    </k-list>
    <k-block-title>Links, Header, Footer</k-block-title>
    <k-list>
      <k-list-item link header="Name" title="John Doe" after="Edit">
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
      <k-list-item link header="Phone" title="+7 90 111-22-3344" after="Edit">
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
      <k-list-item
        link
        header="Email"
        title="john@doe"
        footer="Home"
        after="Edit"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
      <k-list-item
        link
        header="Email"
        title="john@konsta"
        footer="Work"
        after="Edit"
      >
        <template #media>
          <demo-icon />
        </template>
      </k-list-item>
    </k-list>

    <k-block-title>Links, no icons</k-block-title>
    <k-list>
      <k-list-item link title="Ivan Petrov" />
      <k-list-item link title="John Doe" />
      <k-list-item divider title="Divider Here" />
      <k-list-item link title="Ivan Petrov" />
      <k-list-item link title="Jenna Smith" />
    </k-list>

    <k-block-title>Grouped with sticky titles</k-block-title>
    <k-list>
      <k-list-group>
        <k-list-item
          title="A"
          group-title
          class="ios:top-11-safe material:top-14-safe"
        />
        <k-list-item title="Aaron " />
        <k-list-item title="Abbie" />
        <k-list-item title="Adam" />
      </k-list-group>
      <k-list-group>
        <k-list-item
          title="B"
          group-title
          class="ios:top-11-safe material:top-14-safe"
        />
        <k-list-item title="Bailey" />
        <k-list-item title="Barclay" />
        <k-list-item title="Bartolo" />
      </k-list-group>
      <k-list-group>
        <k-list-item
          title="C"
          group-title
          class="ios:top-11-safe material:top-14-safe"
        />
        <k-list-item title="Caiden" />
        <k-list-item title="Calvin" />
        <k-list-item title="Candy" />
      </k-list-group>
    </k-list>

    <k-block-title>Inset List</k-block-title>
    <k-list inset>
      <k-list-item title="Item 1" />
      <k-list-item title="Item 2" />
      <k-list-item title="Item 3" />
    </k-list>

    <k-block-title class="text-2xl">Media Lists</k-block-title>
    <k-block>
      <p>
        Media Lists are almost the same as Data Lists, but with a more flexible
        layout for visualization of more complex data, like products, services,
        user, etc.
      </p>
    </k-block>

    <k-block-title>Songs</k-block-title>
    <k-list>
      <k-list-item
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
      </k-list-item>
      <k-list-item
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
      </k-list-item>
      <k-list-item
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
      </k-list-item>
    </k-list>
    <k-block-title>Mail App</k-block-title>
    <k-list>
      <k-list-item
        link
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <k-list-item
        link
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <k-list-item
        link
        title="Facebook"
        after="16:48"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
      <k-list-item
        link
        title="John Doe (via Twitter)"
        after="15:32"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      />
    </k-list>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBadge,
    kBlock,
    kBlockTitle,
    kList,
    kListGroup,
    kListItem,
  } from 'konsta/vue';
  import DemoIcon from '../components/DemoIcon.vue';

  export default {
    name: 'ListPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBadge,
      kBlock,
      kBlockTitle,
      kList,
      kListGroup,
      kListItem,
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
