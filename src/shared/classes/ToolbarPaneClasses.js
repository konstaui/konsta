import { cls } from '../cls.js';

export const ToolbarPaneClasses = (props, colors) => {
  const { tabbar } = props;
  return {
    base: {
      common: '',
      ios: cls(
        'flex relative justify-between items-center overflow-hidden h-full rounded-full',
        tabbar && 'w-full md:w-auto md:px-4'
      ),
      material: cls('contents'),
    },
  };
};
