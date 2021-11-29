import { useContext } from 'react';
import { KonstaContext } from './KonstaContext.js';

const useDarkClasses = () => {
  const context = useContext(KonstaContext);
  return (classNames) => {
    if (!context.dark) return '';
    return classNames;
  };
};

export { useDarkClasses };
