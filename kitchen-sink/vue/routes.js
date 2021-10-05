import Badge from './pages/Badge.jsx';
import Buttons from './pages/Buttons.jsx';
import Cards from './pages/Cards.jsx';
import Checkbox from './pages/Checkbox.jsx';
import Chips from './pages/Chips.jsx';
import ContentBlock from './pages/ContentBlock.jsx';
import Fab from './pages/Fab.jsx';
import FormInputs from './pages/FormInputs.jsx';
import List from './pages/List.jsx';
import ListButton from './pages/ListButton.jsx';
import MenuList from './pages/MenuList.jsx';
import Navbar from './pages/Navbar.jsx';
import Panel from './pages/SidePanels';
import Popover from './pages/Popover.jsx';
import Popup from './pages/Popup.jsx';
import Preloader from './pages/Preloader.jsx';
import Progressbar from './pages/Progressbar.jsx';
import Radio from './pages/Radio.jsx';
import RangeSlider from './pages/RangeSlider.jsx';
import SegmentedControl from './pages/SegmentedControl.jsx';
import SheetModal from './pages/SheetModal.jsx';
import Stepper from './pages/Stepper.jsx';
import Subnavbar from './pages/Subnavbar.jsx';
import Tabbar from './pages/Tabbar.jsx';
import Toast from './pages/Toast.jsx';
import Toggle from './pages/Toggle.jsx';
import Toolbar from './pages/Toolbar.jsx';

const routes = [
  Badge,
  Buttons,
  Cards,
  Checkbox,
  Chips,
  ContentBlock,
  Fab,
  FormInputs,
  List,
  ListButton,
  MenuList,
  Navbar,
  Panel,
  Popover,
  Popup,
  Preloader,
  Progressbar,
  Radio,
  RangeSlider,
  SegmentedControl,
  SheetModal,
  Stepper,
  Subnavbar,
  Tabbar,
  Toast,
  Toggle,
  Toolbar,
].map((component) => {
  const name = component.displayName || component.name;
  const path = `/${name
    .split('Page')[0]
    .split('')
    .map((char, index) =>
      char.match(/[A-Z]/) && index !== 0 ? `-${char}` : char
    )
    .join('')
    .toLowerCase()}`;
  const title =
    component.title ||
    name
      .split('Page')[0]
      .split('')
      .map((char, index) =>
        char.match(/[A-Z]/) && index !== 0 ? ` ${char}` : char
      )
      .join('');
  return {
    component,
    path,
    title,
  };
});
routes.sort((a, b) => (a.title > b.title ? 1 : -1));

export default routes;
