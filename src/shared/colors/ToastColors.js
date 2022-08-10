import { cls } from '../cls.js';

export const ToastColors = (colorsProp = {}, dark) => {
  return {
    bgIos: 'bg-toast-ios',
    bgMaterial: 'bg-toast-material',
    text: 'text-white',
    ...colorsProp,
  };
};
