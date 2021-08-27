import { useContext } from 'react';
import { TailwindMobileContext } from './TailwindMobileContext.js';

const useDarkClasses = () => {
  const context = useContext(TailwindMobileContext);
  return (classNames) => {
    if (!context.dark) return '';
    return classNames;
  };
};

export { useDarkClasses };
