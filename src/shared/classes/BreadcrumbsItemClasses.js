import { cls } from '../cls.js';

export const BreadcrumbsItemClasses = (props, colors) => {
  const { active } = props;
  return {
    base: {
      common: cls(
        `flex items-center`,
        active && 'font-semibold',
        colors[active ? 'textActive' : 'text']
      ),
      ios: ``,
      material: ``,
    },
  };
};
