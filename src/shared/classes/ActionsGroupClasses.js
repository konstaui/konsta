import { cls } from '../cls.js';

// eslint-disable-next-line
export const ActionsGroupClasses = (props) => {
  const { hairlines } = props;
  return {
    base: {
      common: `relative`,
      ios: `mt-2 first:mt-0 last-child-hairline-b-none`,
      material: cls(hairlines && `hairline-b`),
    },
  };
};
