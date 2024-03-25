const useDarkClasses = (classNames, context) => {
  if (!context || !context.value.dark) return '';
  return classNames;
};
const createUseDarkClasses = (context) => (classNames) =>
  useDarkClasses(classNames, context);

export { createUseDarkClasses as darkClasses, useDarkClasses };
