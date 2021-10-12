<template>
  <twm-page>
    <twm-navbar title="Cards">
      <template v-if="!isPreview" #left>
        <twm-navbar-back-link @click="() => history.back()" />
      </template>
    </twm-navbar>

    <twm-block-title :with-block="false">Simple Cards</twm-block-title>
    <twm-card>
      This is a simple card with plain text, but cards can also contain their
      own header, footer, list view, image, or any other element.
    </twm-card>
    <twm-card header="Card header" footer="Card footer">
      Card with header and footer. Card headers are used to display card titles
      and footers for additional information or just for custom actions.
    </twm-card>
    <twm-card>
      Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
      Mauris aliquet magna justo.
    </twm-card>

    <twm-block-title :with-block="false">Outline Cards</twm-block-title>
    <twm-card outline>
      This is a simple card with plain text, but cards can also contain their
      own header, footer, list view, image, or any other element.
    </twm-card>
    <twm-card outline header="Card header" footer="Card footer">
      Card with header and footer. Card headers are used to display card titles
      and footers for additional information or just for custom actions.
    </twm-card>
    <twm-card outline>
      Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
      Mauris aliquet magna justo.{' '}
    </twm-card>

    <twm-block-title :with-block="false">Card With List View</twm-block-title>
    <twm-card>
      <twm-list nested class="-m-4">
        <twm-list-item href title="Link 1" />
        <twm-list-item href title="Link 2" />
        <twm-list-item href title="Link 3" />
        <twm-list-item href title="Link 4" />
        <twm-list-item href title="Link 5" />
      </twm-list>
    </twm-card>

    <twm-block-title :with-block="false">Styled Cards</twm-block-title>
    <div class="lg:grid lg:grid-cols-2">
      <twm-card>
        <template #header>
          <div
            class="
              -mx-4
              -my-2
              h-48
              p-4
              flex
              items-end
              text-white
              font-bold
              bg-cover bg-center
            "
            :style="{
              'background-image':
                'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
            }"
          >
            Journey To Mountains
          </div>
        </template>
        <template #footer>
          <div class="flex justify-between">
            <twm-link>Like</twm-link>
            <twm-link>Read more</twm-link>
          </div>
        </template>
        <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
      </twm-card>
      <twm-card>
        <template #header>
          <div
            class="
              -mx-4
              -my-2
              h-48
              p-4
              flex
              items-end
              text-white
              font-bold
              bg-cover bg-center
            "
            :style="{
              'background-image':
                'url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)',
            }"
          >
            Lorem Ipsum
          </div>
        </template>
        <template #footer>
          <div class="flex justify-between">
            <twm-link>Like</twm-link>
            <twm-link>Read more</twm-link>
          </div>
        </template>
        <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
      </twm-card>
    </div>
  </twm-page>
</template>
<script>
  import {
    twmPage,
    twmNavbar,
    twmNavbarBackLink,
    twmCard,
    twmBlockTitle,
    twmList,
    twmListItem,
    twmLink,
  } from 'tailwind-mobile/vue';

  export default {
    name: 'CardsPage',
    components: {
      twmPage,
      twmNavbar,
      twmNavbarBackLink,
      twmCard,
      twmBlockTitle,
      twmList,
      twmListItem,
      twmLink,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
