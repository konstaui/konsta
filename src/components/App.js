import { useState } from 'react';

import Navbar from '../tailwind-mobile/components/Navbar';
import Toolbar from '../tailwind-mobile/components/Toolbar';
import Subnavbar from '../tailwind-mobile/components/Subnavbar';
import Segmented from '../tailwind-mobile/components/Segmented';
import SegmentedButton from '../tailwind-mobile/components/SegmentedButton';
import Link from '../tailwind-mobile/components/Link';

import ChipsDemo from './ChipsDemo';
import ButtonsDemo from './ButtonsDemo';
import SegmentedDemo from './SegmentedDemo';
import BlockDemo from './BlockDemo';
import ListDemo from './ListDemo';

function App() {
  const [theme, setTheme] = useState('ios');

  return (
    <div
      id="app"
      className={`relative ${theme === 'ios' ? 'ios' : 'material'} bg-gray-200`}
    >
      <Navbar
        className="sticky top-0 no-hairlines"
        left={<Link navbar>Left</Link>}
        title="Tailwind Mobile"
        right={<Link navbar>Right</Link>}
      />
      <Subnavbar className="sticky ios:top-11 material:top-14">
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
      <div>
        <ChipsDemo />
        <ButtonsDemo />
        <SegmentedDemo />
        <BlockDemo />
        <ListDemo />
      </div>
      <Toolbar className="sticky bottom-0">
        <Link toolbar>Link 1</Link>
        <Link toolbar>Link 2</Link>
        <Link toolbar>Link 3</Link>
      </Toolbar>
    </div>
  );
}

export default App;
