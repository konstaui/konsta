<template>
  <twm-page>
    <twm-navbar title="Radio">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Inline</twm-block-title>
    <twm-block strong>
      <p>
        Lorem{{ ' ' }}
        <twm-radio
          name="demo-radio-inline"
          value="inline-1"
          :checked="inlineValue === 'inline-1'"
          @change="() => (inlineValue = 'inline-1')"
        />{{ ' ' }} ipsum dolor sit amet, consectetur adipisicing elit. Alias
        beatae illo nihil aut eius commodi sint eveniet aliquid eligendi{{
          ' '
        }}
        <twm-radio
          name="demo-radio-inline"
          value="inline-2"
          :checked="inlineValue === 'inline-2'"
          @change="() => (inlineValue = 'inline-2')"
        />{{ ' ' }} ad delectus impedit tempore nemo, enim vel praesentium
        consequatur nulla mollitia!
      </p>
    </twm-block>

    <twm-block-title>Radio Group</twm-block-title>
    <twm-list>
      <twm-list-item label title="Books">
        <template #media>
          <twm-radio
            component="div"
            value="Books"
            :checked="groupValue === 'Books'"
            @change="() => (groupValue = 'Books')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Movies">
        <template #media>
          <twm-radio
            component="div"
            value="Movies"
            :checked="groupValue === 'Movies'"
            @change="() => (groupValue = 'Movies')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Food">
        <template #media>
          <twm-radio
            component="div"
            value="Food"
            :checked="groupValue === 'Food'"
            @change="() => (groupValue = 'Food')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Drinks">
        <template #media>
          <twm-radio
            component="div"
            value="Drinks"
            :checked="groupValue === 'Drinks'"
            @change="() => (groupValue = 'Drinks')"
          />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-list>
      <twm-list-item label title="Books">
        <template #after>
          <twm-radio
            component="div"
            value="Books"
            :checked="groupValue === 'Books'"
            @change="() => (groupValue = 'Books')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Movies">
        <template #after>
          <twm-radio
            component="div"
            value="Movies"
            :checked="groupValue === 'Movies'"
            @change="() => (groupValue = 'Movies')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Food">
        <template #after>
          <twm-radio
            component="div"
            value="Food"
            :checked="groupValue === 'Food'"
            @change="() => (groupValue = 'Food')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Drinks">
        <template #after>
          <twm-radio
            component="div"
            value="Drinks"
            :checked="groupValue === 'Drinks'"
            @change="() => (groupValue = 'Drinks')"
          />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>With Media Lists</twm-block-title>
    <twm-list>
      <twm-list-item
        label
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <twm-radio
            component="div"
            :checked="mediaValue === 'Item 1'"
            @change="() => (mediaValue = 'Item 1')"
          />
        </template>
      </twm-list-item>
      <twm-list-item
        label
        title="John Doe (via Twitter)"
        after="17:11"
        subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <twm-radio
            component="div"
            :checked="mediaValue === 'Item 2'"
            @change="() => (mediaValue = 'Item 2')"
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
    twmRadio,
    twmBlockTitle,
    twmBlock,
    twmList,
    twmListItem,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'RadioPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmRadio,
      twmBlockTitle,
      twmBlock,
      twmList,
      twmListItem,
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
