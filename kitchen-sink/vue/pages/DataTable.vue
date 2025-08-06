<template>
  <k-page>
    <k-navbar title="Data Table">
      <template v-if="!isPreview" #left>
        <k-navbar-back-link @click="() => history.back()" />
      </template>
    </k-navbar>
    <k-block-title>Plain table</k-block-title>
    <k-block class="overflow-x-auto !pl-safe !pr-safe">
      <k-table>
        <k-table-head>
          <k-table-row header>
            <k-table-cell header>Dessert (100g serving)</k-table-cell>
            <k-table-cell header class="text-right">Calories</k-table-cell>
            <k-table-cell header class="text-right">Fat (g)</k-table-cell>
            <k-table-cell header class="text-right">Carbs</k-table-cell>
            <k-table-cell header class="text-right">Protein (g)</k-table-cell>
          </k-table-row>
        </k-table-head>
        <k-table-body>
          <k-table-row>
            <k-table-cell>Frozen yogurt</k-table-cell>
            <k-table-cell class="text-right">159</k-table-cell>
            <k-table-cell class="text-right">6.0</k-table-cell>
            <k-table-cell class="text-right">24</k-table-cell>
            <k-table-cell class="text-right">4.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell>Ice cream sandwich</k-table-cell>
            <k-table-cell class="text-right">237</k-table-cell>
            <k-table-cell class="text-right">9.0</k-table-cell>
            <k-table-cell class="text-right">37</k-table-cell>
            <k-table-cell class="text-right">4.4</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell>Eclair</k-table-cell>
            <k-table-cell class="text-right">262</k-table-cell>
            <k-table-cell class="text-right">16.0</k-table-cell>
            <k-table-cell class="text-right">24</k-table-cell>
            <k-table-cell class="text-right">6.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell>Cupcake</k-table-cell>
            <k-table-cell class="text-right">305</k-table-cell>
            <k-table-cell class="text-right">3.7</k-table-cell>
            <k-table-cell class="text-right">67</k-table-cell>
            <k-table-cell class="text-right">4.3</k-table-cell>
          </k-table-row>
        </k-table-body>
      </k-table>
    </k-block>
    <k-block-title>Within card</k-block-title>
    <k-card class="overflow-x-auto" :content-wrap="false">
      <k-table>
        <k-table-head>
          <k-table-row header>
            <k-table-cell header>Dessert (100g serving)</k-table-cell>
            <k-table-cell header class="text-right">Calories</k-table-cell>
            <k-table-cell header class="text-right">Fat (g)</k-table-cell>
            <k-table-cell header class="text-right">Carbs</k-table-cell>
            <k-table-cell header class="text-right">Protein (g)</k-table-cell>
          </k-table-row>
        </k-table-head>
        <k-table-body>
          <k-table-row>
            <k-table-cell>Frozen yogurt</k-table-cell>
            <k-table-cell class="text-right">159</k-table-cell>
            <k-table-cell class="text-right">6.0</k-table-cell>
            <k-table-cell class="text-right">24</k-table-cell>
            <k-table-cell class="text-right">4.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell>Ice cream sandwich</k-table-cell>
            <k-table-cell class="text-right">237</k-table-cell>
            <k-table-cell class="text-right">9.0</k-table-cell>
            <k-table-cell class="text-right">37</k-table-cell>
            <k-table-cell class="text-right">4.4</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell>Eclair</k-table-cell>
            <k-table-cell class="text-right">262</k-table-cell>
            <k-table-cell class="text-right">16.0</k-table-cell>
            <k-table-cell class="text-right">24</k-table-cell>
            <k-table-cell class="text-right">6.0</k-table-cell>
          </k-table-row>
          <k-table-row>
            <k-table-cell>Cupcake</k-table-cell>
            <k-table-cell class="text-right">305</k-table-cell>
            <k-table-cell class="text-right">3.7</k-table-cell>
            <k-table-cell class="text-right">67</k-table-cell>
            <k-table-cell class="text-right">4.3</k-table-cell>
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
    kBlock,
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
      kBlock,
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
