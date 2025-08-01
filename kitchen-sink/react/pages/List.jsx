import React from 'react';
import {
  Page,
  Navbar,
  NavbarBackLink,
  Badge,
  Block,
  BlockTitle,
  List,
  ListGroup,
  ListItem,
} from 'konsta/react';
import DemoIcon from '../components/DemoIcon';

export default function ListPage() {
  const isPreview = document.location.href.includes('examplePreview');
  return (
    <Page>
      <Navbar
        title="List"
        left={!isPreview && <NavbarBackLink onClick={() => history.back()} />}
      />

      <BlockTitle>Simple List</BlockTitle>
      <List>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </List>

      <BlockTitle>Strong List</BlockTitle>
      <List strong>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </List>

      <BlockTitle>Strong Outline List</BlockTitle>
      <List strong outline>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </List>

      <BlockTitle>Strong Inset List</BlockTitle>
      <List strong inset>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </List>

      <BlockTitle>Strong Outline Inset List</BlockTitle>
      <List strong outline inset>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </List>

      <BlockTitle>Simple Links List</BlockTitle>
      <List strongIos outlineIos>
        <ListItem title="Link 1" link />
        <ListItem title="Link 2" link />
        <ListItem title="Link 3" link />
      </List>

      <BlockTitle>Data list, with icons</BlockTitle>
      <List strongIos outlineIos>
        <ListItem media={<DemoIcon />} title="Ivan Petrov" after="CEO" />
        <ListItem
          title="John Doe"
          media={<DemoIcon />}
          after={<Badge>5</Badge>}
        />
        <ListItem media={<DemoIcon />} title="Jenna Smith" />
      </List>
      <BlockTitle>Links</BlockTitle>
      <List strongIos outlineIos>
        <ListItem media={<DemoIcon />} link title="Ivan Petrov" after="CEO" />
        <ListItem media={<DemoIcon />} link title="John Doe" after="Cleaner" />
        <ListItem media={<DemoIcon />} link title="Jenna Smith" />
      </List>
      <BlockTitle>Links, Header, Footer</BlockTitle>
      <List strongIos outlineIos>
        <ListItem
          media={<DemoIcon />}
          link
          header="Name"
          title="John Doe"
          after="Edit"
        />
        <ListItem
          media={<DemoIcon />}
          link
          header="Phone"
          title="+7 90 111-22-3344"
          after="Edit"
        />
        <ListItem
          link
          header="Email"
          title="john@doe"
          footer="Home"
          after="Edit"
          media={<DemoIcon />}
        />
        <ListItem
          link
          header="Email"
          title="john@konsta"
          footer="Work"
          after="Edit"
          media={<DemoIcon />}
        />
      </List>

      <BlockTitle>Links, no icons</BlockTitle>
      <List strongIos outlineIos>
        <ListItem link title="Ivan Petrov" />
        <ListItem link title="John Doe" />
        <ListItem groupTitle title="Group title here" />
        <ListItem link title="Ivan Petrov" />
        <ListItem link title="Jenna Smith" />
      </List>

      <BlockTitle>Grouped with sticky titles</BlockTitle>
      <List strongIos outlineIos>
        <ListGroup>
          <ListItem
            title="A"
            groupTitle
            className="ios:top-safe-15 material:top-16-safe sticky"
          />
          <ListItem title="Aaron " />
          <ListItem title="Abbie" />
          <ListItem title="Adam" />
        </ListGroup>
        <ListGroup>
          <ListItem
            title="B"
            groupTitle
            className="ios:top-safe-15 material:top-16-safe  sticky"
          />
          <ListItem title="Bailey" />
          <ListItem title="Barclay" />
          <ListItem title="Bartolo" />
        </ListGroup>
        <ListGroup>
          <ListItem
            title="C"
            groupTitle
            className="ios:top-safe-15 material:top-16-safe  sticky"
          />
          <ListItem title="Caiden" />
          <ListItem title="Calvin" />
          <ListItem title="Candy" />
        </ListGroup>
      </List>

      <BlockTitle className="text-2xl">Media Lists</BlockTitle>
      <Block>
        <p>
          Media Lists are almost the same as Data Lists, but with a more
          flexible layout for visualization of more complex data, like products,
          services, user, etc.
        </p>
      </Block>

      <BlockTitle>Songs</BlockTitle>
      <List strongIos outlineIos>
        <ListItem
          link
          chevronMaterial={false}
          title="Yellow Submarine"
          after="$15"
          subtitle="Beatles"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <img
              className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
              src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
              width="80"
              alt="demo"
            />
          }
        />
        <ListItem
          link
          chevronMaterial={false}
          title="Don't Stop Me Now"
          after="$22"
          subtitle="Queen"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <img
              className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
              src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
              width="80"
              alt="demo"
            />
          }
        />
        <ListItem
          link
          chevronMaterial={false}
          title="Billie Jean"
          after="$16"
          subtitle="Michael Jackson"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <img
              className="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
              src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
              width="80"
              alt="demo"
            />
          }
        />
      </List>
      <BlockTitle>Mail App</BlockTitle>
      <List strongIos outlineIos>
        <ListItem
          link
          chevronMaterial={false}
          title="Facebook"
          after="17:14"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
        <ListItem
          link
          chevronMaterial={false}
          title="John Doe (via Twitter)"
          after="17:11"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
        <ListItem
          link
          chevronMaterial={false}
          title="Facebook"
          after="16:48"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
        <ListItem
          link
          chevronMaterial={false}
          title="John Doe (via Twitter)"
          after="15:32"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
      </List>
    </Page>
  );
}
ListPage.displayName = 'ListPage';
