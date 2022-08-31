<template>
  <k-page>
    <k-navbar title="Radio">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Inline</k-block-title>
    <k-block strong-ios outline-ios>
      <p>
        Lorem{{ ' ' }}
        <k-radio
          name="demo-radio-inline"
          value="inline-1"
          :checked="inlineValue === 'inline-1'"
          @change="() => (inlineValue = 'inline-1')"
        />{{ ' ' }} ipsum dolor sit amet, consectetur adipisicing elit. Alias
        beatae illo nihil aut eius commodi sint eveniet aliquid eligendi{{
          ' '
        }}
        <k-radio
          name="demo-radio-inline"
          value="inline-2"
          :checked="inlineValue === 'inline-2'"
          @change="() => (inlineValue = 'inline-2')"
        />{{ ' ' }} ad delectus impedit tempore nemo, enim vel praesentium
        consequatur nulla mollitia!
      </p>
    </k-block>

    <k-block-title>Radio Group</k-block-title>
    <k-list strong-ios outline-ios>
      <k-list-item label title="Books">
        <template #media>
          <k-radio
            component="div"
            value="Books"
            :checked="groupValue === 'Books'"
            @change="() => (groupValue = 'Books')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Movies">
        <template #media>
          <k-radio
            component="div"
            value="Movies"
            :checked="groupValue === 'Movies'"
            @change="() => (groupValue = 'Movies')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Food">
        <template #media>
          <k-radio
            component="div"
            value="Food"
            :checked="groupValue === 'Food'"
            @change="() => (groupValue = 'Food')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Drinks">
        <template #media>
          <k-radio
            component="div"
            value="Drinks"
            :checked="groupValue === 'Drinks'"
            @change="() => (groupValue = 'Drinks')"
          />
        </template>
      </k-list-item>
    </k-list>

    <k-list strong-ios outline-ios>
      <k-list-item label title="Books">
        <template #after>
          <k-radio
            component="div"
            value="Books"
            :checked="groupValue === 'Books'"
            @change="() => (groupValue = 'Books')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Movies">
        <template #after>
          <k-radio
            component="div"
            value="Movies"
            :checked="groupValue === 'Movies'"
            @change="() => (groupValue = 'Movies')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Food">
        <template #after>
          <k-radio
            component="div"
            value="Food"
            :checked="groupValue === 'Food'"
            @change="() => (groupValue = 'Food')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Drinks">
        <template #after>
          <k-radio
            component="div"
            value="Drinks"
            :checked="groupValue === 'Drinks'"
            @change="() => (groupValue = 'Drinks')"
          />
        </template>
      </k-list-item>
    </k-list>

    <k-block-title>With Media Lists</k-block-title>
    <k-list strong-ios outline-ios>
      <k-list-item
        label
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <k-radio
            component="div"
            :checked="mediaValue === 'Item 1'"
            @change="() => (mediaValue = 'Item 1')"
          />
        </template>
      </k-list-item>
      <k-list-item
        label
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <k-radio
            component="div"
            :checked="mediaValue === 'Item 2'"
            @change="() => (mediaValue = 'Item 2')"
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
    kRadio,
    kBlockTitle,
    kBlock,
    kList,
    kListItem,
  } from 'konsta/vue';

  export default {
    name: 'RadioPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kRadio,
      kBlockTitle,
      kBlock,
      kList,
      kListItem,
    },
    setup() {
      const inlineValue = ref('inline-1');
      const groupValue = ref('Books');
      const mediaValue = ref('Item 1');

      return {
        inlineValue,
        groupValue,
        mediaValue,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
