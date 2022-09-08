import { cls } from '../cls.js';

// eslint-disable-next-line
export const ActionsGroupClasses = (props) => {
  const { dividers } = props;
  return {
    base: {
      common: `relative`,
      ios: `mt-2 first:mt-0 last-child-hairline-b-none`,
      material: cls(dividers && `hairline-b`),
    },
  };
};
