export const TabbarLinkClasses = () => {
  return {
    content: {
      common: 'flex flex-col items-center h-full',
      ios: 'py-1',
      material: 'py-2',
    },
    icon: {
      common: 'flex items-center justify-center',
      ios: 'w-7 h-7',
      material: 'w-6 h-6',
    },
    label: {
      ios: 'text-xs font-medium',
      material: 'text-sm font-normal normal-case',
    },
  };
};
