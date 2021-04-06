import ChipsPage from './pages/ChipsPage';
import BadgePage from './pages/BadgePage';
import ButtonsPage from './pages/ButtonsPage';
import SegmentedPage from './pages/SegmentedPage';
import ContentBlockPage from './pages/ContentBlockPage';
import ListPage from './pages/ListPage';
import CardsPage from './pages/CardsPage';
import CheckboxPage from './pages/CheckboxPage';
import RadioPage from './pages/RadioPage';
import ProgressbarPage from './pages/ProgressbarPage';
import PreloaderPage from './pages/PreloaderPage';
import TogglePage from './pages/TogglePage';
import MenuListPage from './pages/MenuListPage';
import ToolbarPage from './pages/ToolbarPage';
import TabbarPage from './pages/TabbarPage';
import FabPage from './pages/FabPage';
import StepperPage from './pages/StepperPage';
import FormInputsPage from './pages/FormInputsPage';
import NavbarPage from './pages/NavbarPage';
import SubnavbarPage from './pages/SubnavbarPage';
import PopupPage from './pages/PopupPage';
import ToastPage from './pages/ToastPage';
import RangeSliderPage from './pages/RangeSliderPage';

const routes = [
  ChipsPage,
  BadgePage,
  ButtonsPage,
  SegmentedPage,
  ContentBlockPage,
  ListPage,
  CardsPage,
  CheckboxPage,
  RadioPage,
  ProgressbarPage,
  PreloaderPage,
  TogglePage,
  MenuListPage,
  ToolbarPage,
  TabbarPage,
  FabPage,
  StepperPage,
  FormInputsPage,
  NavbarPage,
  SubnavbarPage,
  PopupPage,
  ToastPage,
  RangeSliderPage,
].map((component) => {
  const name = component.name;
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
