<template>
  <k-page>
    <k-navbar title="Cards">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>

    <k-block-title :with-block="false">Simple Cards</k-block-title>
    <k-card>
      This is a simple card with plain text, but cards can also contain their
      own header, footer, list view, image, or any other element.
    </k-card>
    <k-card header="Card header" footer="Card footer">
      Card with header and footer. Card headers are used to display card titles
      and footers for additional information or just for custom actions.
    </k-card>
    <k-card>
      Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
      Mauris aliquet magna justo.
    </k-card>

    <k-block-title :with-block="false">Outline Cards</k-block-title>
    <k-card outline>
      This is a simple card with plain text, but cards can also contain their
      own header, footer, list view, image, or any other element.
    </k-card>
    <k-card outline header="Card header" footer="Card footer">
      Card with header and footer. Card headers are used to display card titles
      and footers for additional information or just for custom actions.
    </k-card>
    <k-card outline>
      Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
      Mauris aliquet magna justo.{' '}
    </k-card>

    <k-block-title :with-block="false">Outline With Dividers</k-block-title>
    <k-card
      outline
      header="Card header"
      footer="Card footer"
      header-divider
      footer-divider
    >
      Card with header and footer. Card headers are used to display card titles
      and footers for additional information or just for custom actions.
    </k-card>

    <k-block-title :with-block="false">Raised Cards</k-block-title>
    <k-card raised>
      This is a simple card with plain text, but cards can also contain their
      own header, footer, list view, image, or any other element.
    </k-card>
    <k-card raised header="Card header" footer="Card footer">
      Card with header and footer. Card headers are used to display card titles
      and footers for additional information or just for custom actions.
    </k-card>
    <k-card raised>
      Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.
      Mauris aliquet magna justo.{' '}
    </k-card>

    <k-block-title :with-block="false">Card With List View</k-block-title>
    <k-card>
      <k-list nested class="-m-4">
        <k-list-item href title="Link 1" />
        <k-list-item href title="Link 2" />
        <k-list-item href title="Link 3" />
        <k-list-item href title="Link 4" />
        <k-list-item href title="Link 5" />
      </k-list>
    </k-card>

    <k-block-title :with-block="false">Styled Cards</k-block-title>
    <div class="lg:grid lg:grid-cols-2">
      <k-card outline>
        <template #footer>
          <div class="flex justify-between material:hidden">
            <k-link>Like</k-link>
            <k-link>Read more</k-link>
          </div>
          <div
            className="flex justify-start ios:hidden space-x-2 rtl:space-x-reverse"
          >
            <k-button rounded inline> Like </k-button>
            <k-button rounded inline outline> Read more </k-button>
          </div>
        </template>
        <div
          class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
          :style="{
            'background-image':
              'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
          }"
        >
          Journey To Mountains
        </div>
        <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
      </k-card>
      <k-card>
        <template #footer>
          <div class="flex justify-between material:hidden">
            <k-link>Like</k-link>
            <k-link>Read more</k-link>
          </div>
          <div
            className="flex justify-start ios:hidden space-x-2 rtl:space-x-reverse"
          >
            <k-button rounded inline> Like </k-button>
            <k-button rounded inline outline> Read more </k-button>
          </div>
        </template>
        <div
          class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
          :style="{
            'background-image':
              'url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)',
          }"
        >
          Lorem Ipsum
        </div>
        <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
      </k-card>
    </div>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kCard,
    kBlockTitle,
    kList,
    kListItem,
    kLink,
    kButton,
  } from 'konsta/vue';

  export default {
    name: 'CardsPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kCard,
      kBlockTitle,
      kList,
      kListItem,
      kLink,
      kButton,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
