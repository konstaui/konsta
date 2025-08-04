export const ActionsClasses = () => {
  return {
    base: {
      common:
        'k-actions transition-transform z-40 left-1/2 bottom-0 transform -translate-x-1/2 max-w-md w-full overflow-hidden fixed',
      ios: 'pt-4 px-4 pb-safe-4 duration-300',
      material:
        'pb-safe last-child-hairline-b-none rounded-t-2xl duration-400 ease-material-in',
      opened: '',
      closed: 'translate-y-full',
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black/50 duration-300',
      opened: '',
      closed: 'opacity-0 pointer-events-none',
    },
  };
};
