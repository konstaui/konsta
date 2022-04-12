export const ChipClasses = (props, colors) => {
  return {
    base: {
      common: `${colors.text} text-sm inline-flex items-center justify-center align-middle rounded-full px-3 py-1`,
      fill: `${colors.bg}`,
      outline: `border ${colors.border}`,
    },
    media: '-ml-3 -my-1 mr-1 select-none',
    deleteButton:
      '-mr-2 -my-1 ml-1 h-full flex items-center justify-center w-6 cursor-pointer opacity-50 active:opacity-100 select-none',
  };
};
