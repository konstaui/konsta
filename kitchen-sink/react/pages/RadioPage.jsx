import React, { useState } from 'react';
import {
  Radio,
  BlockTitle,
  Block,
  List,
  ListItem,
} from 'tailwind-mobile/react';
import Page from '../components/Page';

export default function RadioPage() {
  const [inlineValue, setInlineValue] = useState('inline-1');
  const [groupValue, setGroupValue] = useState('Books');
  const [mediaValue, setMediaValue] = useState('Item 1');

  return (
    <Page title="Radio">
      <BlockTitle>Inline</BlockTitle>
      <Block strong>
        <p>
          Lorem{' '}
          <Radio
            name="demo-radio-inline"
            value="inline-1"
            checked={inlineValue === 'inline-1'}
            onChange={() => setInlineValue('inline-1')}
          />{' '}
          ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae illo
          nihil aut eius commodi sint eveniet aliquid eligendi{' '}
          <Radio
            name="demo-radio-inline"
            value="inline-2"
            checked={inlineValue === 'inline-2'}
            onChange={() => setInlineValue('inline-2')}
          />{' '}
          ad delectus impedit tempore nemo, enim vel praesentium consequatur
          nulla mollitia!
        </p>
      </Block>

      <BlockTitle>Radio Group</BlockTitle>
      <List>
        <ListItem
          label
          title="Books"
          media={
            <Radio
              component="div"
              value="Books"
              checked={groupValue === 'Books'}
              onChange={() => setGroupValue('Books')}
            />
          }
        />
        <ListItem
          label
          title="Movies"
          media={
            <Radio
              component="div"
              value="Movies"
              checked={groupValue === 'Movies'}
              onChange={() => setGroupValue('Movies')}
            />
          }
        />
        <ListItem
          label
          title="Food"
          media={
            <Radio
              component="div"
              value="Food"
              checked={groupValue === 'Food'}
              onChange={() => setGroupValue('Food')}
            />
          }
        />
        <ListItem
          label
          title="Drinks"
          media={
            <Radio
              component="div"
              value="Drinks"
              checked={groupValue === 'Drinks'}
              onChange={() => setGroupValue('Drinks')}
            />
          }
        />
      </List>

      <List>
        <ListItem
          label
          title="Books"
          after={
            <Radio
              component="div"
              value="Books"
              checked={groupValue === 'Books'}
              onChange={() => setGroupValue('Books')}
            />
          }
        />
        <ListItem
          label
          title="Movies"
          after={
            <Radio
              component="div"
              value="Movies"
              checked={groupValue === 'Movies'}
              onChange={() => setGroupValue('Movies')}
            />
          }
        />
        <ListItem
          label
          title="Food"
          after={
            <Radio
              component="div"
              value="Food"
              checked={groupValue === 'Food'}
              onChange={() => setGroupValue('Food')}
            />
          }
        />
        <ListItem
          label
          title="Drinks"
          after={
            <Radio
              component="div"
              value="Drinks"
              checked={groupValue === 'Drinks'}
              onChange={() => setGroupValue('Drinks')}
            />
          }
        />
      </List>

      <BlockTitle>With Media Lists</BlockTitle>
      <List>
        <ListItem
          label
          title="Facebook"
          after="17:14"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <Radio
              component="div"
              checked={mediaValue === 'Item 1'}
              onChange={() => setMediaValue('Item 1')}
            />
          }
        />
        <ListItem
          label
          title="John Doe (via Twitter)"
          after="17:11"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
          media={
            <Radio
              component="div"
              checked={mediaValue === 'Item 2'}
              onChange={() => setMediaValue('Item 2')}
            />
          }
        />
      </List>
    </Page>
  );
}
RadioPage.displayName = 'RadioPage';
