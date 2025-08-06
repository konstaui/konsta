<script>
  import {
    Page,
    Navbar,
    Block,
    NavbarBackLink,
    BlockTitle,
    Card,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
</script>

<Page>
  <Navbar title="Data Table">
    {#snippet left()}
      {#if !isPreview}
        <NavbarBackLink onclick={() => history.back()} />
      {/if}
    {/snippet}
  </Navbar>
  <BlockTitle>Plain table</BlockTitle>
  <Block class="overflow-x-auto !pl-safe !pr-safe">
    <Table>
      <TableHead>
        <TableRow header>
          <TableCell header>Dessert (100g serving)</TableCell>
          <TableCell header class="text-right">Calories</TableCell>
          <TableCell header class="text-right">Fat (g)</TableCell>
          <TableCell header class="text-right">Carbs</TableCell>
          <TableCell header class="text-right">Protein (g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Frozen yogurt</TableCell>
          <TableCell class="text-right">159</TableCell>
          <TableCell class="text-right">6.0</TableCell>
          <TableCell class="text-right">24</TableCell>
          <TableCell class="text-right">4.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ice cream sandwich</TableCell>
          <TableCell class="text-right">237</TableCell>
          <TableCell class="text-right">9.0</TableCell>
          <TableCell class="text-right">37</TableCell>
          <TableCell class="text-right">4.4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eclair</TableCell>
          <TableCell class="text-right">262</TableCell>
          <TableCell class="text-right">16.0</TableCell>
          <TableCell class="text-right">24</TableCell>
          <TableCell class="text-right">6.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cupcake</TableCell>
          <TableCell class="text-right">305</TableCell>
          <TableCell class="text-right">3.7</TableCell>
          <TableCell class="text-right">67</TableCell>
          <TableCell class="text-right">4.3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Block>
  <BlockTitle>Within card</BlockTitle>
  <Card class="overflow-x-auto" contentWrap={false}>
    <Table>
      <TableHead>
        <TableRow header>
          <TableCell header>Dessert (100g serving)</TableCell>
          <TableCell header class="text-right">Calories</TableCell>
          <TableCell header class="text-right">Fat (g)</TableCell>
          <TableCell header class="text-right">Carbs</TableCell>
          <TableCell header class="text-right">Protein (g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Frozen yogurt</TableCell>
          <TableCell class="text-right">159</TableCell>
          <TableCell class="text-right">6.0</TableCell>
          <TableCell class="text-right">24</TableCell>
          <TableCell class="text-right">4.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ice cream sandwich</TableCell>
          <TableCell class="text-right">237</TableCell>
          <TableCell class="text-right">9.0</TableCell>
          <TableCell class="text-right">37</TableCell>
          <TableCell class="text-right">4.4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eclair</TableCell>
          <TableCell class="text-right">262</TableCell>
          <TableCell class="text-right">16.0</TableCell>
          <TableCell class="text-right">24</TableCell>
          <TableCell class="text-right">6.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cupcake</TableCell>
          <TableCell class="text-right">305</TableCell>
          <TableCell class="text-right">3.7</TableCell>
          <TableCell class="text-right">67</TableCell>
          <TableCell class="text-right">4.3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</Page>
