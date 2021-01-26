import { useContext } from 'react';
import { ThemeContext } from './theme-context';
import { cls } from './cls';

const themeClasses = (classesObj, theme, state) => {
  if (typeof classesObj === 'string') return classesObj;
  const args = [classesObj.initial, classesObj[theme]];
  if (state && classesObj[state]) {
    if (typeof classesObj[state] === 'string') args.push(classesObj[state]);
    else {
      args.push(classesObj[state].initial, classesObj[state][theme]);
    }
  }
  return cls(...args);
};

const useTheme = ({ ios, material }) => {
  const themeContext = useContext(ThemeContext);
  let theme = themeContext || 'common';
  if (ios) theme = 'ios';
  if (material) theme = 'material';
  return {
    theme,
    themeClasses: (classesObj, state) => themeClasses(classesObj, theme, state),
  };
};

export { useTheme };
