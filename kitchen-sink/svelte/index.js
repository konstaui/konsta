import { mount } from 'svelte';
import App from './components/App.svelte';
import './styles/index.css';

// eslint-disable-next-line
const app = mount(App, {
  target: document.querySelector('#app'),
});
