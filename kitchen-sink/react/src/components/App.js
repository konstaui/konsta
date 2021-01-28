import React, { useState } from 'react';

import {
  TailwindMobileTheme,
  Page,
  Navbar,
  Toolbar,
  Subnavbar,
  Segmented,
  SegmentedButton,
  Link,
} from 'tailwind-mobile/react';

import ChipsDemo from '../demos/ChipsDemo';
import ButtonsDemo from '../demos/ButtonsDemo';
import SegmentedDemo from '../demos/SegmentedDemo';
import BlockDemo from '../demos/BlockDemo';
import ListDemo from '../demos/ListDemo';
import CardsDemo from '../demos/CardsDemo';
import CheckboxDemo from '../demos/CheckboxDemo';
import RadioDemo from '../demos/RadioDemo';
import ProgressbarDemo from '../demos/ProgressbarDemo';
import PreloaderDemo from '../demos/PreloaderDemo';
import ToggleDemo from '../demos/ToggleDemo';

function App() {
  const [theme, setTheme] = useState('ios');
  return (
    <TailwindMobileTheme.Provider value={theme}>
      <div className={`app ${theme}`}>
        <Page className="relative">
          <Navbar
            className="top-0 no-hairlines"
            position="sticky"
            left={<Link navbar>Left</Link>}
            title="Tailwind Mobile"
            right={<Link navbar>Right</Link>}
          />
          <Subnavbar
            className="sticky ios:top-11 material:top-14"
            position="sticky"
          >
            <Segmented strong rounded>
              <SegmentedButton
                strong
                small
                rounded
                active={theme === 'ios'}
                onClick={() => setTheme('ios')}
              >
                iOS Theme
              </SegmentedButton>
              <SegmentedButton
                strong
                small
                rounded
                active={theme === 'material'}
                onClick={() => setTheme('material')}
              >
                Material Design
              </SegmentedButton>
            </Segmented>
          </Subnavbar>

          <ToggleDemo />
          <PreloaderDemo />
          <ProgressbarDemo />
          <RadioDemo />
          <CheckboxDemo />
          <CardsDemo />
          <ChipsDemo />
          <ButtonsDemo />
          <SegmentedDemo />
          <BlockDemo />
          <ListDemo />

          <Toolbar className="bottom-0" position="sticky">
            <Link toolbar>Link 1</Link>
            <Link toolbar>Link 2</Link>
            <Link toolbar>Link 3</Link>
          </Toolbar>
        </Page>
      </div>
    </TailwindMobileTheme.Provider>
  );
}

export default App;
