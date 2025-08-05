// eslint-disable-next-line
import { KonstaStore } from './KonstaStore.svelte.js';

const useDarkClasses = () => {
  return (classNames) => {
    if (!KonstaStore.dark) return '';
    return classNames;
  };
};

export { useDarkClasses };
