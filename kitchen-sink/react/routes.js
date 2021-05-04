import BadgePage from './pages/BadgePage';
import ButtonsPage from './pages/ButtonsPage';
import CardsPage from './pages/CardsPage';
import CheckboxPage from './pages/CheckboxPage';
import ChipsPage from './pages/ChipsPage';
import ContentBlockPage from './pages/ContentBlockPage';
import FabPage from './pages/FabPage';
import FormInputsPage from './pages/FormInputsPage';
import ListPage from './pages/ListPage';
import MenuListPage from './pages/MenuListPage';
import NavbarPage from './pages/NavbarPage';
import PopoverPage from './pages/PopoverPage';
import PopupPage from './pages/PopupPage';
import PreloaderPage from './pages/PreloaderPage';
import ProgressbarPage from './pages/ProgressbarPage';
import RadioPage from './pages/RadioPage';
import RangeSliderPage from './pages/RangeSliderPage';
import SegmentedPage from './pages/SegmentedPage';
import StepperPage from './pages/StepperPage';
import SubnavbarPage from './pages/SubnavbarPage';
import TabbarPage from './pages/TabbarPage';
import ToastPage from './pages/ToastPage';
import TogglePage from './pages/TogglePage';
import ToolbarPage from './pages/ToolbarPage';

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
