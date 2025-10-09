import { Signal, computed } from '@angular/core';
import { cls } from '../../shared/cls.js';
import {
  KonstaContextState,
  KonstaTheme,
  injectKonstaContext,
} from './konsta-context.js';

export interface ThemeOverride {
  ios?: boolean;
  material?: boolean;
}

type ThemeOverrideFactory = ThemeOverride | (() => ThemeOverride | undefined);

type ClassesObject = Record<
  string,
  string | Record<string, string | Record<string, string>>
>;

const propClasses = (
  classesObj: string | Record<string, any>,
  theme: KonstaTheme,
  state?: string
) => {
  if (typeof classesObj === 'string') return classesObj;
  const arr = [classesObj[theme], classesObj['common']];
  if (state && classesObj[state]) {
    if (typeof classesObj[state] === 'string') {
      arr.push(classesObj[state] as string);
    } else {
      arr.push(classesObj[state]['common'], classesObj[state][theme]);
    }
  }
  return arr;
};

const themeClasses = (
  classesObj: ClassesObject,
  theme: KonstaTheme,
  addBaseClassName?: string
) => {
  const c: Record<string, any> = {};
  const themeSubKeys = ['common', 'ios', 'material'];

  Object.keys(classesObj).forEach((key) => {
    const addBaseClass = key === 'base' ? addBaseClassName : '';
    const value = classesObj[key];
    const hasStates =
      typeof value !== 'string' &&
      Object.keys(value).some((state) => !themeSubKeys.includes(state));

    if (!hasStates) {
      c[key] = cls(propClasses(value, theme), addBaseClass);
      return;
    }

    c[key] = {};
    const defaultStateClasses = propClasses(value, theme);
    c[key]['default'] = cls(defaultStateClasses, addBaseClass);

    Object.keys(value)
      .filter((state) => !themeSubKeys.includes(state))
      .forEach((state) => {
        c[key][state] = cls(
          defaultStateClasses,
          propClasses(value, theme, state),
          addBaseClass
        );
      });
  });

  return c;
};

const resolveOverrides = (factory?: ThemeOverrideFactory): Signal<ThemeOverride> =>
  computed(() => {
    if (typeof factory === 'function') {
      return factory() || {};
    }
    return factory || {};
  });

const resolveTheme = (
  ctx: KonstaContextState,
  overrides?: ThemeOverrideFactory
): Signal<KonstaTheme> => {
  const overrideSignal = resolveOverrides(overrides);
  return computed(() => {
    const value = overrideSignal();
    if (value.ios) return 'ios';
    if (value.material) return 'material';
    return ctx.theme();
  });
};

export const useThemeSignal = (
  overrides?: ThemeOverrideFactory
): Signal<KonstaTheme> =>
  resolveTheme(injectKonstaContext(), overrides);

export const useThemeClasses = (overrides?: ThemeOverrideFactory) => {
  const ctx = injectKonstaContext();
  const theme = resolveTheme(ctx, overrides);
  return (classesObj: ClassesObject, addBaseClassName?: string) =>
    themeClasses(classesObj, theme(), addBaseClassName);
};

export const useDarkClasses = () => {
  const ctx = injectKonstaContext();
  const enabled = computed(() => ctx.dark());
  return (classNames: string) => (enabled() ? classNames : '');
};
