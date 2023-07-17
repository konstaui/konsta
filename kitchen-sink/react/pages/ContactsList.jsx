import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListGroup,
  ListItem,
} from 'konsta/react';

export default function ContactsListPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="Contacts List"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />
      <List strongIos>
        <ListGroup>
          <ListItem title="A" groupTitle contacts="true" />
          <ListItem title="Aaron" dividers={false} contacts="true" />
          <ListItem title="Abbie" dividers={false} contacts="true" />
          <ListItem title="Adam" dividers={false} contacts="true" />
          <ListItem title="Adele" dividers={false} contacts="true" />
          <ListItem title="Agatha" dividers={false} contacts="true" />
          <ListItem title="Agnes" dividers={false} contacts="true" />
          <ListItem title="Albert" dividers={false} contacts="true" />
          <ListItem title="Alexander" dividers={false} contacts="true" />
        </ListGroup>
        <ListGroup>
          <ListItem title="B" groupTitle contacts />
          <ListItem title="Bailey" dividers={false} contacts="true" />
          <ListItem title="Barclay" dividers={false} contacts="true" />
          <ListItem title="Bartolo" dividers={false} contacts="true" />
          <ListItem title="Bellamy" dividers={false} contacts="true" />
          <ListItem title="Belle" dividers={false} contacts="true" />
          <ListItem title="Benjamin" dividers={false} contacts="true" />
        </ListGroup>
        <ListGroup>
          <ListItem title="C" groupTitle contacts="true" />
          <ListItem title="Caiden" dividers={false} contacts="true" />
          <ListItem title="Calvin" dividers={false} contacts="true" />
          <ListItem title="Candy" dividers={false} contacts="true" />
          <ListItem title="Carl" dividers={false} contacts="true" />
          <ListItem title="Cherilyn" dividers={false} contacts="true" />
          <ListItem title="Chester" dividers={false} contacts="true" />
          <ListItem title="Chloe" dividers={false} contacts="true" />
        </ListGroup>
        <ListGroup>
          <ListItem title="V" groupTitle contacts="true" />
          <ListItem title="Vladimir" contacts="true" />
        </ListGroup>
      </List>
    </Page>
  );
}
ContactsListPage.displayName = 'ContactsListPage';
