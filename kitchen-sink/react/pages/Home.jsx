import React, { useLayoutEffect, useState } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Radio,
  Toggle,
} from 'konsta/react';
import { Link } from 'react-router-dom';
import routes from '../routes.js';
import DemoIcon from '../components/DemoIcon';

export default function HomePage({ theme, setTheme }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useLayoutEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  });

  return (
    <Page>
      <Navbar title="Konsta UI" />

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

      <List>
        <ListItem
          title="Dark Mode"
          after={
            <Toggle onChange={() => toggleDarkMode()} checked={darkMode} />
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
HomePage.displayName = 'HomePage';
