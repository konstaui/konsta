import { positionClass } from '../position-class.js';

export const IconClasses = (props, classes) => {
  return {
    base: `${positionClass('relative', classes)} inline-block not-italic`,
    badge: 'absolute ltr:-right-1.5 rtl:-left-1.5 -top-0.5',
  };
};
