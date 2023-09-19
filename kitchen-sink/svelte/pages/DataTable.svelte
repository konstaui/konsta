<script>
  import {
    Page,
    Navbar,
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
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>
  <BlockTitle>Plain table</BlockTitle>
  <div class="block overflow-x-auto mt-8">
    <Table>
      <TableHead>
        <TableRow header>
          <TableCell header left>Dessert (100g serving)</TableCell>
          <TableCell header>Calories</TableCell>
          <TableCell header>Fat (g)</TableCell>
          <TableCell header>Carbs</TableCell>
          <TableCell header>Protein (g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell left>Frozen yogurt</TableCell>
          <TableCell>159</TableCell>
          <TableCell>6.0</TableCell>
          <TableCell>24</TableCell>
          <TableCell>4.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell left>Ice cream sandwich</TableCell>
          <TableCell>237</TableCell>
          <TableCell>9.0</TableCell>
          <TableCell>37</TableCell>
          <TableCell>4.4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell left>Eclair</TableCell>
          <TableCell>262</TableCell>
          <TableCell>16.0</TableCell>
          <TableCell>24</TableCell>
          <TableCell>6.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell left>Cupcake</TableCell>
          <TableCell>305</TableCell>
          <TableCell>3.7</TableCell>
          <TableCell>67</TableCell>
          <TableCell>4.3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  <BlockTitle>Within card</BlockTitle>
  <Card class="block overflow-x-auto mt-8" contentWrap={false}>
    <Table>
      <TableHead>
        <TableRow header>
          <TableCell header left>Dessert (100g serving)</TableCell>
          <TableCell header>Calories</TableCell>
          <TableCell header>Fat (g)</TableCell>
          <TableCell header>Carbs</TableCell>
          <TableCell header>Protein (g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell left>Frozen yogurt</TableCell>
          <TableCell>159</TableCell>
          <TableCell>6.0</TableCell>
          <TableCell>24</TableCell>
          <TableCell>4.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell left>Ice cream sandwich</TableCell>
          <TableCell>237</TableCell>
          <TableCell>9.0</TableCell>
          <TableCell>37</TableCell>
          <TableCell>4.4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell left>Eclair</TableCell>
          <TableCell>262</TableCell>
          <TableCell>16.0</TableCell>
          <TableCell>24</TableCell>
          <TableCell>6.0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell left>Cupcake</TableCell>
          <TableCell>305</TableCell>
          <TableCell>3.7</TableCell>
          <TableCell>67</TableCell>
          <TableCell>4.3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</Page>
