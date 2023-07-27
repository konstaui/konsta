<template>
  <k-page>
    <k-navbar title="Contacts List">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>
    <k-list strong-ios>
      <k-list-group>
        <k-list-item title="A" contacts group-title :dividers="false" />
        <k-list-item title="Aaron" contacts :dividers="false" />
        <k-list-item title="Abbie" contacts :dividers="false" />
        <k-list-item title="Adam" contacts :dividers="false" />
        <k-list-item title="Adele" contacts :dividers="false" />
        <k-list-item title="Agatha" contacts :dividers="false" />
        <k-list-item title="Agnes" contacts :dividers="false" />
        <k-list-item title="Albert" contacts :dividers="false" />
        <k-list-item title="Alexander" contacts :dividers="false" />
      </k-list-group>
      <k-list-group>
        <k-list-item title="B" group-title contacts :dividers="false" />
        <k-list-item title="Bailey" contacts :dividers="false" />
        <k-list-item title="Barclay" contacts :dividers="false" />
        <k-list-item title="Bartolo" contacts :dividers="false" />
        <k-list-item title="Bellamy" contacts :dividers="false" />
        <k-list-item title="Belle" contacts :dividers="false" />
        <k-list-item title="Benjamin" contacts :dividers="false" />
      </k-list-group>
      <k-list-group>
        <k-list-item title="C" group-title contacts :dividers="false" />
        <k-list-item title="Caiden" contacts :dividers="false" />
        <k-list-item title="Calvin" contacts :dividers="false" />
        <k-list-item title="Candy" contacts :dividers="false" />
        <k-list-item title="Carl" contacts :dividers="false" />
        <k-list-item title="Cherilyn" contacts :dividers="false" />
        <k-list-item title="Chester" contacts :dividers="false" />
        <k-list-item title="Chloe" contacts :dividers="false" />
      </k-list-group>
      <k-list-group>
        <k-list-item title="V" group-title contacts :dividers="false" />
        <k-list-item title="Vladimir" contacts :dividers="false" />
      </k-list-group>
    </k-list>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kList,
    kListGroup,
    kListItem,
  } from 'konsta/vue';

  export default {
    name: 'ContactsListPage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kList,
      kListGroup,
      kListItem,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
