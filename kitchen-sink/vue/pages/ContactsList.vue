<template>
  <k-page>
    <k-navbar title="Contacts List">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>
    <k-list strong-ios>
      <k-list-group :dividers="false">
        <k-list-item title="A" contacts group-title />
        <k-list-item title="Aaron" contacts />
        <k-list-item title="Abbie" contacts />
        <k-list-item title="Adam" contacts />
        <k-list-item title="Adele" contacts />
        <k-list-item title="Agatha" contacts />
        <k-list-item title="Agnes" contacts />
        <k-list-item title="Albert" contacts />
        <k-list-item title="Alexander" contacts />
      </k-list-group>
      <k-list-group :dividers="false">
        <k-list-item title="B" group-title contacts />
        <k-list-item title="Bailey" contacts />
        <k-list-item title="Barclay" contacts />
        <k-list-item title="Bartolo" contacts />
        <k-list-item title="Bellamy" contacts />
        <k-list-item title="Belle" contacts />
        <k-list-item title="Benjamin" contacts />
      </k-list-group>
      <k-list-group :dividers="false">
        <k-list-item title="C" group-title contacts />
        <k-list-item title="Caiden" contacts />
        <k-list-item title="Calvin" contacts />
        <k-list-item title="Candy" contacts />
        <k-list-item title="Carl" contacts />
        <k-list-item title="Cherilyn" contacts />
        <k-list-item title="Chester" contacts />
        <k-list-item title="Chloe" contacts />
      </k-list-group>
      <k-list-group :dividers="false">
        <k-list-item title="V" group-title contacts />
        <k-list-item title="Vladimir" contacts />
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
