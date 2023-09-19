<template>
  <k-page>
    <k-navbar title="Data Table">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>
    <k-block-title>Plain table</k-block-title>
    <div class="block overflow-x-auto mt-8">
      <k-table>
        <k-table-head>
          <k-table-row header>
            <k-table-cell header left>Dessert (100g serving)</k-table-cell>
            <k-table-cell header>Calories</k-table-cell>
            <k-table-cell header>Fat (g)</k-table-cell>
            <k-table-cell header>Carbs</k-table-cell>
            <k-table-cell header>Protein (g)</k-table-cell>
          </k-table-row>
        </k-table-head>
        <k-table-body>
          <k-table-row>
            <k-table-cell left>Frozen yogurt</k-table-cell>
            <k-table-cell>159</k-table-cell>
            <k-table-cell>6.0</k-table-cell>
            <k-table-cell>24</k-table-cell>
            <k-table-cell>4.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell left>Ice cream sandwich</k-table-cell>
            <k-table-cell>237</k-table-cell>
            <k-table-cell>9.0</k-table-cell>
            <k-table-cell>37</k-table-cell>
            <k-table-cell>4.4</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell left>Eclair</k-table-cell>
            <k-table-cell>262</k-table-cell>
            <k-table-cell>16.0</k-table-cell>
            <k-table-cell>24</k-table-cell>
            <k-table-cell>6.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell left>Cupcake</k-table-cell>
            <k-table-cell>305</k-table-cell>
            <k-table-cell>3.7</k-table-cell>
            <k-table-cell>67</k-table-cell>
            <k-table-cell>4.3</k-table-cell>
          </k-table-row>
        </k-table-body>
      </k-table>
    </div>
    <k-block-title>Within card</k-block-title>
    <k-card class="block overflow-x-auto mt-8" :content-wrap="false">
      <k-table>
        <k-table-head>
          <k-table-row header>
            <k-table-cell header left>Dessert (100g serving)</k-table-cell>
            <k-table-cell header>Calories</k-table-cell>
            <k-table-cell header>Fat (g)</k-table-cell>
            <k-table-cell header>Carbs</k-table-cell>
            <k-table-cell header>Protein (g)</k-table-cell>
          </k-table-row>
        </k-table-head>
        <k-table-body>
          <k-table-row>
            <k-table-cell left>Frozen yogurt</k-table-cell>
            <k-table-cell>159</k-table-cell>
            <k-table-cell>6.0</k-table-cell>
            <k-table-cell>24</k-table-cell>
            <k-table-cell>4.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell left>Ice cream sandwich</k-table-cell>
            <k-table-cell>237</k-table-cell>
            <k-table-cell>9.0</k-table-cell>
            <k-table-cell>37</k-table-cell>
            <k-table-cell>4.4</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell left>Eclair</k-table-cell>
            <k-table-cell>262</k-table-cell>
            <k-table-cell>16.0</k-table-cell>
            <k-table-cell>24</k-table-cell>
            <k-table-cell>6.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell left>Cupcake</k-table-cell>
            <k-table-cell>305</k-table-cell>
            <k-table-cell>3.7</k-table-cell>
            <k-table-cell>67</k-table-cell>
            <k-table-cell>4.3</k-table-cell>
          </k-table-row>
        </k-table-body>
      </k-table>
    </k-card>
  </k-page>
</template>
<script>
  import {
    kPage,
    kNavbar,
    kNavbarBackLink,
    kBlockTitle,
    kCard,
    kTable,
    kTableHead,
    kTableBody,
    kTableCell,
    kTableRow,
  } from 'konsta/vue';

  export default {
    name: 'DataTablePage',
    components: {
      kPage,
      kNavbar,
      kNavbarBackLink,
      kBlockTitle,
      kCard,
      kTable,
      kTableHead,
      kTableBody,
      kTableCell,
      kTableRow,
    },
    setup() {
      return {
        isPreview: document.location.href.includes('examplePreview'),
        history: window.history,
      };
    },
  };
</script>
