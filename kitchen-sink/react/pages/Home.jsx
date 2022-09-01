import React, { useLayoutEffect, useState } from 'react';
import {
  Page,
  Navbar,
  Block,
  Card,
  BlockTitle,
  List,
  ListItem,
  Radio,
  Toggle,
  Link,
} from 'konsta/react';
import { LogoAndroid, LogoIos, MoonStarsFill } from 'framework7-icons/react';
import { Link as RouterLink } from 'react-router-dom';
import routes from '../routes.js';
import DemoIcon from '../components/DemoIcon';

export default function HomePage({
  theme,
  setTheme,
  colorTheme,
  setColorTheme,
}) {
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
      <Navbar title="Konsta UI" large transparent centerTitle />

      <BlockTitle>Theming</BlockTitle>
      <Block>
        <div className="grid grid-cols-3 gap-4">
          <Card margin="" contentWrap={false} className="overflow-hidden">
            <Link
              component="label"
              touchRipple
              className="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
            >
              <LogoIos className="text-[28px]" />
              <Radio
                onChange={() => setTheme('ios')}
                component="div"
                checked={theme === 'ios'}
              />
            </Link>
          </Card>

          <Card margin="" contentWrap={false} className="overflow-hidden">
            <Link
              component="label"
              touchRipple
              className="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
            >
              <LogoAndroid className="text-[28px]" />
              <Radio
                onChange={() => setTheme('material')}
                component="div"
                checked={theme === 'material'}
              />
            </Link>
          </Card>

          <Card margin="" contentWrap={false} className="overflow-hidden">
            <Link
              component="label"
              touchRipple
              className="!flex flex-col p-4 space-y-4 !space-x-0 text-center h-full"
            >
              <MoonStarsFill className="text-[28px]" />
              <Toggle onChange={() => toggleDarkMode()} checked={darkMode} />
            </Link>
          </Card>
        </div>
        <Card margin="mt-4">
          <div className="flex items-center justify-around">
            <div
              onClick={() => setColorTheme('')}
              className={`bg-brand-primary w-8 h-8 rounded-full cursor-pointer duration-200 ${
                colorTheme === '' ? '' : 'scale-75'
              }`}
            />
            <div
              onClick={() => setColorTheme('k-color-brand-red')}
              className={`bg-brand-red w-8 h-8 rounded-full cursor-pointer duration-200 ${
                colorTheme === 'k-color-brand-red' ? '' : 'scale-75'
              }`}
            />
            <div
              onClick={() => setColorTheme('k-color-brand-green')}
              className={`bg-brand-green w-8 h-8 rounded-full cursor-pointer duration-200 ${
                colorTheme === 'k-color-brand-green' ? '' : 'scale-75'
              }`}
            />
            <div
              onClick={() => setColorTheme('k-color-brand-yellow')}
              className={`bg-brand-yellow w-8 h-8 rounded-full cursor-pointer duration-200 ${
                colorTheme === 'k-color-brand-yellow' ? '' : 'scale-75'
              }`}
            />
            <div
              onClick={() => setColorTheme('k-color-brand-purple')}
              className={`bg-brand-purple w-8 h-8 rounded-full cursor-pointer duration-200 ${
                colorTheme === 'k-color-brand-purple' ? '' : 'scale-75'
              }`}
            />
          </div>
        </Card>
      </Block>

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
