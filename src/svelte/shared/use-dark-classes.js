import { get } from 'svelte/store';
import { KonstaStore } from './KonstaStore.js';

const useDarkClasses = () => {
  return (classNames) => {
    const context = get(KonstaStore);
    if (!context.dark) return '';
    return classNames;
  };
};

export { useDarkClasses };
