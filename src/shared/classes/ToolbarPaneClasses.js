import { cls } from '../cls.js';

export const ToolbarPaneClasses = (props, colors, dark, baseClassName) => {
  const { tabbar } = props;
  return {
    base: {
      common: cls(baseClassName),
      ios: cls(
        'k-toolbar-pane flex relative justify-between items-center h-full rounded-full group/toolbar-pane',
        tabbar && 'w-full md:w-auto'
      ),
      material: cls('contents'),
    },
    highlight: {
      ios: 'absolute left-0 top-0 h-full rounded-[inherit]  duration-300 pointer-events-none',
    },
    highlightInner: {
      ios: cls(
        'bg-black/10 rounded-[inherit] absolute inset-1 duration-300 pointer-events-none',
        dark('dark:bg-white/15')
      ),
    },
    highlightThumb: {
      ios: cls(
        'rounded-[inherit] absolute inset-1 opacity-0 duration-300 shadow-ios-light-glass-thumb pointer-events-none bg-black/5',
        dark('dark:shadow-ios-dark-glass-thumb dark:bg-white/10')
      ),
    },
    highlightInnerPressed: {
      common: cls('opacity-0 scale-140'),
    },
    highlightThumbPressed: {
      common: cls('opacity-100 scale-140'),
    },
  };
};
