// eslint-disable-next-line
import { writable } from 'svelte/store';

const KonstaStore = writable({
  theme: 'material',
  dark: true,
  touchRipple: true,
});

export { KonstaStore };
