import { cls } from '../cls.js';
import { positionClass } from '../position-class.js';

export const PageClasses = (props, classes, darkClasses) => {
  return {
    base: {
      common: cls(
        'h-full w-full left-0 top-0 overflow-auto',
        positionClass('absolute', classes)
      ),
      ios: cls('bg-page-ios-light', darkClasses('dark:bg-page-ios-dark')),
      material: cls(
        'bg-page-material-light',
        darkClasses('dark:bg-page-material-dark')
      ),
    },
  };
};
