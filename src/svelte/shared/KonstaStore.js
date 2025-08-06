// eslint-disable-next-line
import { writable } from 'svelte/store';

const KonstaStore = writable({
  theme: 'ios',
  dark: true,
  touchRipple: true,
});

export { KonstaStore };
