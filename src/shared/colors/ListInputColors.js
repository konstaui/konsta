import { cls } from '../cls.js';

export const ListInputColors = (colorsProp = {}, dark) => {
  return {
    labelFocus: 'text-primary',
    errorText: 'text-red-500',
    hairlineError: 'hairline-red-500',
    hairlineFocus: 'hairline-primary',
    ...colorsProp,
  };
};
