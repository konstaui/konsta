import { useContext } from 'react';
import { TailwindMobileTheme } from './context';
import { cls } from './cls';

const propClasses = (classesObj, theme, state) => {
  if (typeof classesObj === 'string') return classesObj;
  const arr = [classesObj.initial, classesObj[theme]];
  if (state && classesObj[state]) {
    if (typeof classesObj[state] === 'string') arr.push(classesObj[state]);
    else {
      arr.push(classesObj[state].initial, classesObj[state][theme]);
    }
  }
  return arr;
};
const themeClasses = (classesObj, theme, addBaseClassName) => {
  const c = {};
  const themeSubKeys = ['initial', 'ios', 'material', 'common'];
  Object.keys(classesObj).forEach((key) => {
    const addBaseClass = key === 'base' ? addBaseClassName : '';
    c[key] = cls(propClasses(classesObj[key], theme), addBaseClass);
    if (typeof classesObj[key] !== 'string') {
      Object.keys(classesObj[key])
        .filter((state) => !themeSubKeys.includes(state))
        .forEach((state) => {
          c[`${key}_${state}`] = cls(
            propClasses(classesObj[key], theme),
            propClasses(classesObj[key], theme, state),
            addBaseClass
          );
        });
    }
  });
  return c;
};

const useTheme = ({ ios, material }) => {
  const themeContext = useContext(TailwindMobileTheme);
  let theme = themeContext || 'common';
  if (ios) theme = 'ios';
  if (material) theme = 'material';
  return {
    theme,
    themeClasses: (classesObj, addBaseClassName) =>
      themeClasses(classesObj, theme, addBaseClassName),
  };
};

export { useTheme };
