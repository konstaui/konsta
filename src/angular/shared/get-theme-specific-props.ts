import { KonstaTheme } from './konsta-context.js';

export type ThemeSpecificPropKey<T extends object> = {
  [K in keyof T]: `${string & K}Ios` | `${string & K}Material`;
}[keyof T];

export const getThemeSpecificProps = <T extends Record<string, any>, P>(
  theme: KonstaTheme,
  obj: T,
  props: Record<string, any>
): T => {
  const res: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    res[key] =
      typeof obj[key] === 'undefined'
        ? theme === 'ios'
          ? props[`${key}Ios`]
          : props[`${key}Material`]
        : obj[key];
  });
  return res as T;
};
