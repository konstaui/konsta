import { cls } from '../cls.js';

// eslint-disable-next-line
export const ActionsGroupClasses = (props, colors) => {
  const { dividers } = props;
  return {
    base: {
      common: `k-actions-group relative`,
      ios: cls(
        `mt-2 first:mt-0 last-child-hairline-b-none rounded-4xl`,
        colors.bgIos
      ),
      material: cls(dividers && `hairline-b`, colors.bgMaterial),
    },
  };
};
