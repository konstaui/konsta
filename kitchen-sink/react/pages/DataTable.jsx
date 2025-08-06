import React from 'react';
import {
  Page,
  Block,
  Navbar,
  NavbarBackLink,
  BlockTitle,
  Card,
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
      <Block className="overflow-x-auto !pl-safe !pr-safe">
        <Table>
          <TableHead>
            <TableRow header>
              <TableCell header>Dessert (100g serving)</TableCell>
              <TableCell header className="text-right">
                Calories
              </TableCell>
              <TableCell header className="text-right">
                Fat (g)
              </TableCell>
              <TableCell header className="text-right">
                Carbs
              </TableCell>
              <TableCell header className="text-right">
                Protein (g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Frozen yogurt</TableCell>
              <TableCell className="text-right">159</TableCell>
              <TableCell className="text-right">6.0</TableCell>
              <TableCell className="text-right">24</TableCell>
              <TableCell className="text-right">4.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ice cream sandwich</TableCell>
              <TableCell className="text-right">237</TableCell>
              <TableCell className="text-right">9.0</TableCell>
              <TableCell className="text-right">37</TableCell>
              <TableCell className="text-right">4.4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell className="text-right">262</TableCell>
              <TableCell className="text-right">16.0</TableCell>
              <TableCell className="text-right">24</TableCell>
              <TableCell className="text-right">6.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell className="text-right">305</TableCell>
              <TableCell className="text-right">3.7</TableCell>
              <TableCell className="text-right">67</TableCell>
              <TableCell className="text-right">4.3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Block>
      <BlockTitle>Within card</BlockTitle>
      <Card className="overflow-x-auto" contentWrap={false}>
        <Table>
          <TableHead>
            <TableRow header>
              <TableCell header>Dessert (100g serving)</TableCell>
              <TableCell header className="text-right">
                Calories
              </TableCell>
              <TableCell header className="text-right">
                Fat (g)
              </TableCell>
              <TableCell header className="text-right">
                Carbs
              </TableCell>
              <TableCell header className="text-right">
                Protein (g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Frozen yogurt</TableCell>
              <TableCell className="text-right">159</TableCell>
              <TableCell className="text-right">6.0</TableCell>
              <TableCell className="text-right">24</TableCell>
              <TableCell className="text-right">4.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ice cream sandwich</TableCell>
              <TableCell className="text-right">237</TableCell>
              <TableCell className="text-right">9.0</TableCell>
              <TableCell className="text-right">37</TableCell>
              <TableCell className="text-right">4.4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Eclair</TableCell>
              <TableCell className="text-right">262</TableCell>
              <TableCell className="text-right">16.0</TableCell>
              <TableCell className="text-right">24</TableCell>
              <TableCell className="text-right">6.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cupcake</TableCell>
              <TableCell className="text-right">305</TableCell>
              <TableCell className="text-right">3.7</TableCell>
              <TableCell className="text-right">67</TableCell>
              <TableCell className="text-right">4.3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </Page>
  );
}
DataTablePage.displayName = 'DataTablePage';
