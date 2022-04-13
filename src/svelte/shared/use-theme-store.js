import { writable } from 'svelte/store';

const useThemeStore = writable('material');

export { useThemeStore };
