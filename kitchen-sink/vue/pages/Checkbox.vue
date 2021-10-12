<template>
  <twm-page>
    <twm-navbar title="Checkbox">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title>Inline</twm-block-title>
    <twm-block strong>
      <p>
        Lorem{{ ' ' }}
        <twm-checkbox
          name="checkbox-1"
          :checked="checked1"
          @change="(e) => (checked1 = e.target.checked)"
        />{{ ' ' }} ipsum dolor sit amet, consectetur adipisicing elit. Alias
        beatae illo nihil aut eius commodi sint eveniet aliquid eligendi
        {{ ' ' }}
        <twm-checkbox
          name="checkbox-2"
          :checked="checked2"
          @change="(e) => (checked2 = e.target.checked)"
        />{{ ' ' }}
        ad delectus impedit tempore nemo, enim vel praesentium consequatur nulla
        mollitia!
      </p>
    </twm-block>

    <twm-block-title>Checkbox Group</twm-block-title>
    <twm-list>
      <twm-list-item label title="Books">
        <template #media>
          <twm-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Books')"
            @change="() => toggleGroupValue('Books')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Movies">
        <template #media>
          <twm-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Movies')"
            @change="() => toggleGroupValue('Movies')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Food">
        <template #media>
          <twm-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Food')"
            @change="() => toggleGroupValue('Food')"
          />
        </template>
      </twm-list-item>
      <twm-list-item label title="Drinks">
        <template #media>
          <twm-checkbox
            component="div"
            name="demo-checkbox"
            :checked="group.includes('Drinks')"
            @change="() => toggleGroupValue('Drinks')"
          />
        </template>
      </twm-list-item>
    </twm-list>

    <twm-block-title>Indeterminate State</twm-block-title>
    <twm-list>
      <twm-list-item label title="Movies" name="demo-checkbox">
        <template #media>
          <twm-checkbox
            :checked="movies.length === 2"
            :indeterminate="movies.length === 1"
            @change="onMoviesChange"
          />
        </template>
        <ul class="pl-12">
          <twm-list-item label title="Movie 1">
            <template #media>
              <twm-checkbox
                name="demo-checkbox"
                value="Movie 1"
                :checked="movies.indexOf('Movie 1') >= 0"
                @change="onMovieChange"
              />
            </template>
          </twm-list-item>
          <twm-list-item label title="Movie 2">
            <template #media>
              <twm-checkbox
                name="demo-checkbox"
                value="Movie 2"
                :checked="movies.indexOf('Movie 2') >= 0"
                @change="onMovieChange"
              />
            </template>
          </twm-list-item>
        </ul>
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
          <twm-checkbox
            component="div"
            name="demo-media-checkbox"
            :checked="media.includes('Item 1')"
            @change="() => toggleMediaValue('Item 1')"
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
          <twm-checkbox
            component="div"
            name="demo-media-checkbox"
            :checked="media.includes('Item 2')"
            @change="() => toggleMediaValue('Item 2')"
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
    twmCheckbox,
    twmBlockTitle,
    twmBlock,
    twmList,
    twmListItem,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'CheckboxPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmCheckbox,
      twmBlockTitle,
      twmBlock,
      twmList,
      twmListItem,
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
