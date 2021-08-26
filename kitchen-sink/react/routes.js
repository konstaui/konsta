import BadgePage from './pages/BadgePage.jsx';
import ButtonsPage from './pages/ButtonsPage.jsx';
import CardsPage from './pages/CardsPage.jsx';
import CheckboxPage from './pages/CheckboxPage.jsx';
import ChipsPage from './pages/ChipsPage.jsx';
import ContentBlockPage from './pages/ContentBlockPage.jsx';
import FabPage from './pages/FabPage.jsx';
import FormInputsPage from './pages/FormInputsPage.jsx';
import ListPage from './pages/ListPage.jsx';
import MenuListPage from './pages/MenuListPage.jsx';
import NavbarPage from './pages/NavbarPage.jsx';
import PopoverPage from './pages/PopoverPage.jsx';
import PopupPage from './pages/PopupPage.jsx';
import PreloaderPage from './pages/PreloaderPage.jsx';
import ProgressbarPage from './pages/ProgressbarPage.jsx';
import RadioPage from './pages/RadioPage.jsx';
import RangeSliderPage from './pages/RangeSliderPage.jsx';
import SegmentedPage from './pages/SegmentedPage.jsx';
import StepperPage from './pages/StepperPage.jsx';
import SubnavbarPage from './pages/SubnavbarPage.jsx';
import TabbarPage from './pages/TabbarPage.jsx';
import ToastPage from './pages/ToastPage.jsx';
import TogglePage from './pages/TogglePage.jsx';
import ToolbarPage from './pages/ToolbarPage.jsx';

const routes = [
  BadgePage,
  ButtonsPage,
  CardsPage,
  CheckboxPage,
  ChipsPage,
  ContentBlockPage,
  FabPage,
  FormInputsPage,
  ListPage,
  MenuListPage,
  NavbarPage,
  PopoverPage,
  PopupPage,
  PreloaderPage,
  ProgressbarPage,
  RadioPage,
  RangeSliderPage,
  SegmentedPage,
  StepperPage,
  SubnavbarPage,
  TabbarPage,
  ToastPage,
  TogglePage,
  ToolbarPage,
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
