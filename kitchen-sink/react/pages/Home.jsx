import React, { useLayoutEffect, useState } from 'react';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  ListItem,
  Radio,
  Toggle,
  Link,
  Popover,
} from 'konsta/react';
import { Link as RouterLink } from 'react-router-dom';
import routes from '../routes.js';
import DemoIcon from '../components/DemoIcon';

export default function HomePage({
  theme,
  setTheme,
  setColorTheme,
  vibrant,
  setVibrant,
  monochrome,
  setMonochrome,
}) {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );
  const [colorPickerOpened, setColorPickerOpened] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Page>
      <Navbar title="Konsta UI" large transparent centerTitle />
      <BlockTitle>Theme</BlockTitle>
      <List strong inset>
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
      <List strong inset>
        <ListItem
          title="Dark Mode"
          label
          after={
            <Toggle
              component="div"
              onChange={() => toggleDarkMode()}
              checked={darkMode}
            />
          }
        />
        <ListItem
          title="Color Theme"
          link
          onClick={() => setColorPickerOpened(true)}
          after={
            <div className="w-6 h-6 rounded-full bg-primary home-color-picker" />
          }
        />
        {theme === 'material' && (
          <>
            <ListItem
              title="Vibrant Colors"
              label
              after={
                <Toggle
                  component="div"
                  onChange={() => setVibrant(!vibrant)}
                  checked={vibrant}
                />
              }
            />
            <ListItem
              title="Monochrome"
              label
              after={
                <Toggle
                  component="div"
                  onChange={() => setMonochrome(!monochrome)}
                  checked={monochrome}
                />
              }
            />
          </>
        )}
      </List>
      <Popover
        opened={colorPickerOpened}
        onBackdropClick={() => setColorPickerOpened(false)}
        className="w-auto"
        target=".home-color-picker"
      >
        <div className="grid grid-cols-3 py-2 ios:px-2">
          <Link
            className="overflow-hidden h-12 w-12"
            onClick={() => setColorTheme('')}
          >
            <span className="bg-brand-primary w-6 h-6 rounded-full" />
          </Link>
          <Link
            className="overflow-hidden h-12 w-12"
            onClick={() => setColorTheme('k-color-brand-red')}
          >
            <span className="bg-brand-red w-6 h-6 rounded-full" />
          </Link>
          <Link
            className="overflow-hidden h-12 w-12"
            onClick={() => setColorTheme('k-color-brand-green')}
          >
            <span className="bg-brand-green w-6 h-6 rounded-full" />
          </Link>
          <Link
            className="overflow-hidden h-12 w-12"
            onClick={() => setColorTheme('k-color-brand-yellow')}
          >
            <span className="bg-brand-yellow w-6 h-6 rounded-full" />
          </Link>
          <Link
            className="overflow-hidden h-12 w-12"
            onClick={() => setColorTheme('k-color-brand-purple')}
          >
            <span className="bg-brand-purple w-6 h-6 rounded-full" />
          </Link>
        </div>
      </Popover>

      <BlockTitle>Components</BlockTitle>
      <List strong inset>
        {routes.map((route) => (
          <ListItem
            key={route.path}
            link
            title={route.title}
            linkComponent={RouterLink}
            linkProps={{ to: route.path }}
            media={<DemoIcon />}
          />
        ))}
      </List>
    </Page>
  );
}
HomePage.displayName = 'HomePage';
