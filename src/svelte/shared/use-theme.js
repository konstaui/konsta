import { get } from 'svelte/store';
import { KonstaStore } from './KonstaStore.js';

const useTheme = (props, cb) => {
  let ios;
  let material;
  if (typeof props === 'function') {
    cb = props;
    props = {};
  } else {
    ios = props.ios;
    material = props.material;
  }
  const calcTheme = (ctx) => {
    let theme = ctx.theme || 'ios';
    if (ios) theme = 'ios';
    if (material) theme = 'material';
    return theme;
  };
  if (cb) {
    KonstaStore.subscribe((newValue) => {
      cb(calcTheme(newValue));
    });
  }
  return calcTheme(get(KonstaStore));
};

export { useTheme };
