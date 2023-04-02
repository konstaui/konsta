import { positionClass } from '../position-class.js';

export const IconClasses = (props, classes) => {
  return {
    base: `${positionClass('relative', classes)} inline-block not-italic`,
    badge: 'absolute -end-1.5 -top-0.5',
  };
};
