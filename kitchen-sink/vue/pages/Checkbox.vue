<template>
  <k-page>
    <k-navbar title="Checkbox">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title>Inline</k-block-title>
    <k-block strong>
      <p>
        Lorem{{ ' ' }}
        <k-checkbox
          name="checkbox-1"
          :checked="checked1"
          @change="(e) => (checked1 = e.target.checked)"
        />{{ ' ' }} ipsum dolor sit amet, consectetur adipisicing elit. Alias
        beatae illo nihil aut eius commodi sint eveniet aliquid eligendi
        {{ ' ' }}
        <k-checkbox
          name="checkbox-2"
          :checked="checked2"
          @change="(e) => (checked2 = e.target.checked)"
        />{{ ' ' }}
        ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla
        mollitia!
      </p>
    </k-block>

    <k-block-title>Checkbox Group</k-block-title>
    <k-list>
      <k-list-item label title="Books">
        <template #media>
          <k-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Books')"
            @change="() => toggleGroupValue('Books')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Movies">
        <template #media>
          <k-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Movies')"
            @change="() => toggleGroupValue('Movies')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Food">
        <template #media>
          <k-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Food')"
            @change="() => toggleGroupValue('Food')"
          />
        </template>
      </k-list-item>
      <k-list-item label title="Drinks">
        <template #media>
          <k-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Drinks')"
            @change="() => toggleGroupValue('Drinks')"
          />
        </template>
      </k-list-item>
    </k-list>

    <k-block-title>Indeterminate State</k-block-title>
    <k-list>
      <k-list-item label title="Movies" name="demo-checkbox">
        <template #media>
          <k-checkbox
            :checked="movies.length === 2"
            :indeterminate="movies.length === 1"
            @change="onMoviesChange"
          />
        </template>
        <ul class="pl-12">
          <k-list-item label title="Movie 1">
            <template #media>
              <k-checkbox
                name="demo-checkbox"
                value="Movie 1"
                :checked="movies.indexOf('Movie 1') >= 0"
                @change="onMovieChange"
              />
            </template>
          </k-list-item>
          <k-list-item label title="Movie 2">
            <template #media>
              <k-checkbox
                name="demo-checkbox"
                value="Movie 2"
                :checked="movies.indexOf('Movie 2') >= 0"
                @change="onMovieChange"
              />
            </template>
          </k-list-item>
        </ul>
      </k-list-item>
    </k-list>

    <k-block-title>With Media Lists</k-block-title>
    <k-list>
      <k-list-item
        label
        title="Facebook"
        after="17:14"
        subtitle="New messages from John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <k-checkbox
            component="div"
            name="demo-media-checkbox"
            :checked="media.includes('Item 1')"
            @change="() => toggleMediaValue('Item 1')"
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
          <k-checkbox
            component="div"
            name="demo-media-checkbox"
            :checked="media.includes('Item 2')"
            @change="() => toggleMediaValue('Item 2')"
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
    kCheckbox,
    kBlockTitle,
    kBlock,
    kList,
    kListItem,
  } from 'konsta/vue';

  export default {
    name: 'CheckboxPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kCheckbox,
      kBlockTitle,
      kBlock,
      kList,
      kListItem,
    },

    setup() {
      const checked1 = ref(false);
      const checked2 = ref(true);

      // Group
      const group = ref(['Books']);
      const toggleGroupValue = (value) => {
        if (group.value.includes(value))
          group.value.splice(group.value.indexOf(value), 1);
        else group.value.push(value);
        group.value = [...group.value];
      };

      // Indeterminate
      const movies = ref(['Movie 1']);
      const onMovieChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
          movies.value.push(value);
        } else {
          movies.value.splice(movies.value.indexOf(value), 1);
        }
        movies.value = [...movies.value];
      };
      const onMoviesChange = () => {
        if (movies.value.length === 1 || movies.value.length === 0) {
          movies.value = ['Movie 1', 'Movie 2'];
        } else if (movies.value.length === 2) {
          movies.value = [];
        }
      };

      // Media
      const media = ref(['Item 1']);
      const toggleMediaValue = (value) => {
        if (media.value.includes(value))
          media.value.splice(media.value.indexOf(value), 1);
        else media.value.push(value);
        media.value = [...media.value];
      };

      return {
        checked1,
        checked2,
        group,
        toggleGroupValue,
        movies,
        onMovieChange,
        onMoviesChange,
        media,
        toggleMediaValue,
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
