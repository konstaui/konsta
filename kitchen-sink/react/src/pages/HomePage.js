import React from 'react';
import { BlockTitle, List, ListItem, Radio } from 'tailwind-mobile/react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import DemoIcon from '../components/DemoIcon';
import Page from '../components/Page';

export default function HomePage({ theme, setTheme }) {
  return (
    <Page title="Tailwind Mobile" backLink={false}>
      <BlockTitle>Theme</BlockTitle>
      <List>
        <ListItem
          label
          title="iOS Theme"
          media={
            <Radio
              onChange={() => setTheme('ios')}
              component="div"
              checked={theme === 'ios'}
            />
          }
        />
        <ListItem
          label
          title="Material Theme"
          media={
            <Radio
              onChange={() => setTheme('material')}
              component="div"
              checked={theme === 'material'}
            />
          }
        />
      </List>

      <BlockTitle>Components</BlockTitle>
      <List>
        {routes.map((route) => (
          <ListItem
            key={route.path}
            link
            title={route.title}
            linkComponent={Link}
            linkProps={{ to: route.path }}
            media={<DemoIcon />}
          />
        ))}
      </List>
    </Page>
  );
}
