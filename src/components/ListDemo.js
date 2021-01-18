import Block from '../tailwind-mobile/components/Block';
import BlockTitle from '../tailwind-mobile/components/BlockTitle';
import List from '../tailwind-mobile/components/List';
import ListButton from '../tailwind-mobile/components/ListButton';
import ListItem from '../tailwind-mobile/components/ListItem';

export default function ListDemo() {
  const Icon = () => null;
  return (
    <>
      <BlockTitle className="text-4xl">List</BlockTitle>

      <BlockTitle>Simple List</BlockTitle>
      <List>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
      </List>

      <BlockTitle>Simple Links List</BlockTitle>
      <List>
        <ListItem title="Link 1" href />
        <ListItem title="Link 2" href />
        <ListItem title="Link 3" href />
      </List>

      <BlockTitle>Data list, with icons</BlockTitle>
      <List>
        <ListItem title="Ivan Petrov" after="CEO">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem title="John Doe" badge="5">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem title="Jenna Smith">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
      </List>
      <BlockTitle>Links</BlockTitle>
      <List>
        <ListItem href title="Ivan Petrov" after="CEO">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem href title="John Doe" after="Cleaner">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem href title="Jenna Smith">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
      </List>
      <BlockTitle>Links, Header, Footer</BlockTitle>
      <List>
        <ListItem href header="Name" title="John Doe" after="Edit">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem href header="Phone" title="+7 90 111-22-3344" after="Edit">
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem
          href
          header="Email"
          title="john@doe"
          footer="Home"
          after="Edit"
        >
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
        <ListItem
          href
          header="Email"
          title="john@framework7"
          footer="Work"
          after="Edit"
        >
          <Icon slot="media" icon="icon-f7" />
        </ListItem>
      </List>

      <BlockTitle>Links, no icons</BlockTitle>
      <List>
        <ListItem href title="Ivan Petrov" />
        <ListItem href title="John Doe" />
        <ListItem divider title="Divider Here" />
        <ListItem href title="Ivan Petrov" />
        <ListItem href title="Jenna Smith" />
      </List>

      <BlockTitle>Inset List</BlockTitle>
      <List inset>
        <ListItem title="Item 1" />
        <ListItem title="Item 2" />
        <ListItem title="Item 3" />
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
      <List>
        <ListItem
          href
          title="Yellow Submarine"
          after="$15"
          subtitle="Beatles"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <img
              src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
              width="80"
              alt="demo"
            />
          }
        />
        <ListItem
          href
          title="Don't Stop Me Now"
          after="$22"
          subtitle="Queen"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <img
              src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
              width="80"
              alt="demo"
            />
          }
        />
        <ListItem
          href
          title="Billie Jean"
          after="$16"
          subtitle="Michael Jackson"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <img
              src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
              width="80"
              alt="demo"
            />
          }
        />
      </List>
      <BlockTitle>Mail App</BlockTitle>
      <List>
        <ListItem
          href
          title="Facebook"
          after="17:14"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
        <ListItem
          href
          title="John Doe (via Twitter)"
          after="17:11"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
        <ListItem
          href
          title="Facebook"
          after="16:48"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
        <ListItem
          href
          title="John Doe (via Twitter)"
          after="15:32"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        />
      </List>

      <BlockTitle>List Button</BlockTitle>
      <List>
        <ListButton>Button 1</ListButton>
        <ListButton>Button 2</ListButton>
        <ListButton>Button 3</ListButton>
      </List>

      <List inset>
        <ListButton>Button 1</ListButton>
        <ListButton>Button 2</ListButton>
        <ListButton>Button 3</ListButton>
      </List>
      <List inset>
        <ListButton
          colors={{ text: 'text-red-500', activeBg: 'active:bg-red-500' }}
        >
          Red Button
        </ListButton>
      </List>
    </>
  );
}
