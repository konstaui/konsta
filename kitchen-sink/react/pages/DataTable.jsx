import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  BlockTitle,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from 'konsta/react';

export default function DataTablePage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Data Table"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />
      <BlockTitle>Plain table</BlockTitle>
      <div className="block overflow-x-auto mt-8">
        <Table>
          <TableHead>
            <TableRow header>
              <TableCell header>Dessert (100g serving)</TableCell>
              <TableCell header>Calories</TableCell>
              <TableCell header>Fat (g)</TableCell>
              <TableCell header>Carbs</TableCell>
              <TableCell header>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Frozen yogurt</TableCell>
              <TableCell>159</TableCell>
              <TableCell>6.0</TableCell>
              <TableCell>24</TableCell>
              <TableCell>4.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ice cream sandwich</TableCell>
              <TableCell>237</TableCell>
              <TableCell>9.0</TableCell>
              <TableCell>37</TableCell>
              <TableCell>4.4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell>262</TableCell>
              <TableCell>16.0</TableCell>
              <TableCell>24</TableCell>
              <TableCell>6.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell>305</TableCell>
              <TableCell>3.7</TableCell>
              <TableCell>67</TableCell>
              <TableCell>4.3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Page>
  );
}
DataTablePage.displayName = 'DataTablePage';
